import React, {useEffect, useMemo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import axios from "axios";
import {toast} from "react-toastify";

import {addToCart, removeQuantityCart, removeCart, setCart} from "../../../redux/cart/slice";
import {selectCart} from "../../../redux/cart/selectors";
import {loggedInSelector, optUserSelector, userSelectorEmail, userSelectorfirstName, userSelectorlastName, userSelectorNumber} from "../../../redux/auth/selectors";

import Button from "../../../shared/components/Button/Button";

import {
  Amount,
  AmountBlock,
  ButtonContainer,
  CounterBlock,
  DecIncBtn,
  DeleteBtn,
  DeleteIcon,
  DescriptionBlock,
  GoodsBlock,
  HeaderContent,
  ImageBlock,
  ItemNameLink,
  ModalShopingList,
  ModalTitle,
  PriceBlock,
  ReturnBTN,
  Thumb,
  TextNoProduckts,
  ReturnIcon,
  TableWrap,
  ButtonThumb,
  RedStar,
  AboutResetBasketText,
} from "./ShopingListStyled";
import { selectGoods } from "../../../redux/products/selectors";
import CryptoJS from "crypto-js";

import {trackInitiateCheckout} from "../../../facebookInt/FacebookPixelEvent";
const CartModal = ({ closeModal }) => {
  const cartItems = useSelector(selectCart);
  const items = useSelector(selectGoods);
  const optUser = useSelector(optUserSelector);
  const isLoggedIn = useSelector(loggedInSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemQuantities = useMemo(() => {
    return cartItems.reduce((quantities, item) => {
      quantities[item._id] = item.quantity !== undefined ? item.quantity : 0;
      return quantities;
    }, {});
  }, [cartItems]);

  const updateCartPricesAndQuantities = useCallback(
    (data) => {
      const updatedCartItems = data
        .map((cartItem) => {
          const correspondingItem = items.find(
            (item) => item.code === cartItem.code
          );

          if (!correspondingItem) return null;

          if (correspondingItem.amount === 0) {
            return null;
          }

          const updatedQuantity = Math.min(
            cartItem.quantity,
            correspondingItem.amount
          );

          return {
            ...cartItem,
            priceOPT: correspondingItem.priceOPT,
            price: correspondingItem.price,
            quantity: updatedQuantity,
            amount: correspondingItem.amount,
          };
        })
        .filter(Boolean);

      dispatch(setCart(updatedCartItems));
    },
    [items, dispatch]
  );

  const fetchUserCart = useCallback(async () => {
    try {
      const response = await axios.get(`/basket`);
      const data = response.data;

      if (data.length !== 0) {
        updateCartPricesAndQuantities(data);
      } else {
        dispatch(setCart([]));
      }
    } catch (error) {
      console.error("Помилка отримання корзини користувача:", error);
      toast.error("Помилка отримання кошика");
    }
  }, [dispatch, updateCartPricesAndQuantities]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserCart();
    }
  }, [isLoggedIn, fetchUserCart]);

  useEffect(() => {
    if (!isLoggedIn && cartItems.length > 0) {
      const updatedItems = cartItems
        .map((item) => {
          const correspondingItem = items.find((i) => i.code === item.code);
          if (!correspondingItem) return null;
          return {
            ...item,
            amount: correspondingItem.amount,
            price: correspondingItem.price,
            priceOPT: correspondingItem.priceOPT,
          };
        })
        .filter(Boolean);

      if (JSON.stringify(updatedItems) !== JSON.stringify(cartItems)) {
        dispatch(setCart(updatedItems));
      }
    }
  }, [isLoggedIn, items, cartItems, dispatch]);

  const increaseQuantity = async (item) => {
    const { _id, amount } = item;
    const newQuantity = itemQuantities[_id] + 1;

    if (amount && newQuantity > amount) {
      toast.error("Обмежена кількість товару на складі!");
      return;
    }

    try {
      if (isLoggedIn) {
        await updateCartItem(_id, newQuantity);
        await fetchUserCart();
      } else {
        dispatch(addToCart({ _id, quantity: newQuantity }));
      }
    } catch (error) {
      toast.error("Помилка оновлення кількості");
    }
  };

  const decreaseQuantity = async (itemId) => {
    const newQuantity = itemQuantities[itemId] - 1;

    try {
      if (newQuantity > 0) {
        if (isLoggedIn) {
          await updateCartItem(itemId, newQuantity);
          await fetchUserCart();
        } else {
          dispatch(
            removeQuantityCart({
              _id: itemId,
              quantity: newQuantity,
            })
          );
        }
      } else {
        await removeItem(itemId);
      }
    } catch (error) {
      toast.error("Помилка оновлення кількості");
    }
  };

  const removeItem = async (itemId) => {
    try {
      if (isLoggedIn) {
        await removeCartItem(itemId);
        await fetchUserCart();
      } else {
        dispatch(removeCart({ itemId }));
      }
    } catch (error) {
      toast.error("Помилка видалення товару");
    }
  };

  const updateCartItem = async (itemId, quantity) => {
    try {
      await axios.put(`/basket/${itemId}`, { quantity });
    } catch (error) {
      console.error("Помилка оновлення кількості товару в кошику:", error);
      throw error;
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      await axios.delete(`/basket/${itemId}`);
    } catch (error) {
      console.error("Помилка видалення товару з кошика:", error);
      throw error;
    }
  };

  const totalCost = optUser
    ? cartItems.reduce(
        (total, item) => total + item.priceOPT * itemQuantities[item._id],
        0
      )
    : cartItems.reduce(
        (total, item) => total + item.price * itemQuantities[item._id],
        0
      );

	const placeOrder = async () => {
		if (optUser && totalCost < 2500) {
			toast.error("Мінімальна сума замовлення 2500 грн!");
		} else {
			try {
				navigate("/order");
				closeModal();

				const safeEmail     = typeof userSelectorEmail === 'string' ? userSelectorEmail.trim().toLowerCase() : '',
				      safePhone     = typeof userSelectorNumber === 'string' ? userSelectorNumber.trim() : '',
				      safeFirstName = typeof userSelectorfirstName === 'string' ? userSelectorfirstName.trim() : '',
				      safeLastName  = typeof userSelectorlastName === 'string' ? userSelectorlastName.trim() : '',
				      userData      = {
					      em: CryptoJS.SHA256(safeEmail.trim().toLowerCase()).toString(),
					      ph: CryptoJS.SHA256(safePhone.trim()).toString(),
					      fn: CryptoJS.SHA256(safeFirstName.trim().toLowerCase()).toString(),
					      ln: CryptoJS.SHA256(safeLastName.trim().toLowerCase()).toString(),
				      };

				await trackInitiateCheckout(totalCost, cartItems.map(p => p._id), userData);
			} catch (error) {
				console.error("Помилка розміщення замовлення:", error);
			}
		}
	};
  const backToCatalog = () => {
    navigate("/katehoriji");
    closeModal();
  };

  return (
    <ModalShopingList>
      <ModalTitle>Корзина</ModalTitle>
      {cartItems.length !== 0 ? (
        <TableWrap>
          <table style={{ borderCollapse: "collapse", borderSpacing: "20px" }}>
            <thead>
              <tr>
                <HeaderContent></HeaderContent>
                <HeaderContent></HeaderContent>
                <HeaderContent>Товар</HeaderContent>
                <HeaderContent>Кількість</HeaderContent>
                <HeaderContent style={{ textAlign: "center" }}>
                  Вартість
                </HeaderContent>
              </tr>
            </thead>
            <GoodsBlock>
              {cartItems
                .filter((item) => {
                  if (!isLoggedIn) {
                    if (itemQuantities[item._id] === 0) {
                      removeItem(item._id);
                      return false;
                    }

                    return true;
                  } else {
                    return true;
                  }
                })
                .map(
                  (item) =>
                    itemQuantities[item._id] !== 0 && (
                      <Thumb key={item._id}>
                        <ImageBlock>
                          <img src={item.images} alt="itemImage" />
                        </ImageBlock>
                        <DescriptionBlock>
                          <ItemNameLink
                            to={`/product/${item.id || item.productId}`}
                            onClick={closeModal}
                          >
                            {item.name}
                          </ItemNameLink>
                        </DescriptionBlock>
                        <AmountBlock>
                          <CounterBlock>
                            <DecIncBtn
                              onClick={() => item && decreaseQuantity(item._id)}
                            >
                              –
                            </DecIncBtn>
                            {itemQuantities[item._id]}
                            <DecIncBtn onClick={() => increaseQuantity(item)}>
                              +
                            </DecIncBtn>
                          </CounterBlock>
                        </AmountBlock>
                        {optUser ? (
                          <PriceBlock>
                            {item.priceOPT * itemQuantities[item._id]} грн
                          </PriceBlock>
                        ) : (
                          <PriceBlock>
                            {item.price * itemQuantities[item._id]} грн
                          </PriceBlock>
                        )}
                        <td>
                          <DeleteBtn onClick={() => removeItem(item._id)}>
                            <DeleteIcon />
                          </DeleteBtn>
                        </td>
                      </Thumb>
                    )
                )}
            </GoodsBlock>
          </table>
          <Amount>Всього: {totalCost} грн</Amount>
        </TableWrap>
      ) : (
        <TextNoProduckts>Ви ще нічого не вибрали!</TextNoProduckts>
      )}

      <ButtonThumb>
        <ButtonContainer>
          <ReturnBTN onClick={backToCatalog}>
            <ReturnIcon />
            Повернутись до покупок
          </ReturnBTN>
        </ButtonContainer>
        <ButtonContainer>
          <AboutResetBasketText>
            <RedStar>*</RedStar>Увага! Ваша корзина автоматично анулюється через
            10 днів.
          </AboutResetBasketText>
          <Button
            name="Оформити замовлення"
            onClick={placeOrder}
            text="Оформити замовлення"
            disabled={cartItems.length === 0}
          />
        </ButtonContainer>
      </ButtonThumb>
    </ModalShopingList>
  );
};

export default CartModal;

import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

import {
  addToCart,
  removeQuantityCart,
  removeCart,
  setCart,
} from "../../../redux/cart/slice";
import { selectCart } from "../../../redux/cart/selectors";
import {
  loggedInSelector,
  optUserSelector,
} from "../../../redux/auth/selectors";

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

const CartModal = ({ closeModal }) => {
  const cartItems = useSelector(selectCart);
  const items = useSelector(selectGoods);
  const optUser = useSelector(optUserSelector);
  const isLoggedIn = useSelector(loggedInSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Використання useMemo для обчислення itemQuantities
  const itemQuantities = useMemo(() => {
    return cartItems.reduce((quantities, item) => {
      quantities[item._id] = item.quantity !== undefined ? item.quantity : 0;
      return quantities;
    }, {});
  }, [cartItems]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchUserCart();
    }
    if (!isLoggedIn) {
      updateCartPricesAndQuantities(cartItems);
    }
    // eslint-disable-next-line
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    const newQuantities = { ...itemQuantities };

    items.forEach((item) => {
      if (newQuantities[item._id] > item.amount) {
        newQuantities[item._id] = item.amount;
      }
    });
  }, [items, itemQuantities]);

  const fetchUserCart = async () => {
    try {
      const response = await axios.get(`/basket`);
      const data = response.data;

      if (data.length !== 0) {
        updateCartPricesAndQuantities(data);
      } else {
        dispatch(setCart(data));
      }
    } catch (error) {
      console.error("Помилка отримання корзини користувача:", error);
    }
  };

  const updateCartPricesAndQuantities = (data) => {
    const updatedCartItems = data.map((cartItem) => {
      const correspondingItem = items.find(
        (item) => item.code === cartItem.code
      );
      if (correspondingItem.amount === 0) {
        removeItem(cartItem._id);
        return {
          ...correspondingItem,
        };
      }

      // console.log(correspondingItem);

      if (correspondingItem) {
        const updatedPriceOpt = correspondingItem.priceOPT;
        const updatedPrice = correspondingItem.price;

        if (
          items.some(
            (item) =>
              item.code === correspondingItem.code &&
              item.amount !== correspondingItem.amount
          )
        ) {
          correspondingItem.amount = items.find(
            (item) => item.code === correspondingItem.code
          ).amount;
        }

        const updatedQuantity =
          cartItem.quantity >= correspondingItem.amount
            ? correspondingItem.amount
            : cartItem.quantity;
        if (updatedQuantity !== cartItem.quantity && isLoggedIn) {
          updateCartItem(cartItem._id, updatedQuantity);
        }

        return {
          ...cartItem,
          priceOPT: updatedPriceOpt,
          price: updatedPrice,
          quantity: updatedQuantity,
          amount: correspondingItem.amount,
        };
      }

      return cartItem;
    });

    dispatch(setCart(updatedCartItems));
  };

  const increaseQuantity = (item) => {
    const { _id, amount } = item;
    const newQuantity = itemQuantities[_id] + 1;

    if (amount && newQuantity > amount) {
      toast.error("Обмежена кількість товару на складі!");
      return;
    }

    if (isLoggedIn) {
      updateCartItem(_id, newQuantity);
    } else {
      dispatch(addToCart({ _id, quantity: newQuantity }));
    }
  };

  const decreaseQuantity = (itemId) => {
    const newQuantity = itemQuantities[itemId] - 1;

    if (newQuantity > 0) {
      if (isLoggedIn) {
        updateCartItem(itemId, newQuantity);
      } else {
        dispatch(
          removeQuantityCart({
            _id: itemId,
            quantity: newQuantity,
          })
        );
      }
    } else {
      removeItem(itemId);
    }
  };

  const removeItem = (itemId) => {
    if (isLoggedIn) {
      removeCartItem(itemId);
    } else {
      dispatch(removeCart({ itemId }));
    }
  };

  const updateCartItem = async (itemId, quantity) => {
    try {
      await axios.put(`/basket/${itemId}`, { quantity });
      fetchUserCart();
    } catch (error) {
      console.error("Помилка оновлення кількості товару в кошику:", error);
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      await axios.delete(`/basket/${itemId}`);
      fetchUserCart();
    } catch (error) {
      console.error("Помилка видалення товару з кошика:", error);
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
      } catch (error) {
        console.error("Помилка розміщення замовлення:", error);
      }
    }
  };
  const backToCatalog = () => {
    navigate("/category");
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

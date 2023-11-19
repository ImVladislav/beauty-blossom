import React, { useEffect, useState } from "react";
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
} from "./ShopingListStyled";

const CartModal = ({ closeModal }) => {
  const cartItems = useSelector(selectCart);
  const optUser = useSelector(optUserSelector);
  const isLoggedIn = useSelector(loggedInSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [itemQuantities, setItemQuantities] = useState(
    cartItems.reduce((quantities, item) => {
      quantities[item._id] = item.quantity || 1; // Використовуємо кількість із cartItems або 1, якщо вона не вказана
      return quantities;
    }, {})
  );

  useEffect(() => {
    // Якщо користувач увійшов в систему, вивантажити його корзину з бекенду
    if (isLoggedIn) {
      fetchUserCart();
    }
  }, [isLoggedIn, dispatch]);

  const fetchUserCart = async () => {
    try {
      const response = await axios.get(`/basket`);
      const data = response.data;

      dispatch(setCart(data));

      setItemQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };

        // Встановлюємо кількість для кожного товару з отриманої відповіді
        data.forEach((item) => {
          updatedQuantities[item._id] = item.quantity || 1;
        });

        return updatedQuantities;
      });
    } catch (error) {
      console.error("Помилка отримання корзини користувача:", error);
    }
  };

  // Створюємо об'єкт для зберігання кількості кожного товару

  const increaseQuantity = (item) => {
    const { _id, amount } = item;

    setItemQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[_id] + 1;

      if (amount && newQuantity > amount) {
        toast.error("Обмежена кількість товару на складі!");
        return prevQuantities;
      }

      if (isLoggedIn) {
        updateCartItem(_id, newQuantity);
      } else {
        dispatch(addToCart({ _id, quantity: newQuantity }));
      }

      return {
        ...prevQuantities,
        [_id]: newQuantity,
      };
    });
  };

  const decreaseQuantity = (itemId) => {
    if (itemQuantities[itemId] > 1) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
      if (isLoggedIn) {
        updateCartItem(itemId, itemQuantities[itemId] - 1);
      } else {
        dispatch(
          removeQuantityCart({
            _id: itemId,
            quantity: itemQuantities[itemId] - 1,
          })
        );
      }
    } else {
      removeItem(itemId);
    }
  };

  const removeItem = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: 0, // Видалити кількість товару
    }));
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

  // Розрахунок загальної вартості товарів в корзині
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
    try {
      navigate("/order");
      closeModal();
    } catch (error) {
      console.error("Помилка розміщення замовлення:", error);
    }
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
              {cartItems.map((item) => (
                <Thumb key={item._id}>
                  <ImageBlock>
                    <img src={item.images} alt="itemImage" />
                  </ImageBlock>
                  <DescriptionBlock>
                    <ItemNameLink
                      to={`/product/${item.id}`}
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
              ))}
            </GoodsBlock>
          </table>
          <Amount>Всього: {totalCost} грн</Amount>
        </TableWrap>
      ) : (
        <TextNoProduckts>Ви ще нічого не вибрали!</TextNoProduckts>
      )}

      <ButtonThumb>
        <ButtonContainer>
          <ReturnBTN onClick={closeModal}>
            <ReturnIcon />
            Повернутись до покупок
          </ReturnBTN>
        </ButtonContainer>
        <ButtonContainer>
          <Button
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

import React, { useState } from "react";

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
} from "./ShopingListStyled";
import Button from "../../../shared/components/Button/Button";

import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeQuantityCart,
  removeCart,
} from "../../../redux/cart/slice";
import { selectCart } from "../../../redux/cart/selectors";
import { useNavigate } from "react-router-dom";

const CartModal = ({ closeModal }) => {
  const cartItems = useSelector(selectCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [itemQuantities, setItemQuantities] = useState(
    cartItems.reduce((quantities, item) => {
      quantities[item.id] = item.quantity; // Використовуємо кількість із cartItems або 1, якщо вона не вказана
      return quantities;
    }, {})
  );
  // Створюємо об'єкт для зберігання кількості кожного товару

  const increaseQuantity = (itemId) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] + 1,
      }));
      dispatch(addToCart({ id: itemId, quantity: itemQuantities[itemId] + 1 }));
    }
  };

  const decreaseQuantity = (itemId) => {
    if (itemQuantities[itemId] > 1) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
      dispatch(
        removeQuantityCart({ id: itemId, quantity: itemQuantities[itemId] - 1 })
      );
    }
    if (itemQuantities[itemId] === 1) {
      removeItem(itemId);
    }
  };

  const removeItem = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: 0, // Видалити кількість товару
    }));
    dispatch(removeCart({ itemId }));
  };

  // Розрахунок загальної вартості товарів в корзині
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * itemQuantities[item.id],
    0
  );

  const placeOrder = () => {
    navigate("/order");
    closeModal();
  };

  return (
    <ModalShopingList>
      <div>
        <ModalTitle>Корзина</ModalTitle>
        {/* <CloseButton onClick={closeModal}/> */}
        {cartItems.length !== 0 ? (
          <>
            <table
              style={{ borderCollapse: "collapse", borderSpacing: "20px" }}
            >
              <thead>
                <tr>
                  <HeaderContent></HeaderContent>
                  <HeaderContent></HeaderContent>
                  <HeaderContent>Товар</HeaderContent>
                  <HeaderContent>Кількість</HeaderContent>
                  <HeaderContent>Вартість</HeaderContent>
                </tr>
              </thead>
              <GoodsBlock>
                {cartItems.map((item) => (
                  <Thumb key={item.id}>
                    <ImageBlock>
                      <img src={item.images} alt="itemImage" />
                    </ImageBlock>
                    <DescriptionBlock>
                      <ItemNameLink>{item.name}</ItemNameLink>
                    </DescriptionBlock>
                    <AmountBlock>
                      <CounterBlock>
                        <DecIncBtn
                          onClick={() => item && decreaseQuantity(item.id)}
                        >
                          -
                        </DecIncBtn>
                        {itemQuantities[item.id]}
                        <DecIncBtn onClick={() => increaseQuantity(item.id)}>
                          +
                        </DecIncBtn>
                      </CounterBlock>
                    </AmountBlock>
                    <PriceBlock>
                      {item.price * itemQuantities[item.id]} грн
                    </PriceBlock>
                    <DeleteBtn onClick={() => removeItem(item.id)}>
                      <DeleteIcon />
                    </DeleteBtn>
                  </Thumb>
                ))}
              </GoodsBlock>
            </table>
            <Amount>Всього: {totalCost} грн</Amount>
          </>
        ) : (
          <TextNoProduckts>Ви ще нічого не вибрали!</TextNoProduckts>
        )}

        <ButtonContainer>
          <ReturnBTN onClick={closeModal}>
            <FaArrowLeft
              style={{
                width: "23px",
                height: "14px",
              }}
            />
            Повернутись до покупок
          </ReturnBTN>
        </ButtonContainer>
        <ButtonContainer style={{ marginLeft: "210px" }}>
          <Button
            onClick={placeOrder}
            text="Оформити замовлення"
            disabled={cartItems.length === 0}
          />
        </ButtonContainer>
      </div>
    </ModalShopingList>
  );
};

export default CartModal;

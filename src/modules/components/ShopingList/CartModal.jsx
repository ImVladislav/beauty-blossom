import React, { useState } from 'react';
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
} from './ShopingListStyled';
import SubmitBtn from '../ReusebleCompoments/SubmitBtn/SubmitBtn';
import { FaArrowLeft } from "react-icons/fa";


const CartModal = ({ cartItems, closeModal }) => {
  const [cart, setCart] = useState(cartItems);

  // Створюємо об'єкт для зберігання кількості кожного товару
  const [itemQuantities, setItemQuantities] = useState(
    cartItems.reduce((quantities, item) => {
      quantities[item.id] = 1; // Початкова кількість для кожного товару
      return quantities;
    }, {})
  );

  const increaseQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    if (itemQuantities[itemId] > 1) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Розрахунок загальної вартості товарів в корзині
  const totalCost = cart.reduce((total, item) => total + item.price * itemQuantities[item.id], 0);

  // Функція для оформлення замовлення
  const placeOrder = () => {
    // Створюємо масив товарів у корзині з відповідними кількостями
    const orderedItems = cart.map((item) => ({
      ...item,
      quantity: itemQuantities[item.id],
    }));

    // Виводимо масив товарів у консоль
    console.log('Замовлення:', orderedItems);

    // Додайте додатковий код тут, наприклад, відображення повідомлення про успішне замовлення
    alert('Замовлення оформлено!');
  };

    return (
        <ModalShopingList>
            <ModalTitle>Корзина</ModalTitle>
            {/* <CloseButton onClick={closeModal}/> */}
            <table style={{ borderCollapse: 'collapse', borderSpacing: '20px' }}>
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
                    {cart.map((item) => (
                        <Thumb key={item.id}>
                            <ImageBlock>
                                <img src={item.image} alt="itemImage" />
                            </ImageBlock>
                            <DescriptionBlock>
                                <ItemNameLink>{item.name}</ItemNameLink>
                            </DescriptionBlock>
                            <AmountBlock>
                                <CounterBlock>
                                    <DecIncBtn onClick={() => decreaseQuantity(item.id)}>-</DecIncBtn>
                                    {itemQuantities[item.id]}
                                    <DecIncBtn onClick={() => increaseQuantity(item.id)}>+</DecIncBtn>
                                </CounterBlock>
                            </AmountBlock>
                            <PriceBlock>{item.price * itemQuantities[item.id]} грн</PriceBlock>
                            <DeleteBtn onClick={() => removeItem(item.id)}>
                                <DeleteIcon />
                            </DeleteBtn>
                        </Thumb>
                    ))}
                </GoodsBlock>
            </table>
            <Amount>Итого {totalCost} грн</Amount>
            <ButtonContainer >
                <ReturnBTN onClick={closeModal} >
                    <FaArrowLeft style={{
                        width: '23px',height: '14px'}}/>Повернутись до покупок</ReturnBTN>
            </ButtonContainer >
            
                <ButtonContainer style={{ marginLeft: "210px"}}>
            <SubmitBtn
                onClick={placeOrder}
                text="Оформити замовлення"
                style={{ width: "270px"}}
                />
            </ButtonContainer>
        </ModalShopingList>
    );
};

export default CartModal;
import React, { useState } from 'react';
import { BasketIcon, ModalBackground, OpenModal, Thumb } from "./ShopingListStyled"
import CartModal from './CartModal';



const ShoppingCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = [
    {
      id: 1,
      name: 'крем кимерсен',
      price: 459,
      
      image: "https://h-profit,com/bimages/get/0-12447-1861181-0,jpg"
    },
        {
      id: 2,
      name: 'Духи киим чен ир',
      price: 549,
          
      image: "https://h-profit,com/bimages/get/0-12447-1861181-0,jpg"
    },
    // Додайте інші товари в корзину
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      
      <OpenModal onClick={openModal}><BasketIcon/></OpenModal>
      {isModalOpen && <ModalBackground>
        <CartModal cartItems={cartItems} closeModal={closeModal} />
        </ModalBackground>}
    </div>
  );
};

export default ShoppingCart;
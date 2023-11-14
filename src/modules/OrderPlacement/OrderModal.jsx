
import React, { useEffect } from 'react';
import { Backdrop, LinkButton, LinkThumb, ModalStyle, ModalText, Titles } from './OrderPlacementStyled';


export const OrderModalWindow = ({ isOpen, orderNumber }) => {
useEffect(() => {
  if (isOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return () => {
    document.body.classList.remove('modal-open');
  };
}, [isOpen]);
  return (

    <>
      <Backdrop isOpen={isOpen} />
      <ModalStyle isOpen={isOpen}>
        <Titles>Дякуємо за замовлення!</Titles>


        <ModalText>
          <ModalText>
            {`Номер вашого замовлення № ${orderNumber}.`}
          </ModalText>
        </ModalText>

        <ModalText>
          Очікуйте на зворотній зв’язок з менеджером.
        </ModalText>


        <LinkThumb>
          <LinkButton to="/">Головна сторінка</LinkButton>
          <LinkButton to="/cabinet">Особистий кабінет</LinkButton>
        </LinkThumb>
      </ModalStyle>
    </>

  );
};
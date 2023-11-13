
import React from 'react';
import { Backdrop, LinkButton, LinkThumb, ModalStyle, ModalText, Titles } from './OrderPlacementStyled';


export const OrderModalWindow = ({ isOpen, onRequestClose, orderNumber }) => {
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
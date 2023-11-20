import React, { useEffect } from "react";
import {
  Backdrop,
  LinkButton,
  LinkThumb,
  ModalStyle,
  ModalText,
  Titles,
} from "./OrderPlacementStyled";
import { useSelector } from "react-redux";
import { loggedInSelector } from "../../redux/auth/selectors";

export const OrderModalWindow = ({ isOpen, orderNumber }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const isLogin = useSelector(loggedInSelector)

  return (
    <>
      <Backdrop $isOpen={isOpen} />
      <ModalStyle $isOpen={isOpen}>
        <Titles>Дякуємо за замовлення!</Titles>

        <div>
          <ModalText>{`Номер вашого замовлення № ${orderNumber}.`}</ModalText>
        </div>

        <ModalText>Очікуйте на зворотній зв’язок з менеджером.</ModalText>

        <LinkThumb>
          <LinkButton to="/">Головна сторінка</LinkButton>
          {isLogin &&
            <LinkButton to="/cabinet">Особистий кабінет</LinkButton>
          }
        </LinkThumb>
      </ModalStyle>
    </>
  );
};

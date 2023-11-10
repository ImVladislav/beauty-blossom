import React from "react";
import Modal from "react-modal";
import { LinkButton, LinkThumb, ModalText, Titles } from "./OrderPlacementStyled";

const ModuleStyle = {
    overlay: {
        position: "fixed",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 999,
        
    },

    content: {
        top: "100px",
        maxWidth: "1020px",
        maxHeight: "269px",
        margin: "auto",
        padding: "30px",
        border: "4px solid #504056",
        borderRadius: "146px",
        position: "relative",
        background: "#FFF6E9",

        
    boxShadow: "0 5px 35px rgba(0, 0, 0, 0.75)",
  },
};

export const OrderModalWindow = ({ isOpen, onRequestClose }) => {
  const appElement = document.getElementById("root");
  Modal.setAppElement(appElement);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Модальне вікно"
      style={ModuleStyle}
    >

      <Titles>Дякуємо за замовлення!</Titles>

      <ModalText>
       Номер вашого замовлення №.... .очікуйте на зворотній зв’язок з менеджером.
      </ModalText>

      <LinkThumb>
        <LinkButton href="/beauty-blossom">Головна сторінка</LinkButton>
        <LinkButton href="/beauty-blossom/cabinet/userData">Особистий кабінет</LinkButton>
      </LinkThumb>

    </Modal>
  );
};

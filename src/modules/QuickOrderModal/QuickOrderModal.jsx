import React from "react";

import { ModalBackdrop, ModalContent } from "./QuickOrderModal.styled";
import Button from "../../shared/components/Button/Button";

const QuickOrderModal = ({ onClose }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent>
        <h2>Швидке замовлення</h2>
        <p>Введіть ім'я, електронну пошту та номер телефону:</p>
        <input type="text" placeholder="ПІП" />
        <input type="email" placeholder="Електронна пошта" />
        <input type="tel" placeholder="Номер телефону" />
        <Button onClick={onClose} text="Замовити" type="submit">
          Замовити
        </Button>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default QuickOrderModal;

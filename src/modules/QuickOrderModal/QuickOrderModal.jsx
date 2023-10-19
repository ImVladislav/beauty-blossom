import React, { useState } from "react";

import {
  Input,
  ModalBackdrop,
  ModalContent,
  Title,
  Text,
} from "./QuickOrderModal.styled";
import Button from "../../shared/components/Button/Button";

const QuickOrderModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOrder = () => {
    onClose();
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>Швидке замовлення</Title>
        <Text>Введіть ім'я, електронну пошту та номер телефону:</Text>
        <Input
          type="text"
          placeholder="ПІП"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          type="email"
          placeholder="Електронна пошта"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="tel"
          placeholder="Номер телефону"
          value={phone}
          onChange={handlePhoneChange}
        />
        <Button onClick={handleOrder} text="Замовити" type="submit">
          Замовити
        </Button>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default QuickOrderModal;

import React, { useState } from "react";
import Modal from "react-modal";
import { FormInput, ModalClose, ModalForm, ModalSend, ModalText, ModalTitle } from "./ModalWindowStlyed";
import { CgClose } from "react-icons/cg";
import { CloseButton } from "../../ReusebleCompoments/ModalCloseBTN/CloseButton";

const ModuleStyle = {
  overlay: {
    position: "fixed",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  },

  content: {
    top: "100px",
    width: "500px",
    height: "329px",
    margin: "auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    position: "relative",
    background: "#fff",
    boxShadow: "0 5px 35px rgba(0, 0, 0, 0.75)",
  },
};

export const ModalWindow = ({ isOpen, onRequestClose }) => {
  const appElement = document.getElementById("root");
  Modal.setAppElement(appElement);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = {
    name: name,
    phone: phone
  };

  console.log("Форма відправлена з наступними даними:", formData);

  setName("");
  setPhone("");

  alert("Запит відправлено. Очікуйте дзвінка.");
};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Модальне вікно"
      style={ModuleStyle}
    >

      <CloseButton close={onRequestClose } />
      <ModalTitle>Перетелефонувати вам?</ModalTitle>
      <ModalText>Вкажіть номер телефону та ім'я. Ми зв'яжемося з вами найближчим часом.</ModalText>
      <ModalForm onSubmit={handleSubmit}>

        <label>
          Ім'я:
          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Телефон:
          <FormInput
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <ModalSend type="submit">Відправити</ModalSend>
      </ModalForm>
    </Modal>
  );
};

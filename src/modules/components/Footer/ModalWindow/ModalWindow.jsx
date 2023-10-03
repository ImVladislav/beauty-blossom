import React, { useState } from "react";
import Modal from "react-modal";
import { ModalStyle } from "./ModalWindowStlyed";

export const ModalWindow = ({ isOpen, onRequestClose }) => {
const appElement = document.getElementById('root');
Modal.setAppElement(appElement);
    
    const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ім'я:", name);
    console.log("Телефон:", phone);
    // Тут ви можете робити що завгодно з іменем і телефоном, наприклад, відправити їх на сервер або виконати інші дії
  };
    
  return (
    <ModalStyle
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Модальне вікно"
      style={{backgroundColor:"red" }}
      >
          <button onClick={onRequestClose}>Закрити (X)</button>
      <h2>Перезвонить вам?</h2>
      <p>Укажите ваш номер телефона и имя. Мы свяжемся с вами в ближайшее время.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Телефон:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </ModalStyle>
  );
};

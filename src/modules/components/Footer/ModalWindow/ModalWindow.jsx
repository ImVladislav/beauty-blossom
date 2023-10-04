import React, { useState } from "react";
import Modal from "react-modal";

const ModuleStyle = {
  overlay: {
    position: "fixed",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  },

  content: {
    width: "400px",
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
    console.log("Ім'я:", name);
    console.log("Телефон:", phone);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Модальне вікно"
      style={ModuleStyle}
    >
      <button onClick={onRequestClose}>Закрити (X)</button>
      <h2>Перетелефонувати вам?</h2>
      <p>
        Вкажіть номер телефону та ім'я. Ми зв'яжемося з вами найближчим часом.
      </p>
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
        <button type="submit">Відправити</button>
      </form>
    </Modal>
  );
};

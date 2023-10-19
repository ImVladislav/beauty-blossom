import React, { useState } from "react";
import { Link, LogInIcon, DropDown, ListItem, Modal, ModalBackdrop, LoginPasswordToggle } from "./login.styled";
import { CloseButton } from "../../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";
import LoginForm from "./LoginForm";

const LogIn = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleModal = () => {
    setShowModal(true);
  };
  
  return (
    <>
      <Link onClick={toggleModal}>
        <LogInIcon />
      </Link>

{showModal && (
  <ModalBackdrop>
    <Modal>
      <CloseButton close={() => setShowModal(false)} />
            <Link onClick={() => setLoginOrRegister(true)}>
              <LoginPasswordToggle>Вхід</LoginPasswordToggle>
            </Link>/<Link onClick={() => setLoginOrRegister(false)}>
              
                <LoginPasswordToggle>Реєстрація</LoginPasswordToggle>
              </Link>
      {loginOrRegister ? (
        <div>
          <LoginForm/>
        </div>
      ) : (
        <div>
          <form>
            <input type="text" placeholder="Ім'я" />
            <input type="text" placeholder="Фамілія" />
            <input type="tel" placeholder="Номер телефону" />
            <input type="email" placeholder="Емейл" />
            <button>Зареєструватись</button>
          </form>
        </div>
      )}
    </Modal>
  </ModalBackdrop>
)}




    </>
  );
};

export default LogIn;
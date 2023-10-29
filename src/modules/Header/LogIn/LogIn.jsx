import React, { useState } from "react";
import { Link, LogInIcon, DropDown, ListItem, Modal, ModalBackdrop, LoginPasswordToggle, LogOut } from "./login.styled";
import { CloseButton } from "../../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { loggedInSelector, userSelectorfirstName, isAdminSelector } from "../../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/operation";

const LogIn = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const userName = useSelector(userSelectorfirstName);
  const admin = useSelector(isAdminSelector);
  const isLogin = useSelector(loggedInSelector);

  const dispatch = useDispatch();

  const handleModalEnter = () => {
    if (!isLogin) {
      setShowModal(true);
    }
  };

  const handleDropdownEnter = () => {
    if (isLogin) {
        setShowDropdown(true);
    }
  };

  const handleDropdownLeave = () => {
      setShowDropdown(false);
  };
  
  const logoutDispatch = () => {
    dispatch(logout())
  };


  return (
    <>
      <Link
        onClick={!isLogin ? handleModalEnter : null}
        onMouseEnter={isLogin ? handleDropdownEnter : null}
        
      >
        <LogInIcon />
      </Link>
      {showDropdown && (
        <DropDown
        onMouseLeave={handleDropdownLeave}>
          <ul>
            {admin &&
            <ListItem>
              <a href="/beauty-blossom/cabinet/ordersbyclient/">Замовлення(Адмін права)</a>
            </ListItem>
            }
            <ListItem>
              <a href="/beauty-blossom/cabinet/userData">Особисті дані</a>
            </ListItem>
            <ListItem>
              <a href="/beauty-blossom/cabinet/history">Замовлення</a>
            </ListItem>
            <ListItem>
              <a href="/beauty-blossom/cabinet/favorite">Список бажань</a>
            </ListItem>
            <ListItem>
                   <LogOut onClick={logoutDispatch}>Вихід</LogOut>
            </ListItem>
          </ul>

  

        </DropDown>
      )}
      <p>{userName} </p>

      {showModal && (
        <ModalBackdrop>
          <Modal>
            <CloseButton close={() => setShowModal(false)} />
            <Link onClick={() => setLoginOrRegister(true)}>
              <LoginPasswordToggle>Вхід</LoginPasswordToggle>
            </Link>
            /
            <Link onClick={() => setLoginOrRegister(false)}>
              <LoginPasswordToggle>Реєстрація</LoginPasswordToggle>
            </Link>
            {loginOrRegister ? <LoginForm /> : <RegisterForm />}
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
};

export default LogIn;
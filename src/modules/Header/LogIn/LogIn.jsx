import React, { useState } from "react";
import {
  LinkBtn,
  LogInIcon,
  DropDown,
  ListItem,
  Modal,
  ModalBackdrop,
  LogOut,
  Underline,
  WrapLink,
} from "./login.styled";
import { CloseButton } from "../../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {
  loggedInSelector,
  isAdminSelector,

} from "../../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/operation";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(false);

  // const userName = useSelector(userSelectorfirstName);
  const admin = useSelector(isAdminSelector);
  const isLogin = useSelector(loggedInSelector);
  const dispatch = useDispatch();

  const onRegisterSuccess = () => {
    setLoginOrRegister(true); // Зміна на true при успішній реєстрації
    toast.info("Ви успішно зареєструвалися, авторизуйтеся");
  };

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
    dispatch(logout());
  };

  return (
    <>
      <LinkBtn
        onClick={!isLogin ? handleModalEnter : null}
        onMouseEnter={isLogin ? handleDropdownEnter : null}
      >
        <LogInIcon />
      </LinkBtn>
      {showDropdown && (
        <DropDown onMouseLeave={handleDropdownLeave}>
          <ul>
            {admin && (
              <ListItem>
                <Link to="cabinet/ordersbyclient/">
                  Замовлення(Адмін права)
                </Link>
              </ListItem>
            )}
            <ListItem>
              <Link to="cabinet">ОСОБИСТИЙ КАБІНЕТ</Link>
            </ListItem>
            <ListItem>
              <Link to="cabinet/history">ІСТОРІЯ ЗАМОВЛЕНЬ</Link>
            </ListItem>
            <ListItem>
              <LogOut onClick={logoutDispatch}>ВИХІД</LogOut>
            </ListItem>
          </ul>
        </DropDown>
      )}
      {/* {isLogin && <NameUser>{userName} </NameUser>} */}
      {/* <p>{userName} </p> */}

      {showModal && (
        <ModalBackdrop>
          <Modal>
            <CloseButton close={() => setShowModal(false)} />
            <WrapLink>
              <LinkBtn
                className={(loginOrRegister && "activ") || (isLogin && "none")}
                onClick={() => setLoginOrRegister(true)}
              >
                Вхід
                {loginOrRegister && <Underline />}
              </LinkBtn>

              <LinkBtn
                className={(!loginOrRegister && "activ") || (isLogin && "none")}
                onClick={() => setLoginOrRegister(false)}
              >
                Реєстрація
                {!loginOrRegister && <Underline />}
              </LinkBtn>
            </WrapLink>

            {loginOrRegister ? (
              <LoginForm />
            ) : (
              <RegisterForm onRegisterSuccess={onRegisterSuccess} />
            )}
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
};

export default LogIn;

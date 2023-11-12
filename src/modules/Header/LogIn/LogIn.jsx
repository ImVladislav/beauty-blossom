import React, { useState } from "react";
import {
  Link,
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
  _idSelector,

} from "../../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/operation";
import { toast } from "react-toastify";

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
  console.log(loginOrRegister);
  return (
    <>
      <Link
        onClick={!isLogin ? handleModalEnter : null}
        onMouseEnter={isLogin ? handleDropdownEnter : null}
      >
        <LogInIcon />
      </Link>
      {showDropdown && (
        <DropDown onMouseLeave={handleDropdownLeave}>
          <ul>
            {admin && (
              <ListItem>
                <a href="/beauty-blossom/ordersbyclient/">
                  Замовлення(Адмін права)
                </a>
              </ListItem>
            )}
            <ListItem>
              <a href="/beauty-blossom/cabinet/userData">ОСОБИСТИЙ КАБІНЕТ</a>
            </ListItem>
            <ListItem>
              <a href="/beauty-blossom/cabinet/history">ІСТОРІЯ ЗАМОВЛЕНЬ</a>
            </ListItem>
            {/* <ListItem>
              <a href="/beauty-blossom/cabinet/favorite">Список бажань</a>
            </ListItem> */}
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
              <Link
                className={(loginOrRegister && "activ") || (isLogin && "none")}
                onClick={() => setLoginOrRegister(true)}
              >
                Вхід
                {loginOrRegister && <Underline />}
              </Link>

              <Link
                className={(!loginOrRegister && "activ") || (isLogin && "none")}
                onClick={() => setLoginOrRegister(false)}
              >
                Реєстрація
                {!loginOrRegister && <Underline />}
              </Link>
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

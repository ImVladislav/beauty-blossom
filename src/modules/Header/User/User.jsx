import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Login from "../../Login/Login";
import Register from "../../Register/Register";
import { CloseButton } from "../../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";
import { toast } from "react-toastify";

import {
  loggedInSelector,
  isAdminSelector,
} from "../../../redux/auth/selectors";
import { logout } from "../../../redux/auth/operation";

import {
  LinkBtn,
  WrapLink,
  LogInIcon,
  DropDown,
  ListItem,
  LogOut,
  ModalBackdrop,
  Modal,
  Underline,
} from "./user.styled";
import { deleteAll } from "../../../redux/cart/slice";

const User = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(false);

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
    dispatch(deleteAll());
  };

  const handelDropClose = (e) => {
    if (e.target.tagName === "SECTION") {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

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
                <Link style={{ padding: "4px 0" }} to="/ordersbyclient">
                  замовлення(адмін права)
                </Link>
              </ListItem>
            )}
            <ListItem>
              <Link style={{ padding: "4px 0" }} to="/cabinet">
                особистий кабінет
              </Link>
            </ListItem>
            <ListItem>
              <Link style={{ padding: "4px 0" }} to="/cabinet/history">
                історія замовлень
              </Link>
            </ListItem>
            <ListItem>
              <LogOut onClick={logoutDispatch}>вихід</LogOut>
            </ListItem>
          </ul>
        </DropDown>
      )}

      {showModal && (
        <ModalBackdrop onClick={handelDropClose}>
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
              <Login setShowModal={setShowModal} />
            ) : (
              <Register onRegisterSuccess={onRegisterSuccess} />
            )}
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
};

export default User;

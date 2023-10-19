import React, { useState } from "react";
import { Link, LogInIcon, DropDown, ListItem, Modal, ModalBackdrop, LoginPasswordToggle } from "./login.styled";
import { CloseButton } from "../../../shared/components/ReusebleCompoments/ModalCloseBTN/CloseButton";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { loggedInSelector, userSelector } from "../../../redux/auth/selectors";
import { useSelector } from "react-redux";

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

  const items = useSelector(userSelector);
  console.log(items);
  const isLogin = useSelector(loggedInSelector);
  console.log(isLogin);

  const handleLinkHover = () => {
    if (isLogin) {
      toggleDropdown();
    }
  };

  const handleDropdownEnter = () => {
    if (!isLogin) {
      setShowModal(true);
    }
  };

  const handleDropdownLeave = () => {
    if (!isLogin) {
      toggleDropdown();
    }
  };

  

  return (
    <>
<Link
  onClick={isLogin ? toggleModal : null}
  onMouseEnter={isLogin ? null : handleLinkHover}
  onMouseLeave={isLogin ? null : handleDropdownLeave}
>
  <LogInIcon />
</Link>
          <DropDown >
          <ul>
            <ListItem>
              <a href="/beauty-blossom/cabinet/">Особисті дані</a>
            </ListItem>
            <ListItem>
              <a href="/beauty-blossom/cabinet/history">Замовлення</a>
            </ListItem>
            <ListItem>
              <a href="/beauty-blossom/cabinet/favorite">Список бажань</a>
            </ListItem>
            <ListItem>
              <a href="/">Вихід</a>
            </ListItem>
          </ul>
        </DropDown>
            {/* <p>{items}</p> */}


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

          <LoginForm/>

      ) : (

          <RegisterForm/>

      )}
    </Modal>
  </ModalBackdrop>
)}




    </>
  );
};

export default LogIn;
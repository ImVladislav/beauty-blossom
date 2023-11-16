import React, { useState } from "react";

import Contacts from "../Contacts/Contacts";
import BurgerMenuItem from "./BurgerMenuItem/BurgerMenuItem";

import {
  MobileMenuContainer,
  MobileMenuItem,
  InfoWrap,
  InfoLink,
  InfoStylesLink,
  InfoButton,
} from "./BurgerMenu.styled";

const BurgerMenu = ({ items, handleClick, isMenuOpen }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [contacts, setContacts] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleClickP = () => {
    setContacts(!contacts);
  };
  return (
    <MobileMenuContainer
      customCrossIcon={false}
      isOpen={isMenuOpen}
      onStateChange={handleClick}
      left
      width={270}
    >
      {items.map((item, index) => (
        <MobileMenuItem key={index}>
          <BurgerMenuItem
            key={index}
            item={item}
            level={1}
            closeMenu={handleClick}
          />
        </MobileMenuItem>
      ))}
      <InfoWrap
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "3px",
        }}
      >
        <InfoStylesLink to="/cabinet/userData">
          Особистий кабінет
        </InfoStylesLink>
        <InfoStylesLink to="/cabinet/history">Історія замовлень</InfoStylesLink>
        <InfoLink href="wholesaleProgram/#return">Повернення та обмін</InfoLink>
        <InfoLink href="wholesaleProgram/#payment">Оплата і доставка</InfoLink>
        <InfoLink href="wholesaleProgram/#about">Про нас</InfoLink>
        <InfoLink href="feedback">Залишити відгук</InfoLink>
        <InfoButton onClick={handleClickP}>Контакти</InfoButton>
        {contacts && (
          <>
            <Contacts
              burger
              title="+380500529100"
              to="tel:+380500529100"
              icon="phone"
            />
            <Contacts
              burger
              title="beautyblossom.opt@gmail.com"
              to="mailto:beautyblossom.opt@gmail.com"
              icon="mail"
            />
            <Contacts
              burger
              title="beauty_blossom_opt"
              to="https://www.instagram.com/"
              icon="instagram"
            />
            <Contacts
              burger
              title="beauty_blossom"
              to="https://web.telegram.org/"
              icon="telegram"
            />
          </>
        )}
      </InfoWrap>
    </MobileMenuContainer>
  );
};

export default BurgerMenu;

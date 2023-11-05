import React, { useState } from "react";
import {
  MobileMenuContainer,
  MobileMenuItem,
  InfoWrap,
  InfoLink,
  InfoStylesLink,
} from "./BurgerMenu.styled";
import BurgerMenuItem from "./BurgerMenuItem/BurgerMenuItem"; // Імпортуйте ваш компонент MenuItem
import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";

const BurgerMenu = ({ items, handleClick, isMenuOpen }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <MobileMenuContainer
      isOpen={isMenuOpen}
      onStateChange={handleClick}
      left
      width={270}
      className={isMenuOpen && "no-scroll"}
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
      <InfoWrap style={{ display: "flex", flexDirection: "column" }}>
        <InfoStylesLink to="/cabinet/userData">
          Особистий кабінет
        </InfoStylesLink>
        <InfoStylesLink to="/cabinet/history">Історія замовлень</InfoStylesLink>
        <InfoLink href="/beauty-blossom/wholesaleProgram/#return">
          Повернення та обмін
        </InfoLink>
        <InfoLink href="/beauty-blossom/wholesaleProgram/#payment">
          Оплата і доставка
        </InfoLink>
        <InfoLink href="/beauty-blossom/wholesaleProgram/#about">
          Про нас
        </InfoLink>
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
      </InfoWrap>
    </MobileMenuContainer>
  );
};

export default BurgerMenu;

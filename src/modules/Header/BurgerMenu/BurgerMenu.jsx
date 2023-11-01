import React, { useState } from "react";
import { MobileMenuContainer, MobileMenuItem } from "./BurgerMenu.styled";
import BurgerMenuItem from "./BurgerMenuItem/BurgerMenuItem"; // Імпортуйте ваш компонент MenuItem

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
    </MobileMenuContainer>
  );
};

export default BurgerMenu;

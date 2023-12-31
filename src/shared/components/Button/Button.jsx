import React from "react";
import { ButtonStyle } from "./Button.styled";

const Button = ({ type, text, onClick, disabled, goods, userMenu, opt }) => {
  return (
    <ButtonStyle
      className={
        (goods && "goods") || (userMenu && "user-menu") || (opt && "opt")
      }
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;

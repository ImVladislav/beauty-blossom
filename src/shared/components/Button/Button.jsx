import React from "react";
import { ButtonStyle } from "./Button.styled";

const Button = ({ type, text, onClick, disabled, goods, userMenu }) => {
  return (
    <ButtonStyle
      className={(goods && "goods") || (userMenu && "user-menu")}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;

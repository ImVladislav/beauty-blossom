import React from "react";
import { ButtonStyle } from "./Button.styled";

const Button = ({ type, text, onClick, disabled, goods }) => {
  return (
    <ButtonStyle
      className={goods && "goods"}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;

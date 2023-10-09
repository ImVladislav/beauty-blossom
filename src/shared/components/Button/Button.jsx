import React from "react";
import { ButtonStyle } from "./Button.styled";

const Button = ({ type, text, onClick, disabled }) => {
  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyle>
  );
};

export default Button;

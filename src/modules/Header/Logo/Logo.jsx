import React from "react";

import { LinkLogo, TextLogo } from "./logo.styled";

const Logo = () => {
  return (
    <>
      <LinkLogo to="/">
        <TextLogo>
          Beauty <br /> Blossom
        </TextLogo>
      </LinkLogo>
    </>
  );
};

export default Logo;

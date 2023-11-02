import React from "react";

import IconLogo from "../../../images/BeautyBlossom.png";

import { LinkLogo, LogoImg, TextLogo } from "./logo.styled";

const Logo = () => {
  return (
    <>
      <LinkLogo to="/">
        <TextLogo>
          Beauty <br /> Blossom
        </TextLogo>

        {/* <LogoImg src={IconLogo} alt="React Logo" /> */}
      </LinkLogo>
    </>
  );
};

export default Logo;

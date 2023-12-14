import React from "react";

import { LinkLogo, TextLogo } from "./logo.styled";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <LinkLogo to="/" onClick={scrollToTop}>
        <TextLogo>
          Beauty <br /> Blossom
        </TextLogo>
      </LinkLogo>
    </>
  );
};

export default Logo;

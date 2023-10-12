import React from "react";

import IconLogo from "../../Images/BeautyBlossom.svg";

import { Link, LogoImg } from "./logo.styled";

const Logo = () => {
  return (
    <>
      <Link href="/beauty-blossom">
        <LogoImg src={IconLogo} alt="React Logo" />
      </Link>
    </>
  );
};

export default Logo;

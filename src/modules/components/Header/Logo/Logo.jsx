import React from "react";

import IconLogo from "../../Images/BeautyBlossom.svg";

import { Link } from "./logo.styled";

const Logo = () => {
  return (
    <>
      <Link href="/beauty-blossom">
        <img src={IconLogo} alt="React Logo" />
      </Link>
    </>
  );
};

export default Logo;

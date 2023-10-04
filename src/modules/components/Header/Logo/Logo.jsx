import React from "react";
import { Link } from "./logo.styled";
import IconLogo from "../../Images/BeautyBlossom.svg";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <img src={IconLogo} alt="React Logo" />
      </Link>
    </>
  );
};

export default Logo;

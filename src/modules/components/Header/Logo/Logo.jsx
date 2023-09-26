import React from "react";
import { Link, LogoIcon } from "./logo.styled";

const Logo = () => {
  return (
    <>
      <Link href="#">
        <LogoIcon />
        <p>Logo</p>
      </Link>
    </>
  );
};

export default Logo;

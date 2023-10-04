import React from "react";
import { Link, LogInElips, LogInIcon } from "./login.styled";

const LogIn = () => {
  return (
    <>
      <Link href="#">
        <LogInElips>
          <LogInIcon />
        </LogInElips>
      </Link>
    </>
  );
};

export default LogIn;

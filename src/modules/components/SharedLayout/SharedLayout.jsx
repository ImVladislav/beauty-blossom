// import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { ProductOfTheWeek } from "../ProductOfTheWeek/ProductOfTheWeek";

export const SharedLayout = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClickToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <ProductOfTheWeek />
      <Header />
      {/* <Header isOpen={isOpen} toggle={handleClickToggle} /> */}

      <Outlet />
    </>
  );
};

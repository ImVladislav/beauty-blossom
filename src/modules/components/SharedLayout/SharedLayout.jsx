import { useState } from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ProductOfTheWeek } from '../ProductOfTheWeek/ProductOfTheWeek';

export const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <>
    <ProductOfTheWeek/>
          <Header />
      {/* <Header isOpen={isOpen} toggle={handleClickToggle} /> */}

      <Outlet />
    </>
  );
};

import React, { useState } from "react";

import SearchForm from "./SearchForm/SearchForm";
import Logo from "./Logo/Logo";
import Contacts from "./Contacts/Contacts";
import User from "./User/User";

import menuItems from "./menuItems.json";

import {
  Container,
  ContainerHeader,
  MenuBottom,
  HeaderTop,
  Wrap,
  WrapContacts,
  HeaderWrap,
  HeaderLayout,
  WrapTop,
  MenuWrap,
  LoginShipingThumb,
  MenuIcon,
  Schedule,
  TopWrap,
  CenterWrap,
  IconWrap,
  ButtonMenu,
  NameUser,
  ContainerMobile,
  CartQuantityWrap,
  CartQuantitySpan,
  Line,
  SearchIcon,
} from "./header.styled";
import Menu from "./NewMenu/NewMenu";
import ShoppingCart from "./ShopingList/ShopingList";
import { useLocation } from "react-router-dom";
import { useMedia } from "../../hooks/useMedia";
import { ProductOfTheWeek } from "../ProductOfTheWeek/ProductOfTheWeek";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {
  loggedInSelector,
  userSelectorfirstName,
} from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/selectors";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const userName = useSelector(userSelectorfirstName);
  const cartItems = useSelector(selectCart);

  const isLogin = useSelector(loggedInSelector);

  const { pathname } = useLocation();
  const { isMobileScreen } = useMedia();

  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };
  const handleSearchClick = () => {
    setIsSearchOpen((state) => !state); // Перемикаємо видимість форми пошуку
  };

  return (
    <header>
      {!isMobileScreen ? (
        <>
          <ContainerHeader>
            <ProductOfTheWeek />
            <Container>
              <HeaderTop>
                <HeaderWrap>
                  <HeaderLayout>
                    {/* <WrapTop> */}
                    {/* <SearchForm /> */}
                    {/* </WrapTop> */}
                    <WrapTop>
                      <Logo />
                    </WrapTop>
                    <WrapTop>
                      <Wrap>
                        {/* <WrapContacts>
                          <Contacts
                            title="+380500529100"
                            to="tel:+380500529100"
                            icon="phone"
                          />
                          <Contacts
                            title="beautyblossom.opt@gmail.com"
                            to="mailto:beautyblossom.opt@gmail.com"
                            icon="mail"
                          />

                        </WrapContacts> */}
                        <LoginShipingThumb>
                          <SearchIcon onClick={handleSearchClick} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {isLogin && <NameUser>{userName} </NameUser>}
                            <User />
                          </div>
                          {/* кошик */}

                          <div style={{ position: "relative" }}>
                            <ShoppingCart />
                            {cartItems.length > 0 && (
                              <CartQuantityWrap>
                                <CartQuantitySpan>
                                  {cartItems.length}
                                </CartQuantitySpan>
                              </CartQuantityWrap>
                            )}
                          </div>
                        </LoginShipingThumb>
                      </Wrap>
                    </WrapTop>
                  </HeaderLayout>
                </HeaderWrap>
              </HeaderTop>
              <MenuBottom $pathname={pathname}>
                <MenuWrap>
                  <Menu items={menuItems} />
                </MenuWrap>
                {/* <Line /> */}
                <SearchForm isOpen={isSearchOpen} />
              </MenuBottom>
            </Container>
          </ContainerHeader>
        </>
      ) : (
        <ContainerMobile>
          {/* top */}
          {isMenuOpen && isMobileScreen && (
            <BurgerMenu
              handleClick={handleMenuClick}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              items={menuItems}
            />
          )}
          <TopWrap>
            <Schedule
              href="https://t.me/+Eejgotzs-ktiMTIy"
              target="_blank"
              rel="noreferrer"
              class="sc-gxRkJE bTaJYA"
            >
              Підписуйся на наш телеграм канал
            </Schedule>
            {/* <Contacts
              head
              title="+380500529100"
              to="tel:+380500529100"
              icon="phone"
            /> */}
          </TopWrap>
          {/* center */}
          <CenterWrap>
            <Logo />
          </CenterWrap>
          <CenterWrap>
            <ButtonMenu onClick={handleMenuClick}>
              <MenuIcon />
            </ButtonMenu>
            {/* <IconWrap> */}
            <SearchIcon onClick={handleSearchClick} />
            <div>
              {isLogin && <NameUser>{userName} </NameUser>}
              <User />
            </div>

            <div style={{ position: "relative" }}>
              <ShoppingCart />
              {cartItems.length > 0 && (
                <CartQuantityWrap>
                  <CartQuantitySpan>{cartItems.length}</CartQuantitySpan>
                </CartQuantityWrap>
              )}
            </div>
            {/* </IconWrap> */}
          </CenterWrap>
          {/* bottom */}
          {/* {isSearchOpen && ( // Показуємо форму пошуку на основі стану */}
          <SearchForm isOpen={isSearchOpen} />
          {/* )} */}
        </ContainerMobile>
      )}
    </header>
  );
};

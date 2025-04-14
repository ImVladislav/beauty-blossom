import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import SearchForm from "./SearchForm/SearchForm";
import Logo from "./Logo/Logo";
import Contacts from "./Contacts/Contacts";
import User from "./User/User";
import Menu from "./NewMenu/NewMenu";
import MobileMenu from "./NewMenu/MobileMenu/MobileMenu";
import ShoppingCart from "./ShopingList/ShopingList";

import menuItems from "./menuItems.json";
import { useMedia } from "../../hooks/useMedia";
import { ProductOfTheWeek } from "../ProductOfTheWeek/ProductOfTheWeek";
import {
  loggedInSelector,
  userSelectorfirstName,
} from "../../redux/auth/selectors";
import { selectCart } from "../../redux/cart/selectors";

import {
  Container,
  ContainerHeader,
  MenuBottom,
  HeaderTop,
  Wrap,
  HeaderWrap,
  HeaderLayout,
  WrapTop,
  MenuWrap,
  LoginShipingThumb,
  Schedule,
  TopWrap,
  CenterWrap,
  ButtonMenu,
  NameUser,
  ContainerMobile,
  CartQuantityWrap,
  CartQuantitySpan,
  SearchIcon,
} from "./header.styled";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isLogin = useSelector(loggedInSelector);
  const userName = useSelector(userSelectorfirstName);
  const cartItems = useSelector(selectCart);

  const { pathname } = useLocation();
  const { isMobileScreen } = useMedia();

  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);
  const handleSearchClick = () => setIsSearchOpen((prev) => !prev);

  return (
    <header>
      {!isMobileScreen ? (
        <ContainerHeader>
          <ProductOfTheWeek />
          <Container>
            <HeaderTop>
              <HeaderWrap>
                <HeaderLayout>
                  <WrapTop>
                    <Logo />
                  </WrapTop>
                  <WrapTop>
                    <Wrap>
                      <LoginShipingThumb>
                        <SearchIcon onClick={handleSearchClick} />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          {isLogin && <NameUser>{userName}</NameUser>}
                          <User />
                        </div>
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
              <SearchForm isOpen={isSearchOpen} />
            </MenuBottom>
          </Container>
        </ContainerHeader>
      ) : (
        <ContainerMobile>
          <TopWrap>
            <Schedule
              href="https://t.me/+Eejgotzs-ktiMTIy"
              target="_blank"
              rel="noreferrer"
            >
              Підписуйся на наш телеграм канал
            </Schedule>
          </TopWrap>
          <CenterWrap>
            <Logo />
          </CenterWrap>
          <CenterWrap>
            <ButtonMenu onClick={handleMenuClick}>
              <MobileMenu />
            </ButtonMenu>
            <SearchIcon onClick={handleSearchClick} />
            <div>
              {isLogin && <NameUser>{userName}</NameUser>}
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
          </CenterWrap>
          <SearchForm isOpen={isSearchOpen} />
        </ContainerMobile>
      )}
    </header>
  );
};

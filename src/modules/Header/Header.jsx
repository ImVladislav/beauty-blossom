import React, { useState } from "react";

import SearchForm from "./SearchForm/SearchForm";
import Logo from "./Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LogIn from "./LogIn/LogIn";

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
  MenuLayout,
  MenuColumn,
  MenuSection,
  MenuProducts,
  LoginShipingThumb,
  MenuIcon,
  Schedule,
  TopWrap,
  CenterWrap,
  LogoTitle,
  LinkLogo,
  IconWrap,
  ButtonMenu,
} from "./header.styled";
import Menu from "./Menu/Menu";
import ShoppingCart from "./ShopingList/ShopingList";
import Email from "./Email/Email";
import { useLocation } from "react-router-dom";
import { useMedia } from "../../hooks/useMedia";
import { ProductOfTheWeek } from "../ProductOfTheWeek/ProductOfTheWeek";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
export const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktopScreen, isMobileScreen } = useMedia();
  // console.log(isDesktopScreen);
  // console.log(pathname);

  const handleMenuClick = () => {
    setIsMenuOpen((state) => !state);
  };
  return (
    <>
      {isDesktopScreen && (
        <>
          <ProductOfTheWeek />
          <ContainerHeader>
            <Container>
              <HeaderTop>
                <HeaderWrap>
                  <HeaderLayout>
                    <WrapTop>
                      <SearchForm />
                    </WrapTop>
                    <WrapTop>
                      <Logo />
                    </WrapTop>
                    <WrapTop>
                      <Wrap>
                        <WrapContacts>
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
                          {/* <Email /> */}
                        </WrapContacts>
                        <LoginShipingThumb>
                          <LogIn />
                          <ShoppingCart />
                        </LoginShipingThumb>
                      </Wrap>
                    </WrapTop>
                  </HeaderLayout>
                </HeaderWrap>
              </HeaderTop>
              <MenuBottom $pathname={pathname}>
                <MenuWrap>
                  <MenuLayout>
                    <MenuColumn>
                      <MenuSection>
                        <MenuProducts>
                          <Menu items={menuItems} />
                        </MenuProducts>
                      </MenuSection>
                    </MenuColumn>
                  </MenuLayout>
                </MenuWrap>
              </MenuBottom>
            </Container>
          </ContainerHeader>
        </>
      )}
      {isMobileScreen && (
        <div>
          {/* top */}
          <TopWrap>
            <Schedule>ПН - ПТ 9:30 - 18:00</Schedule>
            <Contacts
              title="+380500529100"
              to="tel:+380500529100"
              icon="phone"
            />
          </TopWrap>
          {/* center */}
          <CenterWrap>
            <ButtonMenu onClick={handleMenuClick}>
              <MenuIcon />
            </ButtonMenu>
            <Logo />
            <IconWrap>
              <LogIn />
              <ShoppingCart />
            </IconWrap>
          </CenterWrap>
          {/* bottom */}
          <SearchForm />
          {isMenuOpen && !isDesktopScreen && (
            <BurgerMenu
              handleClick={handleMenuClick}
              isMenuOpen={isMenuOpen}
              items={menuItems}
            />
          )}
        </div>
      )}
    </>
  );
};

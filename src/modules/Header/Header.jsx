import React from "react";

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
} from "./header.styled";
import Menu from "./Menu/Menu";
import ShoppingCart from "./ShopingList/ShopingList";
import Email from "./Email/Email";

export const Header = () => {
  return (
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
        <MenuBottom>
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
  );
};

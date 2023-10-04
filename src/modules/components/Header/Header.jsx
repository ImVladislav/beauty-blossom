import React from "react";

import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LogIn from "./LogIn/LogIn";
import Basket from "./Basket/Basket";

import menuItems from "./menuItems.json";

import {
  Container,
  ContainerHeader,
  Link,
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
} from "./header.styled";
import Menu from "./Menu/Menu";

export const Header = () => {
  return (
    <ContainerHeader>
      <Container>
        <HeaderTop>
          <HeaderWrap>
            <HeaderLayout>
              <WrapTop>
                <Search />
              </WrapTop>
              <WrapTop>
                <Logo />
              </WrapTop>
              <WrapTop>
                <Wrap>
                  <WrapContacts>
                    <Contacts />
                    <Link href="#">Перезвонити вам?</Link>
                  </WrapContacts>

                  <LogIn />

                  <Basket />
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

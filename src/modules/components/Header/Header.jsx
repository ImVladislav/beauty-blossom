import React from "react";

import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LogIn from "./LogIn/LogIn";
import Basket from "./Basket/Basket";

import menuItems from "./menuItems.json";

import { Container, ContainerHeader, Link, Row, Wrap } from "./header.styled";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <ContainerHeader>
      <Container>
        <Row>
          <Search />

          <Logo />
          <Wrap>
            <div>
              <Contacts />
              <Link href="#">Перезвонити вам?</Link>
            </div>

            <LogIn />

            <Basket />
          </Wrap>
        </Row>
        <Menu menuItems={menuItems} />
      </Container>
    </ContainerHeader>
  );
};

export default Header;

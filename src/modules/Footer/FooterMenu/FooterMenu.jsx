import React from "react";

import {
  LinkItem,
  List,
  ListItem,
  Title,
  Underline,
  TitleWrap,
  Wrap,
} from "./FooterMenuStyled";

export const FooterMenu = ({ menuItems }) => {
  const element = menuItems.map(({ to, text }) => (
    <ListItem key={to}>
      <LinkItem to={to}>{text}</LinkItem>
    </ListItem>
  ));
  return (
    <div>
      <TitleWrap>
        <Title>Iнформація</Title>
        <Underline />
      </TitleWrap>
      <Wrap>
        <List>{element}</List>
      </Wrap>
    </div>
  );
};

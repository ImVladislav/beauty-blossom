import React from "react";

import { Item, LinkItem, List, ListItem, Wrap } from "./FooterMenuStyled";

export const FooterMenu = ({ menuItems, }) => {
  console.log(menuItems);
  const element = menuItems.map(({ id, to, text }) => (
    <ListItem key={id}>
      <LinkItem href={to}>{text}</LinkItem>
    </ListItem>
  ));
  return (
    <Wrap>
      <List>{element}</List>
    </Wrap>
  );
};


import React from "react";

import { LinkItem, List, ListItem, Wrap } from "./FooterMenuStyled";

export const FooterMenu = ({ menuItems, }) => {
  const element = menuItems.map(({to, text }) => (
    
    <ListItem key={to}>
      <LinkItem to={to}>{text}</LinkItem>
    </ListItem>
  ));
  return (
    <Wrap>
      <List>{element}</List>
    </Wrap>
  );
};

 
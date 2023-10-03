import React from "react";

import { Item, Link, List, Wrap } from "./menu.styled";

const Menu = ({ menuItems, }) => {
  console.log(menuItems);
  const element = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      <Link href={to}>{text}</Link>
    </li>
  ));
  return (
    <Wrap>
      <List>{element}</List>
    </Wrap>
  );
};

export default Menu;

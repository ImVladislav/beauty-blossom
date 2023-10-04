import React from "react";

import MenuItem from "./MenuItem/MenuItem";

import { MenuNav, List } from "./menu.styled";

const Menu = ({ items }) => {
  return (
    <MenuNav>
      <List>
        {items.map((item) => (
          <MenuItem key={item.to} item={item} />
        ))}
      </List>
    </MenuNav>
  );
};

export default Menu;

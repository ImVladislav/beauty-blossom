import React, { useState } from "react";

import SubMenuItem from "./SubMenuItem/SubMenuItem";

import {
  Link,
  Item,
  ListSub,
  SubMenuWrap,
  RightIcon,
  DownIcon,
} from "./MenuItem.styled";

const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={item.to}>
        {item.text}
        {item.children.length > 0 && (expanded ? <DownIcon /> : <RightIcon />)}
      </Link>
      {expanded && item.children.length > 0 && (
        <SubMenuWrap>
          <ListSub>
            {item.children.map((childItem) => (
              <SubMenuItem key={childItem.to} item={childItem} />
            ))}
          </ListSub>
        </SubMenuWrap>
      )}
    </Item>
  );
};

export default MenuItem;

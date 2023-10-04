import React, { useState } from "react";
import {
  Link,
  Item,
  ListSub,
  ItemSub,
  RightIcon,
  DownIcon,
} from "./SubMenuItem.styled";

const SubMenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <ItemSub onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={item.to}>
        {item.text}
        {item.children.length > 0 && (expanded ? <DownIcon /> : <RightIcon />)}
      </Link>
      {expanded && item.children.length > 0 && (
        <ListSub>
          {item.children.map((childItem) => (
            <Item key={childItem.to}>
              <Link to={childItem.to}>{childItem.text}</Link>
            </Item>
          ))}
        </ListSub>
      )}
    </ItemSub>
  );
};

export default SubMenuItem;

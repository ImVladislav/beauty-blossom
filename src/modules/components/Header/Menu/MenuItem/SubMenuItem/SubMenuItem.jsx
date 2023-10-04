import React, { useState } from "react";
import {
  Link,
  Item,
  ListSub,
  ItemSub,
  RightIcon,
  DownIcon,
  WrapItem,
} from "./SubMenuItem.styled";

const SubMenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(!expanded);
  };

  return (
    <ItemSub>
      <WrapItem>
        <Link to={item.to}>{item.text}</Link>
        {item.children.length > 0 &&
          (expanded ? (
            <DownIcon onClick={handleMouseEnter} />
          ) : (
            <RightIcon onClick={handleMouseEnter} />
          ))}
      </WrapItem>
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

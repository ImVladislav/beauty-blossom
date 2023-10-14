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
import { useDispatch } from "react-redux";
import { setfilter } from "../../../../../redux/filter/slice";

const SubMenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setExpanded(!expanded);
  };
  const handleClick = (e) => {
    const name = e.target.innerText;
    dispatch(setfilter(name));
    // console.log(e.target.innerText);
  };
  // console.log(item.text);

  return (
    <ItemSub>
      <WrapItem>
        <Link to={item.to} onClick={handleClick}>
          {item.text}
        </Link>
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
              <Link to={childItem.to} onClick={handleClick}>
                {childItem.text}
              </Link>
            </Item>
          ))}
        </ListSub>
      )}
    </ItemSub>
  );
};

export default SubMenuItem;

import React, { useState, useEffect } from "react";
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

const SubMenuItem = ({ item, activeSubMenu, setActiveSubMenu }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeSubMenu !== item.to) {
      setExpanded(false); // Закриваємо субменю, якщо воно не активне
    }
  }, [activeSubMenu, item.to]);

  const handleMouseEnter = () => {
    setExpanded(true);
    setActiveSubMenu(item.to); // Встановлюємо активне субменю
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };
  const handleClick = (e) => {
    const name = e.target.innerText;
    dispatch(setfilter(name));
  };
  return (
    <ItemSub
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={activeSubMenu === item.to ? "active" : ""}
    >
      <WrapItem>
        <Link to={item.to} onClick={handleClick}>
          {item.text}
        </Link>
        {item.children.length > 0 && (
          <div>{expanded ? <DownIcon /> : <RightIcon />}</div>
        )}
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

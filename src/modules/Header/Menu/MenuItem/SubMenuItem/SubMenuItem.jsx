import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setfilter } from "../../../../../redux/filter/slice";

import { SubSubMenuItem } from "./SubSubMenuItem/SubSubMenuItem";

import {
  LinkStyle,
  ListSub,
  RightIcon,
  DownIcon,
  ItemInner,
} from "./SubMenuItem.styled";

const SubMenuItem = ({
  item,
  activeSubMenu,
  setActiveSubMenu,
  setActiveSubSubMenu,
}) => {
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
    // console.log(name);
    dispatch(setfilter(name));
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={activeSubMenu === item.to ? "active" : ""}
    >
      <ItemInner>
        <LinkStyle to={item.to} onClick={handleClick}>
          {item.text}
        </LinkStyle>
        {item.children.length > 0 && (
          <div>{expanded ? <DownIcon /> : <RightIcon />}</div>
        )}
      </ItemInner>
      {expanded && item.children.length > 0 && (
        <ListSub>
          {item.children.map((childItem) => (
            <SubSubMenuItem
              key={childItem.to}
              item={childItem}
              activeSubMenu={activeSubMenu}
              setActiveSubMenu={setActiveSubSubMenu} //{/* Змінимо setActiveSubMenu на setActiveSubSubMenu */}
            />
          ))}
        </ListSub>
      )}
    </li>
  );
};

export default SubMenuItem;

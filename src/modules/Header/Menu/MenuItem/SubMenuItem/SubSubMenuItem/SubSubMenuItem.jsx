import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setfilter } from "../../../../../../redux/filter/slice";

import {
  LinkStyle,
  Item,
  ListSub,
  ItemInner,
  RightIcon,
  DownIcon,
} from "./SubSubMenuItem.styled";

export const SubSubMenuItem = ({ item, activeSubMenu, setActiveSubMenu }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeSubMenu !== item.to) {
      setExpanded(false); // Закриваємо субсубменю, якщо воно не активне
    }
  }, [activeSubMenu, item.to]);

  const handleMouseEnter = () => {
    setExpanded(true);
    setActiveSubMenu(item.to); // Встановлюємо активне субсубменю, якщо це необхідно
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const handleClick = (e) => {
    const name = e.target.innerText;
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
            <li key={childItem.to}>
              <LinkStyle to={childItem.to} onClick={handleClick}>
                {childItem.text}
              </LinkStyle>
            </li>
          ))}
        </ListSub>
      )}
    </li>
  );
};

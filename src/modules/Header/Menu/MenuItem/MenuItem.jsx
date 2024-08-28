import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SubMenuItem from "./SubMenuItem/SubMenuItem";

import { selectGoods } from "../../../../redux/products/selectors";
import { setfilter } from "../../../../redux/filter/slice";

import {
  LinkStyle,
  Item,
  ListSub,
  MenuWrap,
  RightIcon,
  DownIcon,
  ItemBrands,
  LinkBrand,
  ListBrand,
  MenuBrandList,
  BrandLetter,
  ContactLink,
} from "./MenuItem.styled";

const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  // eslint-disable-next-line
  const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
  const items = useSelector(selectGoods);
  const dispatch = useDispatch();

  const brand = items
    ?.map((item) => item.brand.toUpperCase())
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, [])
    .sort();

  const sortedBrands = brand
    .map((item) => item.charAt(0).toUpperCase()) // Виділяємо першу букву та переводимо її в верхній регістр
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, [])
    .sort();

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
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {(item.to === "#contacts" && (
        <ContactLink href={item.to}>{item.text}</ContactLink>
      )) || (
        <LinkStyle to={item.to}>
          {item.text}
          {item.children.length > 0 &&
            (expanded ? <DownIcon /> : <RightIcon />)}
        </LinkStyle>
      )}

      {expanded && item.children.length > 0 && item.to !== "/brands" && (
        <MenuWrap>
          <ListSub>
            {item.children.map((childItem) => (
              <SubMenuItem
                key={childItem.to}
                item={childItem}
                activeSubMenu={activeSubMenu} // Передаємо активне субменю
                setActiveSubMenu={setActiveSubMenu}
                setActiveSubSubMenu={setActiveSubSubMenu} // Передаємо функцію для оновлення активного субменю
              />
            ))}
          </ListSub>
        </MenuWrap>
      )}

      {expanded && item.to === "/brands" && (
        <MenuBrandList>
          {sortedBrands.map((letter, index) => (
            <ItemBrands key={index}>
              <BrandLetter>{letter}</BrandLetter>
              <ListBrand>
                {brand.map((item, itemIndex) => {
                  if (item.charAt(0).toUpperCase() === letter) {
                    return (
                      <li key={itemIndex}>
                        <LinkBrand
                          to={`/brands/${item.toLowerCase().trim()}`}
                          onClick={handleClick}
                        >
                          {item}
                        </LinkBrand>
                      </li>
                    );
                  }
                  return null;
                })}
              </ListBrand>
            </ItemBrands>
          ))}
        </MenuBrandList>
      )}
    </Item>
  );
};

export default MenuItem;

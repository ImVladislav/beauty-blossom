import React, { useState } from "react";
import SubMenuItem from "./SubMenuItem/SubMenuItem";
import {
  Link,
  Item,
  ListSub,
  SubMenuWrap,
  RightIcon,
  DownIcon,
  ItemSubBrand,
  LinkBrand,
  ListSubBrand,
  BrandCard,
  SubMenuWrapBrand,
  BrandLetter,
} from "./MenuItem.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../../../redux/products/selectors";

import { setfilter } from "../../../../redux/filter/slice";

const MenuItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState(null);
  const items = useSelector(selectGoods);
  const dispatch = useDispatch();

  const brand = items
    ?.map((item) => item.brand)
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
      <Link to={item.to}>
        {item.text}
        {item.children.length > 0 && (expanded ? <DownIcon /> : <RightIcon />)}
      </Link>
      {expanded && item.children.length > 0 && item.to !== "/brands" && (
        <SubMenuWrap>
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
        </SubMenuWrap>
      )}

      {expanded && item.to === "/brands" && (
        <SubMenuWrapBrand>
          {sortedBrands.map((letter, index) => (
            <ItemSubBrand key={index}>
              <BrandLetter>{letter}</BrandLetter>
              <ListSubBrand>
                {brand.map((item, itemIndex) => {
                  if (item.charAt(0).toUpperCase() === letter) {
                    return (
                      <BrandCard key={itemIndex}>
                        <LinkBrand
                          to={`/brands/${item.toLowerCase().trim()}`}
                          onClick={handleClick}
                        >
                          {item}
                        </LinkBrand>
                      </BrandCard>
                    );
                  }
                  return null;
                })}
              </ListSubBrand>
            </ItemSubBrand>
          ))}
        </SubMenuWrapBrand>
      )}
    </Item>
  );
};

export default MenuItem;

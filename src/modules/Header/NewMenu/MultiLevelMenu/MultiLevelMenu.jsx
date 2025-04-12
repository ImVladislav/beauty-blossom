import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

// import { selectedBrand } from "../../../redux/brands/selectors";
import { setfilter } from "../../../../redux/filter/slice";

import { transliterate } from "../../../../shared/components/transliterate";

import menuItems from "../../menuItems.json";

import {
  BrandLetter,
  DownIcon,
  Item,
  ItemBrands,
  LinkBrand,
  LinkStyle,
  ListBrand,
  MenuBrandList,
  MenuContainer,
  MenuItem,
  MenuLink,
  RightIcon,
  SubMenu,
} from "./multiLevelMenu.styled";
import { selectGoods } from "../../../../redux/products/selectors";

// === Якірний скрол ===
const handleAnchorScroll = (anchorId) => {
  const target = document.querySelector(anchorId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

// === Рекурсивне меню ===
const RecursiveMenu = ({ items, level = 1, parentPath = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState(null);

  const allItems = useSelector(selectGoods);

  const brands = allItems
    ?.map((item) => item.brand.toUpperCase().trim())
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, [])
    .sort();

  const sortedBrands = brands
    .map((item) => item.charAt(0).toUpperCase()) // Виділяємо першу букву та переводимо її в верхній регістр
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, [])
    .sort();
  // const brands = useSelector(selectedBrand);
  // console.log("brands", brands);
  // console.log(sortedBrands);
  const handleClickBrand = (e) => {
    const name = e.target.innerText;
    console.log("name", name);
    dispatch(setfilter(name.toLowerCase().trim()));
  };
  const handleClickCategory = () => {
    navigate("/");
    setTimeout(() => {
      handleAnchorScroll("#category");
    }, 700);
  };
  const handleMouseEnter = (id) => {
    setExpandedItem(id);
  };

  const handleMouseLeave = () => {
    setExpandedItem(null);
  };

  return items.map((item, index) => {
    const hasChildren = item.children?.length > 0;
    const currentPath = `${parentPath}/${transliterate(item.text)}`;

    if (item.to === "/brands") {
      return (
        <Item
          key={item.to} // ✅
          onMouseEnter={() => handleMouseEnter("brands")}
          onMouseLeave={handleMouseLeave}
        >
          <LinkStyle to={item.to}>
            {item.text}
            {expandedItem === "brands" ? (
              <DownIcon
                style={{
                  transform: "rotate(-90deg)",
                  color: "#ff63b8",
                }}
              />
            ) : (
              <DownIcon />
            )}
          </LinkStyle>
          {expandedItem === "brands" && brands.length > 0 && (
            <MenuBrandList>
              {sortedBrands.map((letter) => (
                <ItemBrands key={letter}>
                  <BrandLetter>{letter}</BrandLetter>
                  <ListBrand>
                    {brands
                      .filter((item) => item.charAt(0).toUpperCase() === letter)
                      .map((item) => (
                        <li key={item}>
                          <LinkBrand
                            to={`/brands/${item.toLowerCase().trim()}`}
                            onClick={handleClickBrand}
                          >
                            {item}
                          </LinkBrand>
                        </li>
                      ))}
                  </ListBrand>
                </ItemBrands>
              ))}
            </MenuBrandList>
          )}
        </Item>
      );
    }
    if (item.to === "#category") {
      return (
        <MenuItem
          key={index}
          onMouseEnter={() => handleMouseEnter(`${item.text}`)}
          onMouseLeave={handleMouseLeave}
        >
          <MenuLink as="a" href="#category" onClick={handleClickCategory}>
            {item.text}
            {expandedItem === `${item.text}` ? (
              <DownIcon
                style={{
                  transform: "rotate(-90deg)",
                  color: "#ff63b8",
                }}
              />
            ) : (
              <DownIcon />
            )}
          </MenuLink>

          {hasChildren && (
            <SubMenu
              level={level}
              onMouseEnter={() => handleMouseEnter(`${item.text}`)}
              onMouseLeave={handleMouseLeave}
              onClick={handleClickBrand}
            >
              <RecursiveMenu
                items={item.children}
                level={level + 1}
                parentPath={currentPath}
              />
            </SubMenu>
          )}
        </MenuItem>
      );
    }

    if (item.to === "#contacts") {
      return (
        <MenuItem key={index}>
          <MenuLink
            as="a"
            onClick={() => handleAnchorScroll("#contacts")}
            href="#contacts"
          >
            {item.text}
            {expandedItem === "category" ? <DownIcon /> : <RightIcon />}
          </MenuLink>

          {hasChildren && (
            <SubMenu level={level}>
              <RecursiveMenu
                items={item.children}
                level={level + 1}
                parentPath={currentPath}
              />
            </SubMenu>
          )}
        </MenuItem>
      );
    }

    return (
      <MenuItem key={index}>
        <MenuLink to={`${currentPath}`}>
          {item.text}
          {hasChildren && (level === 1 ? <DownIcon /> : <RightIcon />)}
        </MenuLink>

        {hasChildren && (
          <SubMenu level={level}>
            <RecursiveMenu
              items={item.children}
              level={level + 1}
              parentPath={currentPath}
            />
          </SubMenu>
        )}
      </MenuItem>
    );
  });
};

const MultiLevelMenu = () => (
  <MenuContainer>
    <RecursiveMenu items={menuItems} />
  </MenuContainer>
);

export default MultiLevelMenu;

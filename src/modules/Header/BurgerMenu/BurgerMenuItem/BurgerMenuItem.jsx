import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setfilter } from "../../../../redux/filter/slice";
import { selectGoods } from "../../../../redux/products/selectors";

import {
  DownIcon,
  Link,
  LinkWrap,
  MenuLevel,
  RightIcon,
} from "./BurgerMenuItem.styled";

const BurgerMenuItem = ({ item, level, closeMenu }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const items = useSelector(selectGoods);
  const { pathname } = useLocation();
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
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleClick = (e) => {
    const name = e.target.innerText;

    dispatch(setfilter(name));
  };

  return (
    <MenuLevel className={`menu-level-${level}`}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LinkWrap className={pathname === item.to ? "active" : ""}>
          <Link
            to={item.to}
            onClick={(e) => {
              toggleSubMenu();
              closeMenu();
              handleClick(e);
            }}
          >
            {item.text}
          </Link>
        </LinkWrap>

        {(item.children.length === 0 && item.to !== "/brands") ||
          (isSubMenuOpen ? (
            <DownIcon
              onClick={(e) => {
                toggleSubMenu();

                e.preventDefault();
              }}
            />
          ) : (
            <RightIcon
              onClick={(e) => {
                toggleSubMenu();

                e.preventDefault();
              }}
            />
          ))}
      </div>

      {item.to !== "/brands" && item.children && isSubMenuOpen && (
        <div className="submenu">
          {item.children.map((child, index) => (
            <BurgerMenuItem
              key={index}
              item={child}
              level={level + 1}
              closeMenu={closeMenu}
            />
          ))}
        </div>
      )}
      {item.to === "/brands" && isSubMenuOpen && (
        <div className="submenu">
          {brand.map((child, index) => (
            <MenuLevel className={`menu-level-${level + 1}`}>
              <LinkWrap key={index}>
                <Link
                  to={`/brands/${child.toLowerCase().trim()}`}
                  onClick={(e) => {
                    closeMenu();
                    handleClick(e);
                  }}
                >
                  {child}
                </Link>
              </LinkWrap>
            </MenuLevel>
          ))}
        </div>
      )}
    </MenuLevel>
  );
};

export default BurgerMenuItem;

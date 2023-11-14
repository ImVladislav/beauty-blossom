import React, { useState } from "react";

import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { setfilter } from "../../../../redux/filter/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../../../../redux/products/selectors";

export const MenuLevel = styled.div`
  margin: 5px 5px;
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* list-style: none; */
  margin: 0;

  padding: 4px 0;
  /* position: relative; */
  /* padding: 3px 10px; */
  /* transition: 556ms; */
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; * */
  /* &.active {
    border-radius: 26.467px;
    background: #ffecd2;
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  } */
`;

export const Link = styled(NavLink)`
  /* text-align: center; */
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 118.9%; /* 23.78px */
  letter-spacing: -0.3px;

  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  /* font-size: ${(p) => p.theme.fontSizes.m}px; */
  /* font-weight: ${(p) => p.theme.fontWeights.body}; */
  /* display: flex; */
  /* align-items: center; */

  padding: 3px 10px;
  &&:hover,
  &:focus {
    border-radius: 26.467px;
    background: #ffecd2;
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }
  &.active {
    border-radius: 26.467px;
    background: #ffecd2;
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }

  /* &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  } */
  /* + ${LinkWrap} {
    border-radius: 26.467px;
    background: #ffecd2;
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  } */
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  margin: 0;
  /* margin-left: auto; */
`;
export const RightIcon = styled(AiOutlineRight)`
  width: 20px;
  height: 20px;
  margin: 5px;
  padding: 0;
  margin-left: 10px;
  /* color: ${(p) => p.theme.colors.textColor}; */
`;

export const DownIcon = styled(AiOutlineDown)`
  width: 20px;
  height: 20px;
  margin: 5px;
  padding: 0;
  margin-left: 10px;
  /* color: ${(p) => p.theme.colors.textColor}; */
`;

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

  // для брендів
  // const handleClick = (e) => {

  //   const name = e.target.innerText;
  //   dispatch(setfilter(name));
  // };

  const handleClick = (e) => {
    const name = e.target.innerText;

    dispatch(setfilter(name));
  };

  return (
    <MenuLevel
      className={`menu-level-${level}`}
      // className={
      //   pathname === item.to
      //     ? `menu-level-${level} active`
      //     : `menu-level-${level}`
      // }
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between'}}>
        <LinkWrap className={pathname === item.to ? "active" : ""}>
          <Link
            to={item.to}
            onClick={(e) => {
              toggleSubMenu();
              closeMenu();
              handleClick(e);
              // e.preventDefault();
            }}
          >
            {item.text}
          </Link>
        </LinkWrap>
        {/* <Button> */}
        {(item.children.length === 0 && item.to !== "/brands") ||
          (isSubMenuOpen ? (
            <DownIcon
              onClick={(e) => {
                toggleSubMenu();
                // closeMenu();
                e.preventDefault();
              }}
            />
          ) : (
            <RightIcon
              onClick={(e) => {
                toggleSubMenu();
                // closeMenu();
                e.preventDefault();
              }}
            />
          ))}

        {/* </Button> */}
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
                    // e.preventDefault();
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

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  position: relative;
  &:hover > ul,
  &:hover > div {
    display: block;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;

  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.02312;
  text-transform: lowercase;
  /* text-align: center; */
  color: #616161;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* align-items: center; */
  gap: 3px;

  transition: all 250ms linear;
  &.active {
    color: #ff63b8;
  }
  &:hover,
  &:focus {
    color: #ff63b8;
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: ${({ level }) => (level === 1 ? "100%" : "0")};
  left: ${({ level }) => (level === 1 ? "0" : "100%")};
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* padding: 10px 0; */
  min-width: 230px;
  /* min-width: 200px; */
  list-style: none;
  z-index: 100;
  @media screen and (min-width: 1024px) {
    min-width: 260px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 300px;
  }
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #555;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    color: #ff63b8;
  }
`;
export const DownIcon = styled(AiOutlineDown)`
  width: 12px;
  height: 12px;

  @media screen and (min-width: 1024px) {
    width: 18px;
    height: 18px;
  }
`;

export const RightIcon = styled(AiOutlineRight)`
  width: 12px;
  height: 12px;
  @media screen and (min-width: 1024px) {
    width: 18px;
    height: 18px;
  }
`;

// ========== Brands styled ==========
export const BrandLetter = styled.h3`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.02312;
  text-transform: uppercase;
  text-align: center;
  color: #ff63b8;
  min-width: 20px;

  @media screen and (min-width: 1024px) {
    min-width: 35px;
    font-size: 40px;
  }
`;

export const Item = styled.li`
  position: relative;

  list-style: none;
  margin: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemBrands = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px 0;

  &:nth-child(3n)::after {
    position: absolute;
    bottom: 0;
    right: 50%;
    content: "";
    display: block;
    width: 220%;
    height: 1px;
    background-color: #9a9a9a;
  }
  &:last-child:after {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    gap: 20px;
    padding: 15px 0;
  }

  @media screen and (min-width: 1440px) {
    gap: 30px;
    &:nth-child(3n)::after {
      display: none;
    }
    &:nth-child(4n)::after {
      position: absolute;
      bottom: 0;
      right: 50%;
      content: "";
      display: block;
      width: 310%;
      height: 1px;
      background-color: #9a9a9a;
    }
    &:last-child:after {
      display: none;
    }
  }
`;

export const LinkBrand = styled(NavLink)`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.02312;
  text-transform: uppercase;
  text-align: center;
  color: #616161;
  text-decoration: none;

  margin: 0;
  display: flex;
  text-align: start;
  text-decoration: none;
  padding: 4px 0;

  &.active {
    color: #ff63b8;
  }
  &:hover,
  &:focus {
    color: #ff63b8;
  }
  @media screen and (min-width: 1024px) {
    font-size: 15px;
    padding: 6px 0;
  }
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;

  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.02312;
  text-transform: lowercase;
  text-align: center;
  color: #616161;
  padding: 12px;

  display: flex;
  align-items: center;
  /* align-items: center; */
  gap: 3px;

  transition: all 250ms linear;
  &.active {
    color: #ff63b8;
  }
  &:hover,
  &:focus {
    color: #ff63b8;
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const ListBrand = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuBrandList = styled.ul`
  position: absolute;
  top: 100%;
  left: -110%;
  right: auto;

  width: 650px;
  min-height: 425px;
  padding: 0 20px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.colors.menuHoverShadow};

  @media screen and (min-width: 1024px) {
    left: -150%;
    width: 900px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    left: -200%;
    width: 1200px;
  }
`;

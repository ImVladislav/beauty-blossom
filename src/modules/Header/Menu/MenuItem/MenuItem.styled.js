import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 5px;
  position: relative;
  padding: 0 20px;
  transition: 556ms;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: ${(p) => p.theme.colors.menuHover};
    box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
    border-radius: 49px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};

  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  display: flex;
  align-items: center;

  &.active {
    color: ${(p) => p.theme.colors.accentColor};
  }
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const SubMenuWrap = styled.div`
  min-height: 320px;
  width: auto;
  top: 105%;
  left: 0;
  right: auto;
  border-radius: 10px;
  position: absolute;
  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
`;

export const RightIcon = styled(AiOutlineRight)`
  width: 25px;
  height: 25px;
  padding: 5px;
`;

export const DownIcon = styled(AiOutlineDown)`
  width: 25px;
  height: 25px;
  padding: 5px;
`;

export const ListSub = styled.ul`
  min-width: 220px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const SubMenuWrapBrand = styled.ul`
  padding: 5px;
  min-height: 320px;
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  top: 105%;
  left: 0;
  right: auto;
  border-radius: 10px;
  position: absolute;
  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.colors.menuHoverShadow};

  @media screen and (min-width: 1024px) {
    width: 700px;
  }
`;

export const ListSubBrand = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemSubBrand = styled.li`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
export const LinkBrand = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 20px;
  &.active {
    color: ${(p) => p.theme.colors.accentColor};
  }
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
    background: ${(p) => p.theme.colors.menuHover};
    box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
    border-radius: 49px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;
export const BrandLetter = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.title};
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const BrandCard = styled.li`
  border-radius: 8px;
  max-width: 155px;
`;

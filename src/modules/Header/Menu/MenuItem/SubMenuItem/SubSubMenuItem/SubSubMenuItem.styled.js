import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export const ItemSub = styled.li`
  &:hover {
    background: ${(p) => p.theme.colors.menuHover};
    box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
    border-radius: 49px;
  }
`;

export const WrapItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  display: flex;
  align-items: center;
  padding: 10px 20px;
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

export const RightIcon = styled(AiOutlineRight)`
  width: 25px;
  height: 25px;
  padding: 5px;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const DownIcon = styled(AiOutlineDown)`
  width: 25px;
  height: 25px;
  padding: 5px;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const ListSub = styled.ul`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  min-height: 380px;
  border-radius: 10px;
  position: absolute;
  left: 100%;
  top: 0;
  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
  @media screen and (min-width: 1024px) {
    min-height: 425px;
  }
`;

export const Item = styled.li`
  &:hover {
    background: ${(p) => p.theme.colors.menuHover};
    box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
    border-radius: 49px;
  }
`;

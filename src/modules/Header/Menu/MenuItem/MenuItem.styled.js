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
  /* background-color: ${(p) => p.theme.colors.white}; */

  /* border: solid ${(p) => p.theme.colors.topHeaderLine} 0px; */

  /* border-radius: 1px; */
  transition: 556ms;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: ${(p) => p.theme.colors.menuHover};
    box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
    border-radius: 49px;
    /* transition: 556ms;
    transform: translateY(-3px);
    color: #0066cc;
    border: solid 0px #0066cc;
    transform: translateY(0); */
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.black};

  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  display: flex;
  align-items: center;
  /* padding: 0 20px; */
  &.active {
    color: ${(p) => p.theme.colors.accentColor};
  }
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
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
  /* z-index: 0; */
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

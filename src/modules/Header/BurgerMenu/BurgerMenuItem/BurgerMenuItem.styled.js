import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export const MenuLevel = styled.div`
  margin: 5px 5px;
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 4px 0;
`;

export const Link = styled(NavLink)`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.3px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  padding: 3px 10px;
  &:hover,
  &:focus {
    border-radius: 27px;
    background: ${(p) => p.theme.colors.hoverBurger};
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }
  &.active {
    border-radius: 27px;
    background: ${(p) => p.theme.colors.hoverBurger};
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const RightIcon = styled(AiOutlineRight)`
  width: 20px;
  height: 20px;
  margin: 5px;
  padding: 0;
  margin-left: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const DownIcon = styled(AiOutlineDown)`
  width: 20px;
  height: 20px;
  margin: 5px;
  padding: 0;
  margin-left: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

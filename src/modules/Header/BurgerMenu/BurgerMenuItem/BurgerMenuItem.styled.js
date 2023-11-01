import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export const Item = styled.li`
  list-style: none;

  padding: 5px;
`;

export const LinkWrap = styled.c`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  /* padding: 5px; */
  position: relative;
  padding: 0 20px;
  transition: 556ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  &.active {
    border-radius: 26.467px;
    background: #ffecd2;

    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }
  &:hover,
  &:focus {
    border-radius: 26.467px;
    background: #ffecd2;

    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};

  font-size: ${(p) => p.theme.fontSizes.m}px;
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
`;

export const RightIcon = styled(AiOutlineRight)`
  width: 10px;
  height: 10px;
  margin: 5px;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const DownIcon = styled(AiOutlineDown)`
  width: 10px;
  height: 10px;
  margin: 5px;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

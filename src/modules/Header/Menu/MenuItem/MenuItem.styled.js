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

  background-color: ${(p) => p.theme.colors.topHeaderLine};

  border: solid ${(p) => p.theme.colors.topHeaderLine} 0px;

  border-radius: 1px;
  transition: 556ms;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    transition: 556ms;
    transform: translateY(-3px);

    color: #0066cc;
    border: solid 0px #0066cc;
    transform: translateY(0);
    box-shadow: rgb(0, 0, 0) 1px 11px 10px -8px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.black};

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
export const SubMenuWrap = styled.div`
  width: auto;
  top: 100%;
  left: 0;
  right: auto;
  border-radius: 0;
  position: absolute;
  background: ${(p) => p.theme.colors.topHeaderLine};
`;

export const ListSub = styled.ul`
  width: 240px;
  columns: 240px auto;
  column-gap: 20px;
  /* padding: 20px 20px 0; */
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

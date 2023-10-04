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
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.black};

  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  display: flex;
  align-items: center;
`;
export const SubMenuWrap = styled.div`
  width: auto;
  top: 30px;
  left: 0;
  right: auto;
  border-radius: 0;
  position: absolute;
  background: #e8dfd8;
`;

export const ListSub = styled.ul`
  width: 240px;
  columns: 240px auto;
  column-gap: 20px;
  padding: 20px 20px 0;
`;

export const RightIcon = styled(AiOutlineRight)``;

export const DownIcon = styled(AiOutlineDown)``;

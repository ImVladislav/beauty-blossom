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

  &:hover{
  color: #ffffff;
  font-size: 18px;
  border-radius: 0px;

  transition: 0.3s;
  box-shadow: inset 0px 0px 8px -2px rgba(0, 0, 0, 1);
 

}

`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.black};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const ListSub = styled.ul`
  width: 240px;
  columns: 240px auto;

  column-gap: 20px;
  padding: 20px 20px 0;
  position: absolute;
  left: 100%;
  top: 0;
  background: ${(p) => p.theme.colors.topHeaderLine};

`;

export const ItemSub = styled.li`
  /* display: table;
  break-inside: avoid-column; */
  padding-bottom: 20px;

    &:hover{
  color: #ffffff;
  font-size: 18px;
  border-radius: 0px;

  transition: 0.3s;
  box-shadow: inset 0px 0px 8px -2px rgba(0, 0, 0, 1);
    }
`;

export const WrapItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
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

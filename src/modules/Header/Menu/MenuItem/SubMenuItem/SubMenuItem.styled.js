import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

export const ItemInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: relative;
  z-index: 5; */
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.02312;
  text-transform: lowercase;

  color: #616161;

  display: flex;
  align-items: center;
  padding: 10px 20px;
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

export const RightIcon = styled(AiOutlineRight)`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  &:hover,
  &:focus {
    color: #ff63b8;
  }
  @media screen and (min-width: 1024px) {
    width: 18px;
    height: 18px;
  }
`;

export const DownIcon = styled(AiOutlineDown)`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  &:hover,
  &:focus {
    color: #ff63b8;
  }
  @media screen and (min-width: 1024px) {
    width: 18px;
    height: 18px;
  }
`;

export const ListSub = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 230px;
  min-height: 350px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  left: 100%;
  top: 0;
  background: ${(p) => p.theme.colors.white};
  box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
  @media screen and (min-width: 1024px) {
    min-height: 425px;
    min-width: 260px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 300px;
  }
`;

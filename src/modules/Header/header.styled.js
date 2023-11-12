import styled from "styled-components";

import { HiMenu } from "react-icons/hi";

export const ContainerHeader = styled.div`
  position: relative;
  z-index: 1;
  /* margin-bottom: 30px; */
`;

export const Container = styled.div`
  background: white;
`;
export const HeaderTop = styled.div`
  color: ${(p) => p.theme.colors.textColor};
`;
export const HeaderWrap = styled.div`
  max-width: 767px;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 1023px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1440px;
  }
  /* @media screen and (min-width: 1440px) {
    max-width: 1440px;
  } */
`;
export const HeaderLayout = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WrapTop = styled.div`
  /* padding-right: 12px; */
  display: flex;
  align-items: center;
  max-width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapContacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  @media screen and (min-width: 768px) {
    gap: 5px;
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`;

export const LoginShipingThumb = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 30px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
export const MenuBottom = styled.div`
  position: relative;
  top: 20px;
  margin: -20px 0 20px;
  background: ${(p) =>
    p.$pathname === "/" ? p.theme.colors.white : p.theme.colors.topHeaderLine};
  /* background: ${(p) => p.theme.colors.topHeaderLine}; */
  /* background: ${(p) => p.theme.colors.menuHover}; */
  color: ${(p) => p.theme.colors.textColor};
`;
export const MenuWrap = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
`;
export const MenuLayout = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuColumn = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 9999 auto;
  height: 100%;
`;
export const MenuSection = styled.div`
  flex: 1 1 100%;
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  text-align: left;
`;
export const MenuProducts = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
`;
// ///////////////////////////////

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 28px;
  background: #fff6e9;
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(p) => p.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-right: 30px;
  color: ${(p) => p.theme.colors.textColor};
  transition: all 0.15s ease 0s;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const MenuIcon = styled(HiMenu)`
  width: 35px;
  height: 35px;
`;
export const Schedule = styled.p`
  color: #504056;

  text-align: center;

  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 118.9%; /* 10.701px */
  letter-spacing: -0.135px;
`;
export const CenterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 5px 3px 30px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    padding: 3px 23px 3px 30px;
  }
`;

export const IconWrap = styled.div`
  display: flex;

  align-items: flex-end;
`;

export const NameUser = styled.p`
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

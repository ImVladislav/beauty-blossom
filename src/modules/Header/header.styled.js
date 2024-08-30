import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
// import { HiMenu } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
export const ContainerHeader = styled.div`
  position: relative;
  z-index: 1;
  background: ${(p) => p.theme.colors.white};
`;
export const ContainerMobile = styled.div`
  position: relative;
  background: ${(p) => p.theme.colors.white};
  z-index: 1;
`;
export const Container = styled.div`
  background: ${(p) => p.theme.colors.white};
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
`;
export const HeaderLayout = styled.div`
  margin: 15px 0;
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
`;
export const WrapTop = styled.div`
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
  /* margin-left: 20px; */
  position: absolute;
  justify-content: space-between;
  width: 150px;
  right: 0;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    /* margin-left: 20px; */
  }
  @media screen and (min-width: 1024px) {
    /* margin-left: 20px; */
    /* width: 195px; */
  }
  @media screen and (min-width: 1440px) {
    /* margin-left: 30px; */
  }
`;

export const CartQuantityWrap = styled.div`
  position: absolute;
  top: 0;
  background: ${(p) => p.theme.colors.accentColor};
  width: 15px;
  height: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
export const CartQuantitySpan = styled.span`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
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
  /* top: 20px; */
  /* margin: -20px 0 20px; */
  /* background: ${(p) =>
    p.$pathname === "/"
      ? p.theme.colors.white
      : p.theme.colors.topHeaderLine}; */
  color: ${(p) => p.theme.colors.textColor};
`;
export const MenuWrap = styled.div`
  max-width: 1100px;
  /* max-width: 1440px; */
  padding: 0 20px;
  margin: 0 auto;
`;

export const Line = styled.div`
  background: #aa9e9e;
  width: 100%;
  height: 1px;
  margin-top: 10px;
`;
// ///////////////////////////////

export const TopWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 28px;
  /* background: ${(p) => p.theme.colors.topLine}; */
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
  /* margin-right: 30px; */
  color: ${(p) => p.theme.colors.textColor};
  transition: all 0.15s ease 0s;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const MenuIcon = styled(IoMenuOutline)`
  width: 35px;
  height: 35px;
`;
export const Schedule = styled.a`
  /* color: ${(p) => p.theme.colors.textColor}; */
  text-align: center;
  /* font-size: ${(p) => p.theme.fontSizes.xxs}px; */
  /* font-style: normal; */
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 1.2;
  /* letter-spacing: -0.135px; */

  font-family: "Mulish", sans-serif;
  /* font-weight: 400; */
  font-size: 12px;
  /* line-height: 1.079; */
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: justify;
  color: #616161;
  /* display: flex;
  justify-content: center; */
`;
export const CenterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px 5px 6px 3px;
  /* padding: 3px 5px 3px 30px; */
  align-items: flex-end;
  @media screen and (min-width: 1024px) {
    padding: 3px 23px 3px 30px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const NameUser = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
`;
export const SearchIcon = styled(BsSearch)`
  width: 24px;
  height: 24px;
  /* color: ${(p) => p.theme.colors.textColor}; */
  color: #616161;
  /* @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  } */
  margin: 3px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ff96cf;
  }
`;

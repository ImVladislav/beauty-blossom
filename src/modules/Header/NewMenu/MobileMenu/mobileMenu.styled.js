import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export const BurgerWrapper = styled.div`
  position: relative;
  z-index: 1000;
`;
export const BurgerIcon = styled.button`
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #616161;
  margin: 0;
  padding: 0;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 80%;
  height: 100vh;
  background: #fff;
  padding: 20px;
  transition: left 0.3s ease;
  z-index: 999;
  overflow-y: auto;
`;
export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 28px;
  background: none;
  border: none;
  float: right;
  cursor: pointer;
`;
export const MobileNav = styled.ul`
  list-style: none;
  padding: 20px 0;
`;
export const NavItem = styled.li`
  padding: 7px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const NavLinkStyled = styled(NavLink)`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.57;
  text-transform: lowercase;
  /* text-align: center; */
  color: #616161;

  text-decoration: none;

  &.active {
    color: #ff63b8;
  }
  &:hover {
    color: #ff63b8;
  }
`;
export const LinkStyled = styled.a`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.57;
  text-transform: lowercase;
  /* text-align: center; */
  color: #616161;

  text-decoration: none;
  &.active {
    color: #ff63b8;
  }
  &:hover {
    color: #ff63b8;
  }
`;
export const AnchorStyled = styled.a`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.57;
  text-transform: lowercase;
  /* text-align: center; */
  color: #616161;

  text-decoration: none;
  &.active {
    color: #ff63b8;
  }
  &:hover {
    color: #ff63b8;
  }
`;
export const ExpandButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #555;
  /* margin-left: 8px; */
  cursor: pointer;
  &:hover {
    color: #ff63b8;
  }
`;
export const SubMenu = styled.ul`
  list-style: none;
  /* padding-left: 15px; */
  padding-top: 8px;
  /* text-align: center; */
`;
export const BrandStyleLink = styled(NavLink)`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.57;
  text-transform: uppercase;
  /* text-align: center; */
  color: #616161;

  text-decoration: none;

  /* padding: 7px 0; */
  &:hover,
  &:focus {
    color: #ff96cf;
  }
  &.active {
    color: #ff96cf;
  }
`;
export const DownIcon = styled(AiOutlineDown)`
  width: 22px;
  height: 22px;
  padding: 5px;
  /* margin-left: 5px; */
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ff96cf;
  }
`;

export const AuthenticatedLink = styled(Link)`
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.57;
  text-transform: lowercase;
  text-align: center;
  color: #616161;
  text-decoration: none;
  padding: 8px 0;

  &:hover,
  &:focus {
    color: #ff96cf;
  }
`;

export const InfoLink = styled.a`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.57;
  text-transform: lowercase;
  text-align: center;
  color: #616161;
  text-decoration: none;

  padding: 8px 0;
  &:hover,
  &:focus {
    color: #ff96cf;
  }
`;
export const ContactBtn = styled.button`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.57;
  text-transform: lowercase;
  text-align: center;
  color: #616161;
  text-decoration: none;
  background: transparent;
  border: none;

  padding: 8px 0;
  text-align: left;
  &:hover,
  &:focus {
    color: #ff96cf;
  }
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999; // нижче ніж меню
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // напівпрозорий
  backdrop-filter: blur(2px);
`;
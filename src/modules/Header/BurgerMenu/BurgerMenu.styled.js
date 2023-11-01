// MobileMenu.styled.js
import styled from "styled-components";
import { stack as Menu } from "react-burger-menu";

export const MobileMenuContainer = styled(Menu)`
  background: #fff; // Колір фону меню
  width: 297px; // Ширина меню
  position: fixed;
  top: 0;
  left: 0;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  padding: 25px;
`;

export const MobileMenuItem = styled.div`
  margin: 10px 0;
  a {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 118.9%;
    letter-spacing: -0.3px;

    text-decoration: none;
    color: ${(p) => p.theme.colors.textColor};
  }
`;

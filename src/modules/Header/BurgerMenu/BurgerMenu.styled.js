// MobileMenu.styled.js
import styled from "styled-components";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export const MobileMenuContainer = styled(Menu)`
  background: ${(p) => p.theme.colors.white}; // Колір фону меню
  width: 297px; // Ширина меню
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 15px;

  & div {
    overflow: auto;
    scrollbar-width: thin; /* Товщина смуги прокрутки */
    scrollbar-color: ${(p) => p.theme.colors.textColor} transparent; /* Колір смуги прокрутки */

    /* Стилізація смуги прокрутки для WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
      padding: 10px;
      width: 8px; /* Товщина смуги прокрутки */
    }
    &::-webkit-scrollbar-thumb {
      padding: 10px;
      background-color: ${(p) =>
        p.theme.colors.textColor}; /* Колір смуги прокрутки */
      border-radius: 8px; /* Круглий вигляд смуги прокрутки */
    }
    &::-webkit-scrollbar-track {
      background-color: transparent; /* Колір фону смуги прокрутки */
    }
  }
`;

export const MobileMenuItem = styled.div`
  a {
    font-size: ${(p) => p.theme.fontSizes.l}px;
    font-style: normal;
    font-weight: 300;
    line-height: 118.9%;
    letter-spacing: -0.3px;
    text-decoration: none;
    color: ${(p) => p.theme.colors.textColor};
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 4px 0;
`;
export const InfoLink = styled.a`
  text-decoration: none;

  font-size: ${(p) => p.theme.fontSizes.x}px;

  font-style: normal;
  font-weight: 300;
  line-height: 118.9%; /* 23.78px */
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
`;
export const InfoStylesLink = styled(Link)`
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.x}px;
  font-style: normal;
  font-weight: 300;
  line-height: 118.9%; /* 23.78px */
  letter-spacing: -0.3px;
  text-decoration: none;
  font-weight: 400;
  color: ${(p) => p.theme.colors.textColor};
  padding: 3px 10px;
  &:hover,
  &:focus {
    border-radius: 27px;
    background: ${(p) => p.theme.colors.hoverBurger};
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const InfoButton = styled.button`
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.x}px;
  font-style: normal;
  font-weight: 300;
  line-height: 118.9%; /* 23.78px */
  letter-spacing: -0.3px;
  background: transparent;
  border: none;
  color: ${(p) => p.theme.colors.textColor};
  padding: 3px 10px;
  text-align: left;
  &:hover,
  &:focus {
    border-radius: 27px;
    background: ${(p) => p.theme.colors.hoverBurger};
    box-shadow: 0px 2.16058px 2.16058px 0px rgba(0, 0, 0, 0.25);
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemTitle = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(p) => p.theme.colors.border};
  font-family: "Noto Sans";
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%; /* 25.828px */
  letter-spacing: -0.379px;
  padding: 3px 0;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.accentColor};
    color: ${(p) => p.theme.colors.accentColor};
    opacity: 0; /* Початкова прозорість лінії */
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:after {
    opacity: 1; /* Прозорість лінії при ховері */
  }

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    /* border-bottom: 1px solid ${(p) => p.theme.colors.accentColor}; */
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    font-style: normal;
    font-weight: 300;
    line-height: 103.312%;
    letter-spacing: -1.125px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.border};
  font-family: "Noto Sans";
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%;
  letter-spacing: -0.379px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.accentColor};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    line-height: 103.312%; /* 25.828px */
    letter-spacing: -1.125px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;
export const Nav = styled.nav`
  display: grid;
  padding: 10px 0 0 20px;
  justify-items: start;
`;

export const TitleWrap = styled.div`
  text-align: start;
`;
export const Title = styled.h3`
  color: ${(p) => p.theme.colors.border};

  font-family: Alegreya Sans;

  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
  font-style: normal;
  line-height: 103.312%; /* 35.126px */
  letter-spacing: 0.745px;
  padding: 0px 20px 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0 80px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: 103.312%; /* 35.126px */
    letter-spacing: 2.21px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 180px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;

export const Underline = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${(p) => p.theme.colors.black};
`;

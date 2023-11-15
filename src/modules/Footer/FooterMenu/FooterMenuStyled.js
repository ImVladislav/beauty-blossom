import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  text-align: start;
`;
export const List = styled.ul`
  display: grid;
  padding: 10px 0 0 20px;
`;

export const LinkItem = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.border};
  font-family: Noto Sans;
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%;
  letter-spacing: -0.379px;
  position: relative;
  display: inline-block;

  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }

  &:after {
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

  &:hover:after {
    opacity: 1;
  }

  &:active {
    color: ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    line-height: 103.312%;
    letter-spacing: -1.125px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const ListItem = styled.li``;

export const TitleWrap = styled.div``;
export const Title = styled.h3`
  color: ${(p) => p.theme.colors.border};
  font-family: Alegreya Sans;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
  font-style: normal;
  line-height: 103.312%; /* 35.126px */
  letter-spacing: 0.745px;
  padding: 0 20px 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0 20px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: 103.312%; /* 35.126px */
    letter-spacing: 2.21px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;

export const Underline = styled.div`
  height: 1px;
  background-color: ${(p) => p.theme.colors.black};
`;

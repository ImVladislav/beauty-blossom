import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemTitle = styled.a`
  /* font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-decoration: none;

  font-size: 18px;
  font-weight: 400; */
  cursor: pointer;
  text-decoration: none;
  color: #461c49;

  font-family: Noto Sans;
  /* font-size: ${(p) => p.theme.fontSizes.l}px; */
  font-size: 8.422px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%; /* 25.828px */
  letter-spacing: -0.379px;
  padding: 3px 0;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    font-style: normal;
    font-weight: 300;
    line-height: 103.312%; /* 25.828px */
    letter-spacing: -1.125px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const Item = styled(Link)`
  /* margin-bottom: 8px; */
  text-decoration: none;
  /* color: #000000;

  font-size: 18px;
  font-weight: 400; */
  color: #461c49;

  font-family: Noto Sans;
  /* font-size: ${(p) => p.theme.fontSizes.l}px; */
  font-size: 8.422px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%; /* 25.828px */
  letter-spacing: -0.379px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    /* font-size: 25px; */
    font-style: normal;
    font-weight: 300;
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
`;

export const TitleWrap = styled.div`
  text-align: start;
`;
export const Title = styled.h3`
  /* font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px; */
  color: #461c49;

  font-family: Alegreya Sans;

  font-size: 11.455px;
  font-style: normal;
  font-weight: 500;
  line-height: 103.312%; /* 35.126px */
  letter-spacing: 0.745px;
  padding: 0px 20px 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0 80px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
    font-style: normal;
    font-weight: 500;
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
  background-color: #000; /* You can change the color to your preference */
  /* margin-left: 20px; Adjust the spacing between the title and the line */
`;

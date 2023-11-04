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
  color: #461c49;
  font-family: Noto Sans;
  font-size: 8.422px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%;
  letter-spacing: -0.379px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  &:active {
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

export const ListItem = styled.li`
  /* height: 12px; */
  /* margin-bottom: 8px; */
`;

export const TitleWrap = styled.div`
  /* text-align: start; */
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
  padding: 0 20px 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0 20px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
    /* font-size: 34px; */
    font-style: normal;
    font-weight: 500;
    line-height: 103.312%; /* 35.126px */
    letter-spacing: 2.21px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 100px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;

export const Underline = styled.div`
  /* flex: 1; */
  height: 1px;
  background-color: #000; /* You can change the color to your preference */
  /* margin-left: 20px; Adjust the spacing between the title and the line */
`;

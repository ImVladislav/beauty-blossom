import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  /* background: ${(p) => p.theme.colors.menuBg}; */
  padding: 10px 0 0 20px;
`;
export const List = styled.ul`
  display: grid;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  /* color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.body}; */

  color: #461c49;

  font-family: Noto Sans;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%; /* 25.828px */
  letter-spacing: -1.125px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  &:active {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
export const ListItem = styled.li`
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
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 103.312%; /* 35.126px */
  letter-spacing: 2.21px;
  padding: 0 100px 0 20px;
`;

export const Underline = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000; /* You can change the color to your preference */
  /* margin-left: 20px; Adjust the spacing between the title and the line */
`;

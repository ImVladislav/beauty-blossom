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
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%; /* 25.828px */
  letter-spacing: -1.125px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
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
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 103.312%; /* 25.828px */
  letter-spacing: -1.125px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
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
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 103.312%; /* 35.126px */
  letter-spacing: 2.21px;
  padding: 0 180px 0 20px;
`;

export const Underline = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000; /* You can change the color to your preference */
  /* margin-left: 20px; Adjust the spacing between the title and the line */
`;

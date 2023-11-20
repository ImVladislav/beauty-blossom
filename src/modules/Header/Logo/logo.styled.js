import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const TextLogo = styled.p`
  font-family: "Kodchasan", sans-serif;
  text-transform: uppercase;
  font-size: ${(p) => p.theme.fontSizes.xl + 1}px;
  font-style: normal;
  line-height: 1;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
  letter-spacing: -1px;
  text-align: center;
  background: linear-gradient(
    180deg,
    #b347bc 0.21%,
    rgba(179, 71, 188, 0) 237.87%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl + 2}px;
    line-height: 1;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxl + 6}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl + 2}px;
  }
`;

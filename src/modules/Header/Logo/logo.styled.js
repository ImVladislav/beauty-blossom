import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoImg = styled.img`
  width: 80%;
`;
export const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  /* margin-left: 10px; */
  /* max-width: 96px; */
  /* color: #000; */
  /* flex-direction: column; */
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    /* max-width: none; */
  }
`;
export const TextLogo = styled.p`
  font-family: "Kodchasan", sans-serif;
  text-transform: uppercase;
  font-size: 17.833px;
  font-style: normal;
  line-height: 103.312%;

  font-weight: 500;
  letter-spacing: -1.159px;
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
    font-size: 25px;
    line-height: 1;
  }
  @media screen and (min-width: 1024px) {
    font-size: 38px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;

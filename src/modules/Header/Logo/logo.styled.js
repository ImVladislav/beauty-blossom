import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoImg = styled.img`
  width: 80%;
`;
export const LinkLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 10px;
  /* color: #000; */
  /* flex-direction: column; */
`;
export const TextLogo = styled.p`
  /* width: 100%; */
  font-family: "Kodchasan", sans-serif;
  text-transform: uppercase;
  font-size: 50px;
  line-height: 1;
  font-weight: 500;
  background: linear-gradient(
    180deg,
    #b347bc 0.21%,
    rgba(179, 71, 188, 0) 237.87%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

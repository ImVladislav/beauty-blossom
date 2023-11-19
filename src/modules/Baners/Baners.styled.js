import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    padding: 0 40px;
  }
`;

export const BanersWrap = styled.div`
  position: relative;
`;

export const ProductPurito = styled.img`
  width: 100%;
`;
export const ProductRetinol = styled.img`
  width: 100%;
`;
export const LinkRetinol = styled(Link)`
  position: absolute;
  bottom: 14%;
  right: 6%;
  background: transparent;
  border: 3px solid #ec1c1c;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  color: #ec1c1c;
  padding: 7px 30px;
  transition: all 250ms ease-in-out;
  &:hover {
    color: white;
    background: #ec1c1c;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 15%;
    right: 10%;
  }
`;
export const LinkPurito = styled(Link)`
  position: absolute;
  bottom: 15%;
  left: 5%;
  background: transparent;
  border: 3px solid #494141;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: #494141;
  padding: 7px 30px;
  transition: all 250ms ease-in-out;
  &:hover {
    color: white;
    background: #494141;
  }
`;

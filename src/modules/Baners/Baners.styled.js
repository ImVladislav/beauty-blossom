import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 1440px;
  margin: 0 auto;
`;
export const BackgroundFirst = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  height: 300px;

  background: linear-gradient(180deg, #f5fffe 0%, #ffccfd 100%);
`;
export const BackgroundSecond = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  height: 300px;
  background: linear-gradient(180deg, #f5fffe 0%, #b8c3ff 100%);
`;
export const ProductsFirstLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  max-height: 300px;
`;

export const TitleContainer = styled.div`
  position: absolute;
  left: 25%;
  top: 15%;
  display: flex;
  flex-direction: column;

  align-items: center;
  @media screen and (min-width: 768px) {
    left: 20%;
    top: 10%;
  }
`;
export const TitleFirst = styled.p`
  font-family: "Times New Roman", sans-serif;
  font-weight: 400;
  /*  */
  font-size: ${(p) => p.theme.fontSizes.l + 5}px;
  text-transform: capitalize;
  color: #2a2a2a;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxl + 3}px;
    /* font-size: 33px; */
  }
`;
export const TitleSecond = styled.p`
  font-family: "Times New Roman", sans-serif;
  font-weight: 400;
  /* font-size: 53px; */
  font-size: ${(p) => p.theme.fontSizes.xxl + 10}px;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  color: #2a2a2a;
  margin-top: -5px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxl + 10}px;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl + 10}px;
    /* font-size: 53px; */
  }
`;
export const ProductsFirstRight = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  max-height: 300px;
`;
export const ProductsSecondLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  max-height: 300px;
`;
export const Lador = styled.img`
  position: absolute;
  top: 10%;
  left: 30%;
  width: 40%;
  z-index: 1;
`;
export const ProductsSecondRight = styled.img`
  position: absolute;
  right: 0;

  bottom: 0;
  width: 60%;
  max-height: 300px;
`;
export const LinkLeft = styled(Link)`
  position: absolute;
  top: 50%;
  left: 18%;

  border: 1px solid #2a2a2a;
  border-radius: 40px;
  padding: 5px 40px;
  text-decoration: none;
  background: #fff0fd;
  z-index: 1;

  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  /* font-size: 22px; */
  line-height: 1.319;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  text-align: center;
  color: #2a2a2a;
  &:hover,
  &:focus {
    border: 1px solid #fff;
    color: #fff;
    background: #2a2a2a;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;
export const LinkRight = styled(Link)`
  position: absolute;
  top: 60%;
  left: 35%;

  border: 1px solid #fff;
  border-radius: 40px;
  padding: 5px 40px;
  text-decoration: none;
  background: #8d9fff;
  z-index: 1;

  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 22px;
  line-height: 1.319;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  text-align: center;
  color: #fff;
  &:hover,
  &:focus {
    border: 1px solid #8d9fff;
    color: #8d9fff;
    background: #ffffff;
  }
`;

// ----------------------------------------

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
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
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

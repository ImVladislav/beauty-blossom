import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapBackground = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    height: 220px;
  }

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    height: 450px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  /* overflow: hidden; */

  background-size: contain;
`;

export const Banner = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 220px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    height: 450px;
  }
`;

export const HeroWrap = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
`;

export const Product = styled.img`
  position: relative;
  z-index: -1;
  max-width: 120%;

  left: 0;
  /* left: 10%; */
  margin-top: -25px;
  @media screen and (min-width: 500px) {
    max-width: 100%;
    margin-top: -8%;
  }
  @media screen and (min-width: 600px) {
    max-width: 85%;
    margin-top: -10%;
  }
  @media screen and (min-width: 768px) {
    max-width: 120%;

    left: 2%;
    margin-top: -20px;
  }

  @media screen and (min-width: 1000px) {
    /* max-width: 120%; */

    left: 2%;
    margin-top: -80px;
  }
  @media screen and (min-width: 1200px) {
    /* max-width: 110%; */

    left: 2%;
    margin-top: -130px;
  }
  @media screen and (min-width: 1440px) {
    /* max-width: 120%; */

    left: 2%;
    margin-top: -100px;
  }
`;

export const Wraper = styled.div`
  display: flex;
  position: absolute;

  margin-right: 5%;
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    right: 23%;
  }
  @media screen and (min-width: 1024px) {
    right: 21%;
  }
  @media screen and (min-width: 1440px) {
    right: 22%;
  }
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xl * 2}px;
  font-weight: ${(p) => p.theme.fontWeights.body};

  letter-spacing: 2px;
  color: #1a0471;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl * 3}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl * 2}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.sectXl * 3}px;
  }
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const TextSecond = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};

  color: #1a0471;
  margin-bottom: 40px;
  margin-left: -2%;

  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
    font-size: ${(p) => p.theme.fontSizes.sm * 0.8}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.l * 1.1}px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xl + 2}px;
  }
`;
export const WraperLink = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  right: 18%;

  @media screen and (min-width: 768px) {
    right: 0;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    justify-content: center;
  }
`;
export const LinkBtn = styled(Link)`
  background: transparent;
  /* z-index: 1; */
  border: 2px solid #1a0471;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: ${(p) => p.theme.fontWeights.body * 2};
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  padding: 4px 10px;
  transition: all 250ms ease-in-out;

  color: #1a0471;

  margin-bottom: 10px;

  &:hover {
    color: white;

    background: #1a0471;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 110px;

    padding: 7px 30px;
    justify-content: flex-start;
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;

    padding: 10px 30px;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.authxl}px;
  }
`;

export const TextConditions = styled.p`
  position: relative;

  font-size: ${(p) => p.theme.fontSizes.xxxs - 2}px;
  font-weight: ${(p) => p.theme.fontWeights.body};

  color: #1a0471;
  left: -25%;

  @media screen and (min-width: 768px) {
    position: absolute;
    font-size: ${(p) => p.theme.fontSizes.xxxs}px;
    text-transform: uppercase;

    top: 280px;
    left: 26%;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxs}px;

    top: 320px;
    left: 27%;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    top: 410px;
    left: 24%;
  }
`;

// =================== PURITO =========================
export const BackgroundColor = styled.div`
  background: linear-gradient(107deg, #b4aea6 7.78%, #e1dfda 101.96%);
  height: 300px;
  position: relative;
  overflow: hidden;
  z-index: -1;
  user-select: none;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 1440px) {
    height: 600px;
  }
`;
export const ContainerBanner = styled.div`
  position: relative;
  display: flex;
  max-width: 1300px;

  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
`;
export const ImageBanner = styled.img`
  position: absolute;
  z-index: -1;
  right: -18%;
  bottom: -5px;
  max-height: 280px;
  @media screen and (min-width: 425px) {
    right: -8%;
    bottom: -5px;
  }
  @media screen and (min-width: 600px) {
    right: 5%;
    bottom: -5px;
  }
  @media screen and (min-width: 768px) {
    right: 2%;
    bottom: -4px;
    max-height: 380px;
  }
  @media screen and (min-width: 1024px) {
    right: 10%;
    bottom: -4px;
    max-height: 380px;
  }
  @media screen and (min-width: 1440px) {
    right: 0%;
    bottom: -4px;
    max-height: 580px;
  }
`;
export const InnerContentBanner = styled.div`
  margin-left: 20px;
  @media screen and (min-width: 425px) {
    margin-left: 50px;
  }
  @media screen and (min-width: 500px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 250px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 100px;
  }
`;

export const TitleBanner = styled.h2`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 64px;
  text-transform: uppercase;
  color: #f6f6f6;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 100px;

    color: #e4e4e4;
  }
  @media screen and (min-width: 1440px) {
    font-size: 200px;

    color: #e4e4e4;
  }
  &:after {
    content: "Purito";
    position: absolute;
    left: 2px;
    bottom: 9px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 26px;
    text-transform: uppercase;
    color: #6b4121;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      left: 4px;
      bottom: 15px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 54px;
      left: 10px;
      bottom: 36px;
    }
  }
`;
export const SloganBanner = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #6b4121;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    text-transform: uppercase;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-weight: 500;
    font-size: 28px;
  }
`;
export const LinkStyledBanner = styled(Link)`
  border-radius: 30px;
  padding: 10px 14px;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  background: #fff;
  color: #6b4121;
  text-decoration: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    background: #6b4121;
    color: #fff;
    & svg {
      stroke: #fff;
      fill: #fff;
    }
  }
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    padding: 16px 24px;
  }
  & svg {
    margin-left: 10px;
    width: 17px;
    height: 9px;
    stroke: #6b4121;
    stroke-width: 4px;
  }
`;

export const ListBanner = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    gap: 23px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 32px;
    margin-top: 54px;
  }
`;
export const ItemBanner = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  gap: 15px;
  @media screen and (min-width: 768px) {
    width: 74px;
  }
  & svg {
    width: 30px;
    height: 30px;
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (min-width: 1440px) {
      width: 64px;
      height: 64px;
    }
  }
`;

export const TextBanner = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.5;
  color: #6b4121;
  @media screen and (min-width: 1440px) {
    font-weight: 500;
    font-size: 10px;
  }
`;

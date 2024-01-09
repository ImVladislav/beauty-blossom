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

  max-width: 300%;

  left: -3%;
  margin-top: -25px;

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

  margin-right: 7%;
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
    right: 25%;
  }
  @media screen and (min-width: 1440px) {
    right: 30%;
  }
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xl * 2}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 125%; /* 51.483px */
  letter-spacing: 2px;
  color: #1a0471;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxl * 2}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxl * 2}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl * 2}px;
  }
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
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
    font-size: ${(p) => p.theme.fontSizes.sm * 1.1}px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l + 2}px;
  }
`;
export const WraperLink = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  right: 18%;

  @media screen and (min-width: 768px) {
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

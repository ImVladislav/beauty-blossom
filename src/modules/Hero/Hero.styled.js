import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapBackground = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    height: 155px;
  }

  @media screen and (min-width: 768px) {
    height: 360px;
  }

  @media screen and (min-width: 1024px) {
    height: 360px;
  }
  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  overflow: hidden;

  background-size: contain;
`;

export const Banner = styled.img`
  position: absolute;

  width: 100%;
  height: 250px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 550px;
  }

  @media screen and (min-width: 1024px) {
    height: 580px;
  }
  @media screen and (min-width: 1440px) {
    height: 800px;
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

  height: 125px;

  margin-top: 30px;

  left: 10%;
  @media screen and (min-width: 600px) {
    height: 140px;
    margin-top: 15px;
    left: 16%;
  }

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    height: 330px;
    left: 10%;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 40px;
    height: 320px;
    left: 10%;
  }
  @media screen and (min-width: 1440px) {
    height: 380px;

    left: 15%;
    margin-top: 20px;
  }
`;

export const Wraper = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  position: absolute;
  left: 20%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    display: flex;

    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.sm + 1}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};

  color: #1a0471;
  margin: 0;
  @media screen and (min-width: 600px) {
    font-size: ${(p) => p.theme.fontSizes.l + 2}px;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxl + 3}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxl + 8}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl + 10}px;
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
  margin-bottom: 10px;
  @media screen and (min-width: 600px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
    margin-bottom: 30px;
  }

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
  padding: 6px 8px;
  transition: all 250ms ease-in-out;

  color: #1a0471;

  margin-bottom: 30px;

  &:hover {
    color: white;

    background: #1a0471;
  }
  @media screen and (min-width: 600px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
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

export const TextСonditions = styled.p`
  position: absolute;
  bottom: -2%;

  left: 20%;
  font-size: ${(p) => p.theme.fontSizes.xxxs - 2}px;
  font-weight: ${(p) => p.theme.fontWeights.body};

  color: #1a0471;
  text-align: start;
  margin-bottom: 5px;
  @media screen and (min-width: 600px) {
    bottom: 0;

    left: 22%;
  }

  @media screen and (min-width: 768px) {
    text-transform: uppercase;
    bottom: 2%;

    margin-right: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
    bottom: 3%;
    left: 20%;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    bottom: 5%;
    left: 18%;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapBackground = styled.div`
  position: relative;

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  background: linear-gradient(
    180deg,
    #ffc8a1 0.02%,
    rgba(192, 178, 167, 0) 78.93%
  );
  background-size: contain;
`;

export const HeroWrap = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Product = styled.img`
  position: absolute;
  bottom: -35px;
  width: 210px;
  @media screen and (min-width: 1024px) {
    width: 350px;
    position: relative;
  }
  @media screen and (min-width: 1440px) {
    width: 375px;
  }
`;

export const Wraper = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 150px;

  @media screen and (min-width: 768px) {
    margin-left: 200px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 20px;
    margin-left: 50px;
  }
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xxl}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxl * 2}px;
    font-weight: ${(p) => p.theme.fontWeights.bold};
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    font-weight: ${(p) => p.theme.fontWeights.body};
    color: ${(p) => p.theme.colors.accentColor};
    margin-bottom: 30px;
  }
`;

export const TextSecond = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 37px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    font-weight: ${(p) => p.theme.fontWeights.body};
    color: ${(p) => p.theme.colors.accentColor};
    margin-bottom: 30px;
  }
`;

export const LinkBtn = styled(Link)`
  background: transparent;
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: ${(p) => p.theme.fontWeights.body};
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  padding: 6px 8px;
  transition: all 250ms ease-in-out;
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;
  margin-left: 50px;
  &:hover {
    color: white;
    background: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    margin-left: 0;
    padding: 7px 30px;
  }
`;

export const TextСonditions = styled.p`
  position: absolute;
  bottom: -2%;
  right: 3%;
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  text-align: end;
  @media screen and (min-width: 768px) {
    bottom: 8%;
    right: 10%;
    font-size: ${(p) => p.theme.fontSizes.xxs}px;
    font-weight: ${(p) => p.theme.fontWeights.body};
    color: ${(p) => p.theme.colors.accentColor};
    margin-right: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
`;

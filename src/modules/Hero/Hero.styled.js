import styled from "styled-components";

import bg from "../../images/banner.png";
import { Link } from "react-router-dom";

export const WrapBackground = styled.div`
  /* max-width: 1440px; */
  /* height: 270px; */
  position: relative;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    /* max-width: 1440px; */
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    /* display: flex; */
    /* justify-content: center; */
  }
`;

export const Background = styled.div`
  /* height: 400px; */
  width: 100vw;
  background: linear-gradient(
    180deg,
    #ffc8a1 0.02%,
    rgba(192, 178, 167, 0) 78.93%
  );
  background-size: contain;
  /* width: 1400px; */
  /* width: 100%;
  height: 100%; */
`;
export const WrapСonditions = styled.div`
  /* position: relative; */
  /* display: flex;
  align-items: flex-end;
  justify-content: center; */
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;

  /* align-items: center; */
`;

export const ImageWrap = styled.div``;

export const Product = styled.img`
  position: absolute;

  bottom: 0px;
  /* left: 536px; */

  width: 210px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 350px;
    position: relative;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const TextWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 150px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 50px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Title = styled.h2`
  /* text-align: center; */
  font-size: ${(p) => p.theme.fontSizes.xxl}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxl * 2}px;
    font-weight: ${(p) => p.theme.fontWeights.bold};
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    font-weight: ${(p) => p.theme.fontWeights.body};
    color: ${(p) => p.theme.colors.accentColor};
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const TextSecond = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 37px;
  /* max-width: 300px; */
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    font-weight: ${(p) => p.theme.fontWeights.body};
    color: ${(p) => p.theme.colors.accentColor};
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1440px) {
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
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.xxs}px;

  padding: 6px 8px;

  transition: all 250ms ease-in-out;
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;
  margin-left: auto;
  &:hover {
    color: white;
    background: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    margin-left: 0;
    padding: 7px 30px;
    @media screen and (min-width: 1440px) {
    }
  }
`;

export const TextСonditions = styled.p`
  /* position: absolute; */

  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  /* margin-top: 10px; */
  text-align: end;
  /* display: flex;

  justify-content: flex-end; */
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    /* position: absolute; */
    bottom: 10%;
    right: 10%;
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    font-weight: ${(p) => p.theme.fontWeights.body};
    color: ${(p) => p.theme.colors.accentColor};
    margin-top: 10px;
    margin-right: 30px;
  }
  @media screen and (min-width: 1440px) {
    /* display: flex;

  justify-content: flex-end; */
  }
`;

// @media screen and (min-width: 768px) {
// }

// @media screen and (min-width: 1440px) {
// }

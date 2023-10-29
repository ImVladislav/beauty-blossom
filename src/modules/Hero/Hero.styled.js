import styled from "styled-components";

import bg from "../../images/banner.png";
import { Link } from "react-router-dom";
export const WrapBackground = styled.div`
  max-width: 1440px;
  height: 350px;
  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  /* height: 400px; */
  background: linear-gradient(
    180deg,
    #ffc8a1 0.02%,
    rgba(192, 178, 167, 0) 78.93%
  );
  background-size: contain;
  width: 1400px;
  /* width: 100%;
  height: 100%; */
`;
export const WrapСonditions = styled.div`
  position: relative;
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
  width: 350px;
`;

export const TextWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 50px;
`;

export const Title = styled.h2`
  /* text-align: center; */
  font-size: ${(p) => p.theme.fontSizes.xxl * 2}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.accentColor};
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;
`;
export const TextSecond = styled.p`
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;
  /* max-width: 300px; */
`;

export const LinkBtn = styled(Link)`
  background: transparent;
  border: 3px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.m}px;

  padding: 7px 30px;

  transition: all 250ms ease-in-out;
  color: ${(p) => p.theme.colors.accentColor};
  &:hover {
    color: white;
    background: ${(p) => p.theme.colors.accentColor};
  }
`;

export const TextСonditions = styled.p`
  position: absolute;
  bottom: 10%;
  right: 10%;
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-top: 10px;
  margin-right: 30px;
  /* display: flex;

  justify-content: flex-end; */
`;

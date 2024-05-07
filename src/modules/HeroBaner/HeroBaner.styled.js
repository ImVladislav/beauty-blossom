import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapBanner = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Banner = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;

  object-fit: cover;
  object-position: center;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 20px;
  @media screen and (min-width: 768px) {
    margin: 50px 0 20px;
  }

  @media screen and (min-width: 1440px) {
    margin: 100px 0 50px;
  }
`;
export const TitleInner = styled.div`
  text-align: end;
`;
export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-weight: 900;

  line-height: 1.319;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  color: #ecff75;

  margin: 0;

  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: #006f5b;

  @media screen and (min-width: 768px) {
    -webkit-text-stroke-width: 0.5px;
    font-size: ${(p) => p.theme.fontSizes.xxl}px;
  }

  @media screen and (min-width: 1024px) {
    -webkit-text-stroke-width: 0.8px;
    font-size: ${(p) => p.theme.fontSizes.xxl + 10}px;
  }
  @media screen and (min-width: 1440px) {
    -webkit-text-stroke-width: 1px;
    font-size: ${(p) => p.theme.fontSizes.xxxl + 15}px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};

  line-height: 1.319;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #006f5b;

  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: #ecff75;
  @media screen and (min-width: 768px) {
    -webkit-text-stroke-width: 0.3px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxl + 5}px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
  @media screen and (min-width: 1024px) {
    gap: 60px;
  }
`;

export const Product = styled.img`
  width: 65%;

  height: fit-content;
  left: 0;
  bottom: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;
export const LinkBtn = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: ${(p) => p.theme.fontWeights.bold + 100};
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  line-height: 1.319;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  background: #ecff75;
  color: #006f5b;
  border: 1px solid #006f5b;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  padding: 2px 15px;
  transition: all 250ms ease-in-out;

  &:hover {
    background: #006f5b;
    color: #ecff75;
    border: 1px solid #ecff75;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    padding: 2px 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
    padding: 2px 30px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxl + 5}px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  li {
    p {
      font-family: "Montserrat", sans-serif;
      line-height: 1.319;
      letter-spacing: 0.03em;
      font-weight: 400;
      font-size: ${(p) => p.theme.fontSizes.xxs + 1}px;
      text-align: center;
      color: #006f5b;
      @media screen and (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.l}px;
      }
      @media screen and (min-width: 1024px) {
        font-size: ${(p) => p.theme.fontSizes.xxl}px;
      }
      @media screen and (min-width: 1440px) {
        font-size: ${(p) => p.theme.fontSizes.xxxl}px;
      }
    }
  }

  li:first-child {
    p {
      font-size: ${(p) => p.theme.fontSizes.xs}px;
      @media screen and (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.l + 1}px;
      }
      @media screen and (min-width: 1024px) {
        font-size: ${(p) => p.theme.fontSizes.xxl + 3}px;
      }
      @media screen and (min-width: 1440px) {
        font-size: ${(p) => p.theme.fontSizes.xxxl + 5}px;
      }
    }
  }

  li:last-child {
    p {
      font-size: ${(p) => p.theme.fontSizes.xxs}px;
      @media screen and (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.l - 1}px;
      }
      @media screen and (min-width: 1024px) {
        font-size: ${(p) => p.theme.fontSizes.xxl - 3}px;
      }
      @media screen and (min-width: 1440px) {
        font-size: ${(p) => p.theme.fontSizes.xxxl - 5}px;
      }
    }
  }
`;

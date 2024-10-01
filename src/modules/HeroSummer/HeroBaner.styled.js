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
  margin: 10px 0 10px;
  @media screen and (min-width: 768px) {
    margin: 10px 0 10px;
  }

  @media screen and (min-width: 1440px) {
    margin: 50px 0 30px;
  }
`;
export const TitleInner = styled.div`
  text-align: start;
`;
export const Title = styled.h2`
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
  @media screen and (min-width: 500px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: 768px) {
    -webkit-text-stroke-width: 0.5px;
    font-size: ${(p) => p.theme.fontSizes.xxl}px;
  }

  @media screen and (min-width: 1024px) {
    -webkit-text-stroke-width: 0.8px;
    font-size: ${(p) => p.theme.fontSizes.xxl + 15}px;
  }
  @media screen and (min-width: 1440px) {
    -webkit-text-stroke-width: 1px;
    font-size: ${(p) => p.theme.fontSizes.xxxl + 12}px;
  }
`;

export const Subtitle = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};

  line-height: 1.319;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #006f5b;

  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: #ecff75;

  @media screen and (min-width: 500px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
  @media screen and (min-width: 768px) {
    -webkit-text-stroke-width: 0.3px;
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.authxl}px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* justify-content: flex-end; */
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
  @media screen and (min-width: 1024px) {
    gap: 60px;
  }
  @media screen and (min-width: 1440px) {
    gap: 250px;
  }
`;

export const Product = styled.img`
  width: 45%;
  height: auto;
  /* height: fit-content; */
  left: 0;
  bottom: 0;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
  @media screen and (min-width: 1440px) {
    width: 30%;
  }
`;
export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  @media screen and (min-width: 500px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;
export const LinkBtn = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: ${(p) => p.theme.fontWeights.bold + 100};
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  line-height: 1.319;
  letter-spacing: 0.03em;
  // text-transform: capitalize;
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
  @media screen and (min-width: 500px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
    padding: 2px 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    padding: 2px 25px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
    padding: 2px 35px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxl}px;
    padding: 2px 50px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  li {
    p {
      font-family: "Montserrat Alternates", sans-serif;
      line-height: 1.319;
      letter-spacing: 0.03em;
      font-weight: 500;
      font-size: ${(p) => p.theme.fontSizes.xxxs + 1}px;
      text-align: center;
      color: #006f5b;
      @media screen and (min-width: 500px) {
        font-size: ${(p) => p.theme.fontSizes.s}px;
      }
      @media screen and (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.m}px;
      }
      @media screen and (min-width: 1024px) {
        font-size: ${(p) => p.theme.fontSizes.xl}px;
      }
      @media screen and (min-width: 1440px) {
        font-size: ${(p) => p.theme.fontSizes.authxl + 5}px;
      }
    }
  }

  li:first-child {
    p {
      font-size: ${(p) => p.theme.fontSizes.xxs}px;
      @media screen and (min-width: 500px) {
        font-size: ${(p) => p.theme.fontSizes.s + 1}px;
      }
      @media screen and (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.m + 1}px;
      }
      @media screen and (min-width: 1024px) {
        font-size: ${(p) => p.theme.fontSizes.xl + 3}px;
      }
      @media screen and (min-width: 1440px) {
        font-size: ${(p) => p.theme.fontSizes.authxl + 10}px;
      }
    }
  }

  li:last-child {
    p {
      font-size: ${(p) => p.theme.fontSizes.xxxs}px;
      @media screen and (min-width: 500px) {
        font-size: ${(p) => p.theme.fontSizes.s - 1}px;
      }
      @media screen and (min-width: 768px) {
        font-size: ${(p) => p.theme.fontSizes.m - 1}px;
      }
      @media screen and (min-width: 1024px) {
        font-size: ${(p) => p.theme.fontSizes.xl - 3}px;
      }
      @media screen and (min-width: 1440px) {
        font-size: ${(p) => p.theme.fontSizes.authxl}px;
      }
    }
  }
`;

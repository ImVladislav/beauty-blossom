import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1440px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: center;
    max-width: 1300px;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.accentColor};

  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.authxl + 1}px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    filter: grayscale(1);
    transition: filter 0.3s;

    .icon-disabled {
      filter: grayscale(1);
      cursor: not-allowed;
    }

    &:hover {
      filter: grayscale(0);
    }
  }
`;

export const CartWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 350px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    max-width: 740px;

    gap: 10px;
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1024px) {
    max-width: 880px;
    gap: 30px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1300px;
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProductCard = styled(Link)`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: start;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  vertical-align: top;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  &:hover {
    box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);
    z-index: 1;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
  }
  @media screen and (min-width: 1024px) {
    width: 250px;
    height: 250px;
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 1440px) {
    width: 180px;
    height: 180px;
  }
`;

export const ProductName = styled.h3`
  margin: 10px 0;
  font-size: ${(p) => p.theme.fontSizes.xxxs + 1}px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    text-transform: uppercase;
  }
`;

export const ProductTags = styled.div`
  display: grid;
  justify-content: space-between;
  position: absolute;
  bottom: 60px;
`;

export const TitleLine = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background: #aa9e9e;
  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`;

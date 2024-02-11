import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
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

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 20px;
`;

export const Button = styled.button`
  position: relative;
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
  justify-content: center;
  gap: 10px;
`;

export const ProductCardLink = styled(Link)`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px;
  text-align: center;

  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);
    z-index: 1;
  }

  @media screen and (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 240px;
  }
`;

export const ProductImageWrap = styled.div`
  width: 100px;
  height: 100px;

  @media screen and (min-width: 1024px) {
    width: 140px;
    height: 140px;
  }
  @media screen and (min-width: 1440px) {
    width: 180px;
    height: 180px;
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductName = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.xxxs + 1}px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    text-transform: uppercase;
  }
`;

export const ProductTags = styled.div`
  display: grid;
  justify-content: space-between;
  position: absolute;
  bottom: 40px;
  @media screen and (min-width: 1024px) {
    bottom: 50px;
  }
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

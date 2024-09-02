import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto 0;
  padding: 0 5px;
  @media screen and (min-width: 768px) {
    max-width: 1024px;
    padding: 0 20px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1200px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

export const Title = styled.h2`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.09;
  text-align: center;
  color: #616161;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;
  margin-top: 20px;
  align-items: center;
  @media screen and (min-width: 768px) {
    gap: 5px;
  }
`;

export const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  padding: 0;

  svg {
    width: 22px;
    height: 21px;
    filter: grayscale(1);
    transition: filter 0.3s;

    @media screen and (min-width: 768px) {
      width: 30px;
      height: 30px;
    }

    .icon-disabled {
      filter: grayscale(1);
      cursor: not-allowed;
    }

    &:hover {
      filter: grayscale(0);
      fill: ${(p) =>
        p.disabled ? "#1010104d" : p.theme.colors.hoverAccentColor};
    }
  }
`;

export const CartWrap = styled.ul`
  display: grid;

  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 10px;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 460px) {
    gap: 25px;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(140px, 1fr));
  }

  /* display: flex;
  justify-content: center;
  gap: 10px; */
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

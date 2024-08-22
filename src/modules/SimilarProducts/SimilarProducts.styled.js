import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;
export const BrandStyledLink = styled(Link)`
  color: #616161;

  text-decoration: none;
  cursor: pointer;
  padding: 0 20px;
  font-size: 12px;
  &:hover {
    color: ${(p) => p.theme.colors.hoverAccentColor};
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
export const Title = styled.h2`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.079;
  letter-spacing: 0.1em;

  text-align: center;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.02312;
  }
  @media screen and (min-width: 1024px) {
    font-weight: 400;
    font-size: 30px;
  }
`;

export const Line = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background: #aa9e9e;
  @media screen and (min-width: 768px) {
    /* margin-top: 20px; */
  }
`;

export const CartWrap = styled.div`
  padding: 0 20px;
  display: flex;

  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px;
  max-width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProductCardLink = styled(Link)`
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  scroll-snap-align: start;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 10px 10px;
  text-align: center;
  vertical-align: top;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: #616161;
  &:hover {
    box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);
    z-index: 1;
    cursor: pointer;
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

export const ProductImage = styled.img`
  max-width: 130px;
  max-height: 130px;
`;

export const ProductName = styled.h3`
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.02312;

  overflow: hidden;
  text-overflow: ellipsis;
  height: 5em;

  /* text-transform: uppercase; */

  @media screen and (min-width: 1024px) {
    font-size: 12px;
    /* font-size: ${(p) => p.theme.fontSizes.s}px; */
  }
`;

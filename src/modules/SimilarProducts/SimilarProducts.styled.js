import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.02312;
  letter-spacing: 0.01em;
  text-align: center;
  color: #000;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 30px;
    line-height: 1.02312;
    letter-spacing: 0.01em;
  }
`;

export const Line = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background: #aa9e9e;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const CartWrap = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProductCard = styled(Link)`
  width: 200px;
  height: 200px;
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
`;

export const ProductImage = styled.img`
  max-width: 130px;
  max-height: 130px;
`;

export const ProductName = styled.h3`
  margin: 10px 0;
  font-size: ${(p) => p.theme.fontSizes.xxxs + 1}px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
  color: ${(p) => p.theme.colors.accentColor};
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    text-transform: uppercase;
  }
`;

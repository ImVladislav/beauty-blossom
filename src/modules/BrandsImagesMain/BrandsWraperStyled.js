import styled from "styled-components";
import { Link } from "react-router-dom";

export const FrontBrands = styled.div`
  padding: 0 0 40px;
  display: flex;
`;

export const LayoutWarp = styled.div`
  position: relative;
  padding: 20px 20px;
  border: 1px solid none;
  border-radius: 0;
  display: flex;
`;

export const BrandsList = styled.ul`
  position: relative;
  /* padding: 20px 20px; */
  border: 1px solid none;
  border-radius: 0;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

export const BrandsItem = styled.li`
  position: relative;
  padding: 11px 15px;
  border: 1px solid none;
  border-radius: 0;
`;

export const BrandLink = styled(Link)`
  justify-content: center;
  align-items: center;
  height: 100px;
  /* padding: 10px; */
  border: 0;
  text-align: center;
  .BrandSVG {
    width: 90px;
    height: 50px;
    transition: transform 1s ease;
    fill: black;
    &:hover {
      transform: scale(1.5);
      box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);
      z-index: 3;
      cursor: pointer;
      fill: ${(p) => p.theme.colors.accentColor};
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 10px;
    border: 0;
    text-align: center;
    .BrandSVG {
      width: 180px;
      height: 100px;
      transition: transform 1s ease;
      fill: black;
      &:hover {
        transform: scale(1.5);
        box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);
        z-index: 3;
        cursor: pointer;
        fill: ${(p) => p.theme.colors.accentColor};
      }
    }
  }
`;

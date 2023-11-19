import styled from "styled-components";
import { Link } from "react-router-dom";

export const FrontBrands = styled.div`
  padding: 0 0 40px;
  display: flex;
`;

export const BrandsList = styled.ul`
  position: relative;
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
  border: 0;
  text-align: center;
  .BrandSVG {
    width: 90px;
    height: 50px;
    transition: transform 1s ease;
    fill: ${(p) => p.theme.colors.black};
    &:hover {
      transform: scale(1.5);
      box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);
      z-index: 1;
      cursor: pointer;
      fill: ${(p) => p.theme.colors.accentColor};
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 10px;
    .BrandSVG {
      width: 110px;
      height: 80px;
    }
  }
  @media screen and (min-width: 1440px) {
    .BrandSVG {
      width: 180px;
      height: 100px;
    }
  }
`;

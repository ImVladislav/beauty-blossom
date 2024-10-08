import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const WrapListProduct = styled.div`
  padding: 6px;
  /* width: 100vw; */
  min-width: 320px;
  max-width: 768px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    min-width: 700px;
    max-width: 1024px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 950px;
    max-width: 1440px;
  }
`;

export const ProductListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
  gap: 20px;
  text-align: center;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
  @media screen and (min-width: 1024px) {
    gap: 25px;
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-end;
`;

export const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
  color: ${(p) => p.theme.colors.textColor};
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PageButton = styled.button`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  margin: 0 3px;
  padding: 3px 8px;
  border: 1px solid #ddd;
  background-color: ${(p) =>
    p.$active === "true"
      ? p.theme.colors.hoverAccentColor
      : p.theme.colors.white};
  color: ${(p) =>
    p.$active === "true" ? p.theme.colors.white : p.theme.colors.textColor};
  border-color: ${(p) =>
    p.$active === "true" ? p.theme.colors.hoverAccentColor : "#ddd"};
  cursor: pointer;

  &:hover {
    background-color: ${(p) =>
      p.$active === "true" ? p.theme.colors.hoverAccentColor : "#f8f9fa"};
  }

  @media screen and (min-width: 1024px) {
    margin: 0 5px;
    padding: 8px 12px;
    font-size: ${(p) => p.theme.fontSizes.m}px;
    font-weight: ${(p) => p.theme.fontWeights.body};
  }
`;

export const IconLeft = styled(AiOutlineLeft)``;
export const IconRight = styled(AiOutlineRight)``;

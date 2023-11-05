import styled from "styled-components";

export const WrapListProduct = styled.div`
  padding: 6px;
  min-width: 375px;
  max-width: 768px;
  @media screen and (min-width: 768px) {
    min-width: 768px;
    max-width: 1024px;
  }
  @media screen and (min-width: 1024px) {
    min-width: 1024px;
    max-width: 1440px;
  }
  @media screen and (min-width: 1440px) {
    /* width: 1440px; */
    /* max-width: 1440px; */
  }
`;

export const ProductListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    /* justify-content: flex-start; */
  }

  @media screen and (min-width: 1440px) {
    /* justify-content: flex-start; */
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
  padding: 10px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 4px;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  color: ${(p) => p.theme.colors.textColor};
  font-weight: ${(p) => p.theme.fontWeights.body};
`;

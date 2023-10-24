import styled from "styled-components";

export const ProductListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* margin: -6px; */
  /* max-width: 1440px; */
`;

export const FilterContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-end;
`;
export const FilterWrap = styled.div`
  display: flex;
  justify-content: space_between;
  align-items: center;
  padding: 10px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

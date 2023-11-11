import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PageButton = styled.button`
  font-size: 13px;
  margin: 0 3px;
  padding: 3px 8px;
  border: 1px solid #ddd;
  background-color: ${(p) =>
    p.$active === "true" ? p.theme.colors.heroBtn : p.theme.colors.white};
  color: ${(p) =>
    p.$active === "true" ? p.theme.colors.white : p.theme.colors.textColor};
  border-color: ${(p) =>
    p.$active === "true" ? p.theme.colors.heroBtn : "#ddd"};
  cursor: pointer;

  &:hover {
    background-color: ${(p) =>
      p.$active === "true" ? p.theme.colors.heroBtn : "#f8f9fa"};
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    margin: 0 5px;
    padding: 8px 12px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const IconLeft = styled(AiOutlineLeft)``;
export const IconRight = styled(AiOutlineRight)``;

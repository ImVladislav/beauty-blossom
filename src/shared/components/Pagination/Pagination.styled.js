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
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  background-color: ${(p) => (p.active === "true" ? "#FF49AB" : "#fff")};
  color: ${(p) => (p.active === "true" ? "#fff" : "#333")};
  border-color: ${(p) => (p.active === "true" ? "#FF49AB" : "#ddd")};
  cursor: pointer;

  &:hover {
    background-color: ${(p) => (p.active === "true" ? "#FF49AB" : "#f8f9fa")};
  }
`;
export const IconLeft = styled(AiOutlineLeft)``;
export const IconRight = styled(AiOutlineRight)``;

import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 10px 20px;

  border-radius: 4px;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease color 0.3s ease;
  margin: 0 5px;

  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  border-color: #ddd;

  &:hover {
    background-color: ${(p) => (p.disabled ? "#ccc" : "#ff358a")};
    color: #f9f8f6;
    border: 1px solid transparent;
  }
`;

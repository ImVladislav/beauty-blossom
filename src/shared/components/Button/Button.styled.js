import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${(p) => (p.disabled ? "#ccc" : p.theme.colors.heroBtn)};
  color: ${(p) => p.theme.colors.white};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(p) =>
      p.disabled ? "#ccc" : p.theme.colors.hoverAccentColor};
  }
`;

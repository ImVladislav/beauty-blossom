import styled from "styled-components";

export const ScrollToTopButton = styled.div`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 2;
  cursor: pointer;
  font-size: 24px;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  border: none;
  border-radius: 50%;
  padding: 10px 15px;

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColor};
    box-shadow: ${(p) => p.theme.colors.menuHoverShadow};
  }

  &.visible {
    display: block;
  }
`;

import styled from "styled-components";

export const ButtonStyle = styled.button`
  /* background: transparent; */
  background-color: ${(p) => (p.disabled ? "#ccc" : "transparent")};
  border: 1px solid ${(p) => (p.disabled ? `#ccc` : p.theme.colors.accentColor)};
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  color: ${(p) =>
    p.disabled ? p.theme.colors.white : p.theme.colors.accentColor};
  padding: 5px 20px;

  transition: all 250ms ease-in-out;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  &:hover {
    color: ${(p) => (p.disabled ? p.theme.colors.white : p.theme.colors.white)};
    border: 1px solid ${(p) => (p.disabled ? `#ccc` : "none")};

    background-color: ${(p) =>
      p.disabled ? "#ccc" : p.theme.colors.accentColor};
  }

  &.goods {
    background-color: ${(p) =>
      p.disabled ? "#ccc" : p.theme.colors.accentColor};

    color: ${(p) => p.theme.colors.white};

    border: ${(p) => (p.disabled ? `1px solid #ccc` : "none")};

    &:hover {
      background-color: ${(p) =>
        p.disabled ? "#ccc" : p.theme.colors.textColor};

      border: ${(p) => (p.disabled ? `1px solid #ccc` : "none")};
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
    /* background-color: ${(p) =>
      p.disabled ? "#ccc" : p.theme.colors.heroBtn};
    color: ${(p) => p.theme.colors.white}; */
    padding: 10px 20px;
    /* border: none;
    border-radius: 4px; */
    /* cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")}; */
    /* transition: background-color 0.3s ease; */
  }
  @media (max-width: 767px) {
font-size: 20px;
padding: 10px 20px;
}
  &.user-menu {
    @media (min-width: 1240px) and (max-width: 1439px) {
      font-size: 20px;
      padding: 18px 50px;
    }

    @media (min-width: 1024px) and (max-width: 1239px) {
      font-size: 20px;
      padding: 18px 50px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 18px;
      padding: 16px 50px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
      padding: 18px 20px;
    }
  }
`;

import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${(p) => (p.disabled ? "#ccc" : "transparent")};
  border: 1px solid ${(p) => (p.disabled ? `#ccc` : p.theme.colors.accentColor)};
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;
  /* font-size: ${(p) => p.theme.fontSizes.xl}px; */
  max-width: 375px;
  height: 41px;

  color: ${(p) =>
    p.disabled ? p.theme.colors.white : p.theme.colors.accentColor};
  padding: 0px 100px;

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

    border: ${(p) => (p.disabled ? `1px solid black` : "none")};

    &:hover {
      background-color: ${(p) =>
        p.disabled ? "#ccc" : p.theme.colors.textColor};

      border: ${(p) => (p.disabled ? `1px solid #ccc` : "none")};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    height: 40px;
    padding: 0px 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
    display: flex;
    padding: 0px 60px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
    display: flex;
    padding: 0px 60px;
    align-items: center;
    justify-content: center;
  }

  &.user-menu {
    @media (min-width: 1240px) and (max-width: 1439px) {
      font-size: 20px;
      padding: 0px 60px;
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
  &.opt {
    font-weight: ${(p) => p.theme.fontWeights.title};
    font-size: 14px;
    padding: 10px 20px;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      padding: 22px 50px;
    }
    @media screen and (min-width: 1024px) {
      padding: 28px 60px;
      font-size: 18px;
    }

    @media screen and (min-width: 1440px) {
      padding: 28px 60px;
      font-size: 18px;
    }
  }
`;

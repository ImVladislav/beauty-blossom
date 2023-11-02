import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BrandPageContainer = styled.ul`
  margin: 10px 0;
  display: grid;
  grid-gap: 10px;
  /* Відступ між стовпцями та рядками */
  list-style: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-gap: 20px;
    grid-template-columns: repeat(6, 1fr); /* 6 стовпців */
  }
`;

export const BrandItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h3`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;

  font-weight: ${(p) => p.theme.fontSizes.body};

  color: ${(p) => p.theme.colors.textColor};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
`;

export const BrandCard = styled.div`
  padding: 3px;
  max-width: 200px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding: 16px;
  }
`;

export const BrandName = styled(NavLink)`
  margin: 0;
  display: flex;
  text-align: center;
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  font-weight: ${(p) => p.theme.fontSizes.body};

  color: ${(p) => p.theme.colors.accentColorText};
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

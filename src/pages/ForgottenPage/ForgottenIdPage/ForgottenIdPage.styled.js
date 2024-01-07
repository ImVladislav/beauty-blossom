import styled from "styled-components";
export const Container = styled.div`
  max-width: 1440px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  display: flex;

  font-size: ${(p) => p.theme.fontSizes.l}px;
  font-weight: bold;
  margin-top: 20px;
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.authxl}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxl}px;
  }
`;

export const Text = styled.p`
  display: flex;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: bold;
  margin-top: 20px;
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;

export const WrapInput = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin: 20px 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const Lable = styled.label`
  color: ${(p) => p.theme.colors.textColor};
  display: flex;
  margin-right: 12px;

  align-self: center;
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 1;
  letter-spacing: 0.225px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }

  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: ${(p) => p.theme.fontSizes.l}px;
    line-height: 1;
    letter-spacing: 0.375px;
    display: flex;
  }
`;

export const Input = styled.input`
  margin: 3px 3px 3px 0;
  max-width: 200px;
  min-width: 180px;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  border-radius: 25px;
  padding: 5px 15px;
  outline: none;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 1;
  letter-spacing: 0.19px;
  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    max-width: 300px;
    min-width: 250px;

    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 400px;
    min-width: 350px;

    font-size: ${(p) => p.theme.fontSizes.m}px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 500px;
    min-width: 350px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
    letter-spacing: 0.375px;
    margin: 10px;
    border-color: ${(p) => p.theme.colors.borderCard};
    padding: 10px 30px;
  }
`;

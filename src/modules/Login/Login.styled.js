import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const LableInput = styled.p`
  color: ${(p) => p.theme.colors.textColor};
  display: flex;
  margin-left: 12px;

  align-self: center;
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: 1;
  letter-spacing: 0.225px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }

  @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: ${(p) => p.theme.fontSizes.m}px;
    line-height: 1;
    letter-spacing: 0.375px;
    display: flex;
  }
`;

export const InputField = styled(Field)`
  margin: 3px 3px 3px 0;
  max-width: 200px;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  border-radius: 25px;
  padding: 3px 10px;
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
    max-width: 220px;
    min-width: 200px;
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 300px;
    min-width: 280px;
    font-size: ${(p) => p.theme.fontSizes.m}px;
    padding: 5px 15px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 400px;
    min-width: 350px;
    font-size: ${(p) => p.theme.fontSizes.m}px;
    letter-spacing: 0.375px;
    margin: 10px;
    border-color: ${(p) => p.theme.colors.borderCard};
    padding: 10px 30px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`;

export const WrapInput = styled.div`
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  position: relative;
  @media screen and (min-width: 1024px) {
    margin: 30px 0;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
  }
`;

export const Message = styled(ErrorMessage)`
  font-size: ${(p) => p.theme.fontSizes.xxxs - 1}px;
  color: red;
  position: absolute;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxs}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
`;

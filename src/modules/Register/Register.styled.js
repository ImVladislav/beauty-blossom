import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const ModalLoader = styled.div`
  min-width: 300px;

  @media screen and (min-width: 768px) {
    min-width: 600px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 900px;
  }
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #504056;
  font-size: ${(p) => p.theme.fontSizes.s + 1}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1;
  letter-spacing: 0.225px;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm + 1}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m + 1}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l + 1}px;
    margin-bottom: 30px;
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
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeights.body};
    line-height: 1;
    letter-spacing: 0.375px;
    margin: 10px;
    border-radius: 25px;
    border-color: ${(p) => p.theme.colors.borderCard};
    padding: 10px 30px;
  }
`;
export const LableInput = styled.p`
  color: #504056;
  display: flex;
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
    letter-spacing: 0.375px;
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
export const FormLavelBloks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
  }
`;
export const ChekBoxThumb = styled.div`
  display: grid;
  justify-items: start;
`;
export const FormikChekbox = styled(Field)`
  width: 10px;
  height: 10px;
  margin-right: 4px;
  @media screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
  @media screen and (min-width: 1024px) {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 18px;
    height: 18px;
  }
`;

export const LoginModalText = styled.label`
  color: ${(p) => p.theme.colors.textColor};
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1;
  letter-spacing: 0.225px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    margin-top: 0px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 30px;
    text-align: center;
    font-size: ${(p) => p.theme.fontSizes.m}px;
    letter-spacing: 0.375px;
    align-self: center;
  }
`;

export const LableChekbox = styled.label`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

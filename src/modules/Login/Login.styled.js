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
  color: #504056;
  display: flex;
  margin-left: 12px;
  /* text-align: center; */
  align-self: center;
  font-size: 12px;

  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 15.347px */
  letter-spacing: 0.225px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    /* margin-left: 30px; */
    text-align: center;

    font-size: 18px;
    font-style: normal;
    /* font-weight: 700; */
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    display: flex;
    align-self: center;
  }
`;

export const InputField = styled(Field)`
  margin: 3px 3px 3px 0;
  max-width: 200px;
  min-width: 150px;
  /* max-height: 20px; */
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  border-radius: 25px;
  padding: 3px 10px;
  outline: none;

  /* text-align: center;
font-family: Century Gothic; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 12.955px */
  letter-spacing: 0.19px;
  &:hover,
  &:focus {
    /* outline: 1px solid ${(p) => p.theme.colors.accentColor}; */
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    max-width: 220px;
    min-width: 200px;
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 300px;
    min-width: 280px;
    font-size: 18px;
    padding: 5px 15px;
  }

  @media screen and (min-width: 1440px) {
    /* min-width: 300px; */
    max-width: 400px;
    min-width: 350px;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;

    margin: 10px;
    border-radius: 25px;
    /* color: #b2b2b2; */
    border-color: ${(p) => p.theme.colors.borderCard};
    padding: 10px 30px;
    /* &:focus-visible{
            border-color: ${(p) => p.theme.colors.accentColor} !important;
        } */
  }
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* margin-bottom: 15px; */

  @media screen and (min-width: 768px) {
    /* justify-content: center; */
    flex-direction: row;
    /* margin-bottom: 20px; */
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    /* margin-bottom: 30px; */
  }
`;
export const WrapInput = styled.div`
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  margin: 20px 0;
  position: relative;

  @media screen and (min-width: 1024px) {
    margin: 30px 0;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
  }
`;

export const Message = styled(ErrorMessage)`
  font-size: 7px;
  color: red;
  position: absolute;

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

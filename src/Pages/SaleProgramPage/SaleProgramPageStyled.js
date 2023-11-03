import { Field } from "formik";
import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    font-size: 2.2em;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Container = styled.div`
  position: relative;
  background: #e8dfd8;
  color: #333;
  font-size: 12px;
  padding: 30px 0 60px;
`;

export const SubTitle = styled.h3`
  color: ${(p) => p.theme.colors.accentColor};
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  margin: 30px;
  @media screen and (min-width: 768px) {
    font-size: 1.8em;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ConditionsTitle = styled.h4`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  padding: 20px 0px;
  margin-left: 10px;
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    font-size: 1.8em;
    margin-left: 34px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Text = styled.p`
  padding: 0 5px;
  font-weight: bold;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ListItems = styled.li`
  margin-left: 5px;
  list-style-type: decimal;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ConditionsList = styled.ul`
  display: block;

  margin: 15px 0px 15px 25px;
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Півпрозорий чорний фон */
  display: flex;
  justify-content: center; /* Центруємо горизонтально */
  align-items: center; /* Центруємо вертикально */
  z-index: 103;
`;
export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 90%;

  text-align: center;
  position: relative;
`;

export const OpenModal = styled.button`
  /* width: 340px;
  height: 70px; */
  background: ${(p) => p.theme.colors.accentColor};
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: auto;
  margin-right: auto;
  border: none;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  padding: 15px 20px;
  background: ${(p) => p.theme.colors.accentColor};
  &:hover {
    background: ${(p) => p.theme.colors.textColor};
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 20px 30px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const CloseModal = styled.button``;

export const ModalForm = styled.form``;

export const FormLavelBloks = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  margin-top: 10px;
  position: relative;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 14px;
  }
`;
export const Label = styled.label``;

export const ModalText = styled.p`
  font-weight: bold;
`;

export const ReqStar = styled.span`
  color: red;
  font-weight: bold;
`;

export const Input = styled.input`
  margin: 10px;
  border-radius: 12px;
  /* color: #b2b2b2; */
  border-color: #b2b2b2;
  padding: 10px;
  /* &:focus-visible{
            border-color: ${(p) => p.theme.colors.accentColor} !important;
        } */
  &.error {
    border: 2px solid red;
  }
`;
export const ModalShopTypeItem = styled.li`
  display: flex;
  margin: 8px;
`;

export const ModalShopTypeText = styled.p`
  margin-left: 8px;
`;

export const CheckBox = styled.input`
  width: 20px;
`;

export const ChekBoxThumb = styled.div`
  display: grid;
  justify-items: start;
`;
export const FormikChekbox = styled(Field)`
  width: 18px;
  height: 18px;
  margin: 8px;
`;

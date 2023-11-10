import React, { useState } from "react";

import {
  FormikInput,
  InputField,
  LableInput,
  LoginModalText,
  WrapInput,
  WrapPhone,
} from "./login.styled";

// import { FormikInput, InputBlock, LoginModalText } from "./login.styled";

import {
  ButtonWrapper,
  FormLavelBloks,
} from "../../../pages/SaleProgramPage/SaleProgramPageStyled";
import Button from "../../../shared/components/Button/Button";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operation";
import { toast } from "react-toastify";
import styled from "styled-components";
import LoginForm from "./LoginForm";

const Message = styled(ErrorMessage)`
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

const RegisterForm = () => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    number: "",
    city: "місто",
    link: "myshop.com",
    onlineShop: false,
    offlineShop: false,
    socialMedia: false,
    optUser: false,
  };
  const [IsRegistered, setIsRegistered] = useState(false);

  const dispatch = useDispatch();

  const registerDispatch = (data) => {
    dispatch(register(data))
      .then((response) => {
        if (response.payload === "Server error") {
          toast.error("Користувач з цим номером телефону вже зареєстрований!");
        }
        if (response.type === "auth/register/fulfilled") {
          setIsRegistered(true);
        } else {
          setIsRegistered(false);
        }
      })
      .catch((error) => {
        setIsRegistered(false);
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Не валідна адреса пошти")
      .required("Введіть адресу електронної пошти "),
    password: Yup.string()
      .min(6, "Пароль має містити не менше 6 символів")
      .required("Введіть пароль"),
    firstName: Yup.string()
      .min(2, "Ім'я має бути не менше 2х букв")
      .required("Введіть ваше ім'я"),
    lastName: Yup.string()
      .min(2, "Прізвище має бути не менше 2х букв")
      .required("Введіть ваше прізвище"),
    number: Yup.number().required("Введіть ваш номер телефону"),
    link: Yup.string(),
    city: Yup.string(),
    onlineShop: Yup.boolean(),
    offlineShop: Yup.boolean(),
    socialMedia: Yup.boolean(),
    optUser: Yup.boolean(),
  });

  const onSubmit = (values) => {
    registerDispatch(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <Form>
          {IsRegistered ? (
            <>
              <p>Ви успішно зареєструвалися, авторизуйтеся</p>
            </>
          ) : (
            <div>
              {/* <FormLavelBloks> */}
              <WrapInput>
                <div>
                  <LableInput htmlFor="email">Ваш Email</LableInput>
                  <InputField type="email" name="email" />
                  <Message name="email" component="div" />
                </div>
                <div>
                  <LableInput htmlFor="password">Пароль</LableInput>
                  <InputField type="password" name="password" />
                  <Message name="password" component="div" />
                </div>
              </WrapInput>
              {/* </FormLavelBloks> */}
              {/* <FormLavelBloks> */}
              <WrapInput>
                <div>
                  <LableInput htmlFor="firstName">Ім'я</LableInput>
                  <InputField type="text" name="firstName" />
                  <Message name="firstName" component="div" />
                </div>
                <div>
                  <LableInput htmlFor="lastName">Прізвище</LableInput>
                  <InputField type="text" name="lastName" />
                  <Message name="lastName" component="div" />
                </div>
              </WrapInput>
              {/* </FormLavelBloks> */}
              {/* <WrapPhone> */}
              <LableInput htmlFor="number">Телефон</LableInput>
              <InputField type="tel" name="number" />
              <Message name="number" component="div" />
              {/* </WrapPhone> */}

              <ButtonWrapper>
                <Button text={"Зареєструватись"} type="submit" />
              </ButtonWrapper>
            </div>
          )}
        </Form>
      )}
      {/* <Form>
        {IsRegistered ? (
          "Ви успішно зареєструвалися як оптовий клієнт"
        ) : (
          <>
            <FormLavelBloks>
              <InputBlock>
                <LoginModalText htmlFor="email">Ваш Email</LoginModalText>
                <FormikInput type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </InputBlock>
              <InputBlock>
                <LoginModalText htmlFor="password">Пароль</LoginModalText>
                <FormikInput type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </InputBlock>
            </FormLavelBloks>
            <FormLavelBloks>
              <InputBlock>
                <LoginModalText htmlFor="firstName">Ім'я</LoginModalText>
                <FormikInput type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </InputBlock>
              <InputBlock>
                <LoginModalText htmlFor="lastName">Прізвище</LoginModalText>
                <FormikInput type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </InputBlock>
              </FormLavelBloks>
            <FormLavelBloks>  
            <InputBlock>
              <LoginModalText htmlFor="number">Телефон</LoginModalText>
              <FormikInput type="tel" name="number" />
              <ErrorMessage name="number" component="div" />
            </InputBlock>
              </FormLavelBloks>
            <FormLavelBloks>
              <Button text={"Зареєструватись"} type="submit" />
            </FormLavelBloks>
          </>
        )}
      </Form> */}
    </Formik>
  );
};

export default RegisterForm;

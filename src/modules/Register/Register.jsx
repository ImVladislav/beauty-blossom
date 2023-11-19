import React, { useState } from "react";

import {
  RegisterWrapper,
  InputField,
  LableInput,
  Wrap,
  WrapInput,
  ButtonWrapper,
  Message,
  FormLavelBloks,
  ChekBoxThumb,
  FormikChekbox,
  LoginModalText,
  LableChekbox,
  Title,
} from "./Register.styled";

import Button from "../../shared/components/Button/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operation";

import Login from "../Login/Login";

const Register = ({ onRegisterSuccess, opt }) => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    number: "",
    city: "misto",
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
        if (response.type === "auth/register/fulfilled") {
          onRegisterSuccess();
          setIsRegistered(true);
        } else {
          setIsRegistered(false);
        }
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
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
              {opt ? (
                <p style={{ margin: "15px", textAlign: "center" }}>
                  Ви успішно зареєструвалися як оптовий клієнт, авторизуйтеся
                </p>
              ) : (
                <p style={{ margin: "15px", textAlign: "center" }}>
                  Ви успішно зареєструвалися, авторизуйтеся
                </p>
              )}

              <Login />
            </>
          ) : (
            <RegisterWrapper>
              {opt && <Title>Реєстрація</Title>}
              <div>
                <Wrap>
                  <WrapInput>
                    <LableInput htmlFor="email">Ваш Email</LableInput>
                    <InputField type="email" name="email" />
                    <Message name="email" component="div" />
                  </WrapInput>
                  <WrapInput>
                    <LableInput htmlFor="password">Пароль</LableInput>
                    <InputField type="password" name="password" />
                    <Message name="password" component="div" />
                  </WrapInput>
                </Wrap>

                <Wrap>
                  <WrapInput>
                    <LableInput htmlFor="firstName">Ім'я</LableInput>
                    <InputField type="text" name="firstName" />
                    <Message name="firstName" component="div" />
                  </WrapInput>
                  <WrapInput>
                    <LableInput htmlFor="lastName">Прізвище</LableInput>
                    <InputField type="text" name="lastName" />
                    <Message name="lastName" component="div" />
                  </WrapInput>
                </Wrap>
                {/* <WrapInput> */}
                <Wrap>
                  <WrapInput>
                    <LableInput htmlFor="number">Телефон</LableInput>
                    <InputField type="tel" name="number" />
                    <Message name="number" component="div" />
                  </WrapInput>
                  {/* </WrapInput> */}
                  {opt && (
                    <WrapInput>
                      <LableInput htmlFor="city">Місто</LableInput>
                      <InputField type="text" name="city" placeholder="місто" />
                      <Message name="city" component="div" />
                    </WrapInput>
                  )}
                </Wrap>
                {opt && (
                  <FormLavelBloks>
                    <ChekBoxThumb>
                      <LableChekbox>
                        <FormikChekbox type="checkbox" name="onlineShop" />
                        Онлайн магазин
                      </LableChekbox>
                      <LableChekbox>
                        <FormikChekbox type="checkbox" name="offlineShop" />
                        Офлайн магазин
                      </LableChekbox>
                      <LableChekbox>
                        <FormikChekbox type="checkbox" name="socialMedia" />
                        Сторінка у соц. Мережах
                      </LableChekbox>
                    </ChekBoxThumb>
                    <div>
                      <LoginModalText htmlFor="link">
                        Посилання на сайт
                      </LoginModalText>
                      <InputField
                        id="link"
                        type="text"
                        name="link"
                        placeholder="myshop.com"
                      />
                      <Message name="link" component="div" />
                    </div>
                  </FormLavelBloks>
                )}
              </div>
              <ButtonWrapper>
                <Button text={"Зареєструватись"} type="submit" />
              </ButtonWrapper>
            </RegisterWrapper>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Register;

import React, { useState } from "react";

import {
  InputField,
  LableInput,
  Wrap,
  WrapInput,
  ButtonWrapper,
  LoginWrapper,
  Message,
} from "./Login.styled";

import Button from "../../shared/components/Button/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operation";
import { toast } from "react-toastify";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [IsLogined, setIsLogined] = useState(false);

  const dispatch = useDispatch();

  const loginDispatch = (data) => {
    dispatch(login(data))
      .then((response) => {
        if (response.payload === "Email or password invalid") {
          toast.error("Логін або пароль ваказано не вірно!");
        }

        if (response.type === "auth/login/fulfilled") {
          setIsLogined(true);
        } else {
          setIsLogined(false);
        }
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
        setIsLogined(false);
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Не валідна адреса пошти")
      .required("Введіть адресу електронної пошти "),
    password: Yup.string()
      .min(6, "Пароль має містити не менше 6 символів")
      .required("Введіть пароль"),
  });

  const onSubmit = (values) => {
    loginDispatch(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {IsLogined ? (
          <p>Ви успішно авторизувались</p>
        ) : (
          <LoginWrapper>
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

            <ButtonWrapper>
              <Button text={"Авторизуватись"} type="submit" />
            </ButtonWrapper>
          </LoginWrapper>
        )}
      </Form>
    </Formik>
  );
};

export default Login;

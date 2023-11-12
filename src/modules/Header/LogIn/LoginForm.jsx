import React, { useState } from "react";

import {
  FormikInputOrders,
  InputField,
  LableInput,
  LableInputOreders,
  LoginBlock,
  WrapInput,
  WrapInputOrders,
} from "./login.styled";

// import { FormikInput, InputBlock, InputErrors, LoginModalText } from "./login.styled";

import {
  ButtonWrapper,
} from "../../../pages/SaleProgramPage/SaleProgramPageStyled";

import Button from "../../../shared/components/Button/Button";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/operation";
import { toast } from "react-toastify";
import styled from "styled-components";

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

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [IsLogined, setIsLogined] = useState(false);

  const dispatch = useDispatch();

  const registerDispatch = (data) => {
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
    registerDispatch(values);
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
          <>
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

            <ButtonWrapper>
              <Button text={"Авторизуватись"} type="submit" />
            </ButtonWrapper>
          </>
        )}
      </Form>
    </Formik>
  );
};




export const LoginFormOrders = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [IsLogined, setIsLogined] = useState(false);

  const dispatch = useDispatch();

  const registerDispatch = (data) => {
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
    registerDispatch(values);
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
          <LoginBlock>
            <WrapInputOrders>
              <div>
                <LableInputOreders htmlFor="email">Ваш Email</LableInputOreders>
                <FormikInputOrders type="email" name="email" />
                <Message name="email" component="div" />
              </div>
              <div>
                <LableInputOreders htmlFor="password">Пароль</LableInputOreders>
                <FormikInputOrders type="password" name="password" />
                <Message name="password" component="div" />
              </div>
            </WrapInputOrders>

            <ButtonWrapper>
              <Button text={"Авторизуватись"} type="submit" />
            </ButtonWrapper>
          </LoginBlock>
        )}
      </Form>
    </Formik>
  );
};
export default LoginForm;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import Button from "../../shared/components/Button/Button";
import { Loader } from "../../shared/components/Loader/Loader";

import { login } from "../../redux/auth/operation";

import {
  InputField,
  LableInput,
  Wrap,
  WrapInput,
  ButtonWrapper,
  LoginWrapper,
  Message,
  ModalLoader,
  LinkStyle,
} from "./Login.styled";
import axios from "axios";
import { setCart } from "../../redux/cart/slice";

const Login = ({ setShowModal }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [IsLogined, setIsLogined] = useState(false);
  const [isLoading, setIsLoading] = useState(false); //Loder
  const dispatch = useDispatch();

  const fetchUserCart = async () => {
    try {
      const response = await axios.get(`/basket`);
      const data = response.data;
      dispatch(setCart(data));
    } catch {
      console.error("Лишенько не працює");
    }
  };

  useEffect(() => {
    if (IsLogined) {
      fetchUserCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IsLogined]);

  const loginDispatch = (data) => {
    setIsLoading(true);
    dispatch(login(data))
      .then((response) => {
        if (response.payload === "Email or password invalid") {
          toast.error("Логін або пароль ваказано не вірно!");
        }

        if (response.type === "auth/login/fulfilled") {
          setIsLogined(true);
          setIsLoading(false);
        } else {
          setIsLogined(false);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Сталася помилка:", error);
        setIsLogined(false);
        setIsLoading(false);
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

  if (isLoading) {
    return (
      <ModalLoader>
        <Loader pageHeight="20vh" />
      </ModalLoader>
    );
  }

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

            <LinkStyle to="/forgotten" onClick={() => setShowModal(false)}>
              Забули пароль?
            </LinkStyle>
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

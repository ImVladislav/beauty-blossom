import React, { useState } from "react";
import { FormikInput, LoginModalText } from "./login.styled";
import { FormLavelBloks } from "../../../pages/SaleProgramPage/SaleProgramPageStyled";
import Button from "../../../shared/components/Button/Button";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operation";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    number: null,
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
      .min(6, "Пароль має мітити не менше 6 символів")
      .required("Введіть пароль"),
    firstName: Yup.string()
      .min(2, "Імя має бути не менше 2х букв")
      .required("Ведіть ваше імя"),
    lastName: Yup.string()
      .min(2, "Прізвище має бути не менше 2х букв")
      .required("Ведыть ваше прізвище"),
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
      <Form>
        {IsRegistered ? (
          "Ви успішно зареєструвалися як оптовий клієнт"
        ) : (
          <>
            <FormLavelBloks>
              <div>
                <LoginModalText htmlFor="email">Ваш Email</LoginModalText>
                <FormikInput type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <LoginModalText htmlFor="password">Пароль</LoginModalText>
                <FormikInput type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
            </FormLavelBloks>
            <FormLavelBloks>
              <div>
                <LoginModalText htmlFor="firstName">Ім'я</LoginModalText>
                <FormikInput type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div>
                <LoginModalText htmlFor="lastName">Прізвище</LoginModalText>
                <FormikInput type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </div>
            </FormLavelBloks>
            <div>
              <LoginModalText htmlFor="number">Телефон</LoginModalText>
              <FormikInput type="tel" name="number" />
              <ErrorMessage name="number" component="div" />
            </div>

            <FormLavelBloks>
              <Button text={"Зареєструватись"} type="submit" />
            </FormLavelBloks>
          </>
        )}
      </Form>
    </Formik>
  );
};

export default RegisterForm;

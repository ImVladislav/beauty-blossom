import React, { useState } from "react";
import { FormikInput, LoginModalText } from "./login.styled";
import { FormLavelBloks } from "../../../pages/SaleProgramPage/SaleProgramPageStyled";
import Button from "../../../shared/components/Button/Button";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/operation";
import { toast } from "react-toastify";

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
        console.log(response.payload);
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
      .min(6, "Пароль має мітити не менше 6 символів")
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
            <FormLavelBloks>
              <div>
                <LoginModalText htmlFor="email">Ваш Email</LoginModalText>
                <FormikInput type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                ////////
              </div>
              <div>
                <LoginModalText htmlFor="password">Пароль</LoginModalText>
                <FormikInput type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                ////////
              </div>
            </FormLavelBloks>

            <FormLavelBloks>
              <Button text={"Авторизуватись"} type="submit" />
            </FormLavelBloks>
          </>
        )}
      </Form>
    </Formik>
  );
};
export default LoginForm;

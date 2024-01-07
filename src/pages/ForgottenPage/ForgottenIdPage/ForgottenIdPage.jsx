import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import Button from "../../../shared/components/Button/Button";

import {
  Container,
  Title,
  Text,
  WrapInput,
  Lable,
  Input,
} from "./ForgottenIdPage.styled";

const ForgottenIdPage = () => {
  const { forgotten } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password.length < 6) {
        toast.info("Пароль повинен бути не менше 6 символів");

        return;
      }
      console.log(forgotten);
      console.log(password);
      const response = await axios.post("/auth/restorePasswordStep2", {
        _id: forgotten,
        newPassword: password,
      });

      if (response.status === 200) {
        toast.info("Пароль змінено");
        navigate(`/`);
      }
    } catch (error) {
      toast.error("Помилка під час зміни пароля", error);
    }
  };

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Container>
        <Title>Відновлення пароля</Title>
        <Text>
          Введіть новий пароль для вашого облікового запису. Пароль повинен
          містити не менше 6 символів.
        </Text>
        <form onSubmit={handleFormSubmit}>
          <WrapInput>
            <Lable htmlFor="password">Ваш пароль</Lable>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Ваш пароль"
              onChange={handleInputChange}
              value={password}
            />
          </WrapInput>
          <div>
            <Button text={"Змінити пароль"} type="submit" />
          </div>
        </form>
      </Container>
    </>
  );
};

export default ForgottenIdPage;

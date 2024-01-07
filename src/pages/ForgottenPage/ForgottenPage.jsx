import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Button from "../../shared/components/Button/Button";

import {
  Container,
  Title,
  Text,
  WrapInput,
  Lable,
  Input,
} from "./ForgottenPage.styled";

const ForgottenPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const isValidEmail = validateEmail(email);
      if (!isValidEmail) {
        toast.error("Невірний формат електронної пошти");
        return;
      }
      const response = await axios.post("/auth/restorePassword", {
        email,
      });

      if (response.status === 200) {
        toast.info("Вам надіслана інструкція на електронну пошту");
        navigate(`/`);
        return;
      }
    } catch (error) {
      toast.error(`Користувач не зареєстрований!`, error);
    }
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      <Container>
        <Title>Відновлення пароля</Title>
        <Text>
          Введіть адресу електронної пошти вашого облікового запису. Натисніть
          кнопку "Продовжити", на вашу електронну пошту надійде інструкція для
          відновлення пароля.
        </Text>
        <form onSubmit={handleFormSubmit}>
          <WrapInput>
            <Lable htmlFor="email">Ваш E-mail</Lable>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Ваш E-mail"
              onChange={handleInputChange}
              value={email}
            />
          </WrapInput>
          <div>
            <Button text={"Продовжити"} type="submit" />
          </div>
        </form>
      </Container>
    </>
  );
};

export default ForgottenPage;

import Button from "../../shared/components/Button/Button";
import {
  Container,
  Title,
  Text,
  WrapInput,
  LableInput,
  InputField,
} from "./ForgottenPage.styled";

const ForgottenPage = () => {
  return (
    <>
      <Container>
        <Title>Відновлення пароля</Title>
        <Text>
          Введіть адресу електронної пошти вашого облікового запису. Натисніть
          кнопку Продовжити для отримання пароля на електронну пошту.
        </Text>
        <WrapInput>
          <LableInput htmlFor="email">Ваш E-mail</LableInput>
          <InputField type="email" name="email" placeholder="Ваш E-mail" />
        </WrapInput>
        <div>
          <Button opt text={"Продовжити"} type="submit" />
        </div>
      </Container>
    </>
  );
};

export default ForgottenPage;

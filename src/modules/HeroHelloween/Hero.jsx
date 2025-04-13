import five from "../../images/helloween/five.png";
import ten from "../../images/helloween/ten.png";
import fifteen from "../../images/helloween/fifteen.png";
import twenty from "../../images/helloween/twenty.png";
import cart from "../../images/helloween/cart.png";

import {
  BackgroundColor,
  ContainerBanner,
  ImgContainer,
  TextContainer,
  Title,
  Subtitle,
  StyleLink,
  Text,
  TextWrap,
  CartImg,
  FifteenImg,
  FiveImg,
  TenImg,
  Wrapper,
  TwentyImg,
} from "./Hero.styled.js";

const Hero = () => {
  return (
    <>
      <BackgroundColor>
        <ContainerBanner>
          <Wrapper>
            <ImgContainer>
              <FifteenImg src={fifteen} alt="image fifteen" />
              <FiveImg src={five} alt="image five" />
              <TenImg src={ten} alt="image ten" />
              <CartImg src={cart} alt="image cart" width={160} />
            </ImgContainer>
            <TextContainer>
              <Title>Лови знижки!</Title>
              <TextWrap>
                <Subtitle>Сезонний розпродаж до - 20%</Subtitle>
                <StyleLink to="/aktsii">Товари зі знижкою тут!</StyleLink>
                <Text>Ціни на товари вказані вже з урахуванням знижки*</Text>
                <Text>Акція діє до 30.11.2024</Text>
              </TextWrap>
            </TextContainer>
            <TwentyImg src={twenty} alt="image twenty" />
          </Wrapper>
        </ContainerBanner>
      </BackgroundColor>
    </>
  );
};

export default Hero;

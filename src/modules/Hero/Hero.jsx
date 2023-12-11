import React from "react";
import mp from "../../images/BannerProduct.png";
import banner from "../../images/Banner.jpg";
import {
  WrapBackground,
  Background,
  HeroWrap,
  Product,
  Wraper,
  TextWrap,
  Title,
  TextSecond,
  LinkBtn,
  TextСonditions,
  Banner,
} from "./Hero.styled.js";
const Hero = () => {
  return (
    <>
      <WrapBackground>
        <Background>
          <Banner src={banner} alt="bannerOmh" />
          {/* <div> */}
          <HeroWrap>
            {/* <div> */}
            {/* </div> */}
            <Wraper>
              <TextWrap>
                <Title>Pyunkang Yul</Title>
                {/* <Text>Молодість, краса та розкіш</Text> */}
                <TextSecond>
                  Чиста та здорова шкіра завдяки натуральним компонентам
                </TextSecond>
                <LinkBtn to="/wholesaleProgram">*Оптова Програма</LinkBtn>
              </TextWrap>
              <div>
                <TextСonditions>*тисни, щоб дізнатись умови</TextСonditions>
              </div>
            </Wraper>
            <Product src={mp} alt="productBanner" />
          </HeroWrap>

          {/* </div> */}
        </Background>
      </WrapBackground>
    </>
  );
};

export default Hero;

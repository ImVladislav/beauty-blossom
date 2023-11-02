import React from "react";
import mp from "../../images/mp.png";
import {
  WrapBackground,
  Background,
  Wrap,
  ImageWrap,
  Product,
  TextWrap,
  Title,
  Text,
  TextSecond,
  LinkBtn,
  TextСonditions,
  WrapСonditions,
  Wraper,
} from "./Hero.styled.js";
const Hero = () => {
  return (
    <>
      <WrapBackground>
        <Background>
          <WrapСonditions>
            <Wrap>
              <ImageWrap>
                <Product src={mp} alt="banner" />
              </ImageWrap>
              <Wraper>
                <TextWrap>
                  <Title>MEDI-PEEL</Title>
                  <Text>Молодість, краса та розкіш</Text>
                  <TextSecond>
                    Нова лінійка бренду <br />з комбучею та гіалуроновою
                    кислотою
                  </TextSecond>
                  <LinkBtn to="/wholesaleProgram">*Оптова Програма</LinkBtn>
                </TextWrap>
                <TextСonditions>*тисни, щоб дізнатись умови</TextСonditions>
              </Wraper>
            </Wrap>
          </WrapСonditions>
        </Background>
      </WrapBackground>
    </>
  );
};

export default Hero;

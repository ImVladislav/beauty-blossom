import React from "react";
import mp from "../../images/mp.png";
import {
  WrapBackground,
  Background,
  HeroWrap,
  Product,
  Wraper,
  TextWrap,
  Title,
  Text,
  TextSecond,
  LinkBtn,
  TextСonditions,
} from "./Hero.styled.js";
const Hero = () => {
  return (
    <>
      <WrapBackground>
        <Background>
          <div>
            <HeroWrap>
              <div>
                <Product src={mp} alt="banner" />
              </div>
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
                <div>
                  <TextСonditions>*тисни, щоб дізнатись умови</TextСonditions>
                </div>
              </Wraper>
            </HeroWrap>
          </div>
        </Background>
      </WrapBackground>
    </>
  );
};

export default Hero;

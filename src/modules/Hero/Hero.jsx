import React from "react";

import christmas from "../../images/сhristmas-big.png";
import products from "../../images/products.png";
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
          <Banner src={christmas} alt="bannerOmh" />
          <HeroWrap>
            <Wraper>
              <TextWrap>
                <Title>Новорічні знижки до -20%</Title>
                <TextSecond>на бренди Enough та Daeng Gi Meo Ri</TextSecond>
                <div style={{ display: "flex", width: "100%" }}>
                  <LinkBtn to="/wholesaleProgram">*Оптова Програма</LinkBtn>
                </div>
              </TextWrap>
              <div>
                <TextСonditions>*тисни, щоб дізнатись умови</TextСonditions>
              </div>
            </Wraper>
            <Product src={products} alt="productBanner" />
          </HeroWrap>
        </Background>
      </WrapBackground>
    </>
  );
};

export default Hero;

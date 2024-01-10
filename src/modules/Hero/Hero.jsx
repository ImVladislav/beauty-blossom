import React from "react";
import { useMedia } from "../../hooks/useMedia.js";

import baner from "../../images/masil-desktop.png";
import products from "../../images/masil-desktop-groupe.png";
import banerMobile from "../../images/masil-mobile.png";
import productsMobile from "../../images/masil-mobile-groupe_3.png";

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
  TextConditions,
  Banner,
  WraperLink,
} from "./Hero.styled.js";
const Hero = () => {
  const { isMobileScreen } = useMedia();
  return (
    <>
      <WrapBackground>
        <Background>
          {isMobileScreen ? (
            <Banner src={banerMobile} alt="bannerOmh" />
          ) : (
            <Banner src={baner} alt="bannerOmh" />
          )}

          <HeroWrap>
            <Wraper>
              <TextWrap>
                <Title>MASIL</Title>
                <TextSecond>
                  Найкращий догляд для твого волосся вдома
                </TextSecond>
                <WraperLink>
                  <LinkBtn to="/wholesaleProgram">*Оптова Програма</LinkBtn>
                </WraperLink>
                {isMobileScreen && (
                  <TextConditions>*тисни, щоб дізнатись умови</TextConditions>
                )}
              </TextWrap>
              <div>
                {!isMobileScreen && (
                  <TextConditions>*тисни, щоб дізнатись умови</TextConditions>
                )}
              </div>
            </Wraper>
            {isMobileScreen ? (
              <Product src={productsMobile} alt="productBanner" />
            ) : (
              <Product src={products} alt="productBanner" />
            )}
          </HeroWrap>
        </Background>
      </WrapBackground>
    </>
  );
};

export default Hero;

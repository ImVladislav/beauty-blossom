import React from "react";
import { useDispatch } from "react-redux";

import { setfilter } from "../../redux/filter/slice.js";

import banerMob from "../../images/banerHero/banerSummerMob.png";
import baner from "../../images/banerHero/banerSummer.png";
import productsMobile from "../../images/banerHero/productMob.png";
import products from "../../images/banerHero/product.png";

import {
  WrapBanner,
  Product,
  Banner,
  ImageContainer,
  // Container,
  TitleContainer,
  Title,
  Desc,
  LinkBtn,
} from "./HeroBaner.styled.js";
import { useMedia } from "../../hooks/useMedia.js";

const HeroBaner = () => {
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.currentTarget.name;

    dispatch(setfilter(name));
  };
  return (
    <WrapBanner>
      <Banner src={isMobileScreen ? banerMob : baner} alt="banner" />

      <ImageContainer>
        <Product
          src={isMobileScreen ? productsMobile : products}
          alt="productBanner"
        />
      </ImageContainer>
      {/* <Container> */}
      <TitleContainer>
        <Title>Torriden</Title>
        <Desc>
          Потужне та глибоке зволоження
          <br /> з першого нанесення
        </Desc>
        <LinkBtn to="/brands/torriden" name="torriden" onClick={handleClick}>
          ОЗНАЙОМИТИСЬ
        </LinkBtn>
      </TitleContainer>
      {/* </Container> */}
    </WrapBanner>
  );
};

export default HeroBaner;

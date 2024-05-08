import React from "react";
import { useDispatch } from "react-redux";

import { setfilter } from "../../redux/filter/slice";
import { useMedia } from "../../hooks/useMedia";

import lador from "../../images/bannersBottom/Lador.png";
import productsFirstLeft from "../../images/bannersBottom/ProductsBahaLeft.png";
import productsFirstRight from "../../images/bannersBottom/ProductsBahaRight.png";
import productsSecondLeft from "../../images/bannersBottom/ProductsLadorLeft.png";
import productsSecondRight from "../../images/bannersBottom/ProductsLadorRight.png";

import {
  LinkLeft,
  LinkRight,
  ProductsFirstLeft,
  ProductsSecondLeft,
  ProductsFirstRight,
  Container,
  BackgroundFirst,
  BackgroundSecond,
  ProductsSecondRight,
  Lador,
  TitleFirst,
  TitleContainer,
  TitleSecond,
} from "./Baners.styled";

const Baners = () => {
  const { screenType } = useMedia();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.currentTarget.name;
    dispatch(setfilter(name));
  };

  return (
    <>
      {/* <Wrap>
        <BanersWrap>
          <ProductRetinol src={retinol} alt="retinol" />
          <LinkRetinol
            to="/brands/medi-peel"
            name="medi-peel"
            onClick={handleClick}
          >
            Дізнатись більше
          </LinkRetinol>
        </BanersWrap>
        {(screenType === "lg" || screenType === "desktop") && (
          <BanersWrap>
            <ProductPurito src={purito} alt="purito" />

            <LinkPurito to="/brands/purito" name="purito" onClick={handleClick}>
              Дізнатись більше
            </LinkPurito>
          </BanersWrap>
        )}
      </Wrap> */}
      {/* ///////////////////// */}
      <Container>
        <BackgroundFirst>
          <ProductsFirstLeft src={productsFirstLeft} alt="retinol" />
          <div>
            <TitleContainer>
              <TitleFirst>Cos De</TitleFirst>
              <TitleSecond>BAHA</TitleSecond>
            </TitleContainer>
            <LinkLeft
              to="/brands/cos de baha"
              name="cos de baha"
              onClick={handleClick}
            >
              Придбати
            </LinkLeft>
          </div>
          <ProductsFirstRight src={productsFirstRight} alt="retinol" />
        </BackgroundFirst>

        {(screenType === "lg" || screenType === "desktop") && (
          <BackgroundSecond>
            <ProductsSecondLeft src={productsSecondLeft} alt="purito" />
            <Lador src={lador} alt="lador" />

            <LinkRight to="/brands/lador" name="lador" onClick={handleClick}>
              Придбати
            </LinkRight>
            <ProductsSecondRight src={productsSecondRight} alt="purito" />
          </BackgroundSecond>
        )}
      </Container>
    </>
  );
};

export default Baners;

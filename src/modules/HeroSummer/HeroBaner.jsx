import React from "react";
import { useDispatch } from "react-redux";

import { setfilter } from "../../redux/filter/slice.js";

import baner from "../../images/banerHero/banerSummerDesk.png";
import products from "../../images/banerHero/productDesk.png";

import {
  WrapBanner,
  Product,
  Title,
  LinkBtn,
  Banner,
  TitleWrap,
  Subtitle,
  TitleInner,
  ImageContainer,
  List,
  LinkWrap,
  Container,
} from "./HeroBaner.styled.js";

const HeroBaner = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.currentTarget.name;

    dispatch(setfilter(name));
  };
  return (
    <>
      <WrapBanner>
        <Banner src={baner} alt="banner" />

        <Container>
          <TitleWrap>
            <TitleInner>
              <Title>обирай свій яkісний SPF kрем </Title>
              <Subtitle>надійний заxист для всієї сім’ї</Subtitle>
            </TitleInner>
          </TitleWrap>
          <ImageContainer>
            <div>
              <LinkWrap>
                <LinkBtn
                  to="/katehoriji/sunProtection"
                  name="захист від сонця"
                  onClick={handleClick}
                >
                  Придбати
                </LinkBtn>
              </LinkWrap>
              <List>
                <li>
                  <p>надійний захист</p>
                </li>
                <li>
                  <p>зручний формат</p>
                </li>
                <li>
                  <p>вигідна ціна</p>
                </li>
              </List>
            </div>

            <Product src={products} alt="productBanner" />
          </ImageContainer>
        </Container>
      </WrapBanner>
    </>
  );
};

export default HeroBaner;

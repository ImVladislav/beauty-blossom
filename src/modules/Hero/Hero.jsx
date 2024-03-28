import React from "react";
import { useMedia } from "../../hooks/useMedia.js";

import { useDispatch } from "react-redux";
import { setfilter } from "../../redux/filter/slice.js";

// import baner from "../../images/masil-desktop.png";
// import products from "../../images/masil-desktop-groupe.png";
// import banerMobile from "../../images/masil-mobile.png";
// import productsMobile from "../../images/masil-mobile-groupe_3.png";

import Sprite from "../../images/sprite.svg";

import products from "../../images/purito-new.png";
import productsMobile from "../../images/purito-new-mobile.png";
import {
  // WrapBackground,
  // Background,
  // HeroWrap,
  // Product,
  // Wraper,
  // TextWrap,
  // Title,
  // TextSecond,
  // LinkBtn,
  // TextConditions,
  // Banner,
  // WraperLink,
  BackgroundColor,
  ImageBanner,
  ContainerBanner,
  TitleBanner,
  TextBanner,
  SloganBanner,
  InnerContentBanner,
  ListBanner,
  ItemBanner,
  LinkStyledBanner,
} from "./Hero.styled.js";

const Hero = () => {
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.currentTarget.name;
    dispatch(setfilter(name));
  };
  return (
    <>
      {/* <WrapBackground>
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
      </WrapBackground> */}
      <BackgroundColor>
        <ContainerBanner>
          <ImageBanner
            src={isMobileScreen ? productsMobile : products}
            alt="purito"
          />
          <InnerContentBanner>
            <TitleBanner>Purito</TitleBanner>
            <SloganBanner>
              Tурбота про здоров'я {isMobileScreen && <br />}твоєї шкіри
            </SloganBanner>
            <LinkStyledBanner
              to="/brands/purito"
              name="purito"
              onClick={handleClick}
            >
              Придбати
              <svg>
                <use href={`${Sprite}#icon-Vector-1`} />
              </svg>
            </LinkStyledBanner>
            <ListBanner>
              {!isMobileScreen && (
                <ItemBanner>
                  <svg>
                    <use href={`${Sprite}#icon-icon-4`} />
                  </svg>
                  <TextBanner>Сертифікований продукт</TextBanner>
                </ItemBanner>
              )}
              <ItemBanner>
                <svg>
                  <use href={`${Sprite}#icon-icon-1`} />
                </svg>
                <TextBanner>Eco-Friendly пакування</TextBanner>
              </ItemBanner>
              <ItemBanner>
                <svg>
                  <use href={`${Sprite}#icon-icon-2`} />
                </svg>
                <TextBanner>100% веганська формула</TextBanner>
              </ItemBanner>
              <ItemBanner>
                <svg>
                  <use href={`${Sprite}#icon-icon-3`} />
                </svg>
                <TextBanner>Не тестується на тваринах</TextBanner>
              </ItemBanner>
            </ListBanner>
          </InnerContentBanner>
        </ContainerBanner>
      </BackgroundColor>
    </>
  );
};

export default Hero;

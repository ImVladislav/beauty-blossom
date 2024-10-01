import React from "react";
import { useDispatch } from "react-redux";

import { setfilter } from "../../redux/filter/slice.js";

import banerMob from "../../images/banerHero/new-mobile-banner.png";
import baner from "../../images/banerHero/desk-banner.png";
import name from "../../images/banerHero/name.svg";
import desc from "../../images/banerHero/desc.svg";
import btn from "../../images/banerHero/btn.svg";

import {
  WrapBanner,
  Banner,
  TitleContainer,
  LinkBtn,
  DescWrap,
  DescImg,
  LinkImg,
} from "./Hero.styled.js";
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

      <TitleContainer>
        <img id="name" src={name} alt="Trimay" />
        <DescWrap>
          <DescImg id="desc" src={desc} alt="Trimay" />

          <LinkBtn to="/brands/trimay" name="trimay" onClick={handleClick}>
            <LinkImg id="link" src={btn} alt="перейти до покупок" />
          </LinkBtn>
        </DescWrap>
      </TitleContainer>
    </WrapBanner>
  );
};

export default HeroBaner;

import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../images/match8/mob/bgSky.png";
import bgDesc from "../../images/match8/desctop/bgsky.png";

export const WrapBackground = styled.div`
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    height: 220px;
  }

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    height: 450px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  /* overflow: hidden; */

  background-size: contain;
`;

export const Banner = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 220px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    height: 450px;
  }
`;

export const HeroWrap = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
`;

export const Product = styled.img`
  position: relative;
  z-index: -1;
  max-width: 120%;

  left: 0;
  /* left: 10%; */
  margin-top: -25px;
  @media screen and (min-width: 500px) {
    max-width: 100%;
    margin-top: -8%;
  }
  @media screen and (min-width: 600px) {
    max-width: 85%;
    margin-top: -10%;
  }
  @media screen and (min-width: 768px) {
    max-width: 120%;

    left: 2%;
    margin-top: -20px;
  }

  @media screen and (min-width: 1000px) {
    /* max-width: 120%; */

    left: 2%;
    margin-top: -80px;
  }
  @media screen and (min-width: 1200px) {
    /* max-width: 110%; */

    left: 2%;
    margin-top: -130px;
  }
  @media screen and (min-width: 1440px) {
    /* max-width: 120%; */

    left: 2%;
    margin-top: -100px;
  }
`;

export const Wraper = styled.div`
  display: flex;
  position: absolute;

  margin-right: 5%;
  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const TextWrap = styled.div`
  position: absolute;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    right: 23%;
  }
  @media screen and (min-width: 1024px) {
    right: 21%;
  }
  @media screen and (min-width: 1440px) {
    right: 22%;
  }
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xl * 2}px;
  font-weight: ${(p) => p.theme.fontWeights.body};

  letter-spacing: 2px;
  color: #1a0471;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl * 3}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl * 2}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.sectXl * 3}px;
  }
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
`;

export const TextSecond = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};

  color: #1a0471;
  margin-bottom: 40px;
  margin-left: -2%;

  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
    font-size: ${(p) => p.theme.fontSizes.sm * 0.8}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.l * 1.1}px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xl + 2}px;
  }
`;
export const WraperLink = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  right: 18%;

  @media screen and (min-width: 768px) {
    right: 0;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    justify-content: center;
  }
`;
export const LinkBtn = styled(Link)`
  background: transparent;
  /* z-index: 1; */
  border: 2px solid #1a0471;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: ${(p) => p.theme.fontWeights.body * 2};
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  padding: 4px 10px;
  transition: all 250ms ease-in-out;

  color: #1a0471;

  margin-bottom: 10px;

  &:hover {
    color: white;

    background: #1a0471;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 110px;

    padding: 7px 30px;
    justify-content: flex-start;
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;

    padding: 10px 30px;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.authxl}px;
  }
`;

export const TextConditions = styled.p`
  position: relative;

  font-size: ${(p) => p.theme.fontSizes.xxxs - 2}px;
  font-weight: ${(p) => p.theme.fontWeights.body};

  color: #1a0471;
  left: -25%;

  @media screen and (min-width: 768px) {
    position: absolute;
    font-size: ${(p) => p.theme.fontSizes.xxxs}px;
    text-transform: uppercase;

    top: 280px;
    left: 26%;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxs}px;

    top: 320px;
    left: 27%;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    top: 410px;
    left: 24%;
  }
`;

// =================== PURITO =========================
export const BackgroundColor = styled.div`
  /* background: linear-gradient(107deg, #b4aea6 7.78%, #e1dfda 101.96%); */
  height: 300px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  user-select: none;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 768px) {
    height: 400px;
    background-image: url(${bgDesc});
  }
  @media screen and (min-width: 1440px) {
    height: 600px;
  }
`;
export const ContainerBanner = styled.div`
  position: relative;
  display: flex;
  max-width: 1300px;
  justify-content: center;

  margin: 0 auto;
  display: flex;
  /* height: 100%; */
  align-items: center;
`;
export const ImageBanner = styled.img`
  position: absolute;
  z-index: -1;
  right: -18%;
  bottom: -5px;
  max-height: 280px;
  @media screen and (min-width: 425px) {
    right: -8%;
    bottom: -5px;
  }
  @media screen and (min-width: 600px) {
    right: 5%;
    bottom: -5px;
  }
  @media screen and (min-width: 768px) {
    right: 2%;
    bottom: -4px;
    max-height: 380px;
  }
  @media screen and (min-width: 1024px) {
    right: 10%;
    bottom: -4px;
    max-height: 380px;
  }
  @media screen and (min-width: 1440px) {
    right: 0%;
    bottom: -4px;
    max-height: 580px;
  }
`;
export const InnerContentBanner = styled.div`
  margin-left: 36px;
  margin-top: 36px;
  @media screen and (min-width: 425px) {
    /* margin-left: 50px; */
  }
  @media screen and (min-width: 500px) {
    /* margin-left: 100px; */
  }
  @media screen and (min-width: 768px) {
    /* margin-left: 100px; */
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    /* margin-left: 250px; */
  }
  @media screen and (min-width: 1440px) {
    /* margin-left: 100px; */
  }
`;

export const TitleBanner = styled.h2`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 64px;
  text-transform: uppercase;
  color: #f6f6f6;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    font-size: 100px;

    color: #e4e4e4;
  }
  @media screen and (min-width: 1440px) {
    font-size: 200px;

    color: #e4e4e4;
  }
  &:after {
    content: "Purito";
    position: absolute;
    left: 2px;
    bottom: 9px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 26px;
    text-transform: uppercase;
    color: #6b4121;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      left: 4px;
      bottom: 15px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 54px;
      left: 10px;
      bottom: 36px;
    }
  }
`;
export const SloganBanner = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #6b4121;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    text-transform: uppercase;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    font-weight: 500;
    font-size: 28px;
  }
`;
export const LinkStyledBanner = styled(Link)`
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 3.253px;
  margin-top: 20px;
  border: none;
  font-family: "Montserrat", sans-serif;
  /* font-weight: 600; */
  color: #144d74;
  color: #144d74;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border-radius: 5.204px;
  background: #fff;

  background: #fff;
  color: #6b4121;
  text-decoration: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    background: #f9ced5;
    color: #6b4121;
    & svg {
      stroke: #6b4121;
      fill: #6b4121;
    }
  }
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    padding: 16px 24px;
  }
  & svg {
    margin-left: 10px;
    width: 17px;
    height: 9px;
    stroke: #6b4121;
    stroke-width: 4px;
  }
`;

export const ListBanner = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    gap: 23px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 32px;
    margin-top: 54px;
  }
`;
export const ItemBanner = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  gap: 15px;
  @media screen and (min-width: 768px) {
    width: 74px;
  }
  & svg {
    width: 30px;
    height: 30px;
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
    @media screen and (min-width: 1440px) {
      width: 64px;
      height: 64px;
    }
  }
`;

export const TextBanner = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.5;
  color: #6b4121;
  @media screen and (min-width: 1440px) {
    font-weight: 500;
    font-size: 10px;
  }
`;

export const FlowerPinkmMob = styled.img`
  width: 182px;
  height: 156px;
  /* transform: rotate(-38.303deg); */
  flex-shrink: 0;
  position: absolute;
  top: 160px;
  left: 0px;
`;

export const Leaf = styled.img`
  width: 51px;
  /* height: 17px; */
  /* transform: rotate(-33.515deg); */
  /* flex-shrink: 0; */
  position: absolute;
  top: 85px;
  left: 219px;
`;
export const Leaf2 = styled.img`
  width: 37px;
  height: 30px;
  position: absolute;
  top: 250px;
  left: 108px;
`;
export const Leaf3 = styled.img`
  width: 37px;
  height: 30px;
  position: absolute;
  top: 93px;
  right: 10px;
`;
export const FloweryellowMob1 = styled.img`
  width: 175px;
  /* height: 30px; */
  position: absolute;
  top: 218px;
  right: 109px;
`;
export const FloweryellowMob = styled.img`
  width: 141px;
  /* height: 140px; */
  position: absolute;
  top: 90px;
  right: 0px;
`;
export const Cream1 = styled.img`
  width: 80px;
  position: absolute;
  top: 233px;
  right: 82px;
`;
export const Cream2 = styled.img`
  width: 80px;
  position: absolute;
  top: 175px;
  right: 110px;
`;
export const Cream3 = styled.img`
  position: absolute;
  width: 45px;
  top: 73px;
  right: 100px;
`;
//============================================desc==================

export const TitleImg = styled.img`
  width: 360px;
  @media screen and (min-width: 1024px) {
    width: 450px;
  }
  @media screen and (min-width: 1440px) {
    /* position: absolute; */
    width: 750px;
    margin-top: 50px;
  }
`;

export const SubTitleImg = styled.img`
  width: 220px;
  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;
export const SubSubTitleImg = styled.img`
  margin-top: 8px;
  width: 470px;
  @media screen and (min-width: 1024px) {
    width: 570px;
  }
`;

export const FloweryellowDesc = styled.img`
  position: absolute;
  width: 336px;
  top: 112px;
  left: -52px;
  @media screen and (min-width: 1024px) {
    width: 336px;
    top: 112px;
    left: -52px;
  }
  @media screen and (min-width: 1440px) {
    width: 440px;
    top: 190px;
    left: -100px;
  }
`;
export const FloweryellowDesc2 = styled.img`
  position: absolute;
  width: 304px;
  top: 236px;
  left: 10px;
  @media screen and (min-width: 1024px) {
    position: absolute;
    width: 304px;
    top: 236px;
    left: 10px;
  }
  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 394px;
    top: 382px;
    left: 0px;
  }
`;

export const Leafdesc1 = styled.img`
  position: absolute;
  width: 100px;
  top: 20px;
  left: 35px;
  @media screen and (min-width: 1440px) {
    width: 158px;
    top: 184px;
    right: -52px;
  }
`;
export const Leafdesc2 = styled.img`
  position: absolute;
  width: 61px;
  top: 60px;
  right: 156px;
  @media screen and (min-width: 1024px) {
    right: 200px;
  }
  @media screen and (min-width: 1240px) {
    right: 300px;
  }
  @media screen and (min-width: 1440px) {
    right: 200px;
    top: 180px;
  }
`;
export const Leafdesc3 = styled.img`
  position: absolute;
  width: 61px;
  top: 60px;
  left: 156px;
  @media screen and (min-width: 1024px) {
    left: 200px;
  }
  @media screen and (min-width: 1240px) {
    left: 300px;
  }
  @media screen and (min-width: 1440px) {
    left: 200px;
    top: 180px;
  }
`;
export const Leafdesc4 = styled.img`
  position: absolute;
  width: 58px;
  top: 345px;
  left: 347px;
`;
export const Leafdesc5 = styled.img`
  position: absolute;
  width: 57px;
  top: 329px;
  right: 167px;
  @media screen and (min-width: 1440px) {
    width: 77px;
    top: 494px;
    right: 277px;
  }
`;
export const Leafdesc6 = styled.img`
  position: absolute;
  width: 57px;
  top: 359px;
  right: 167px;
  @media screen and (min-width: 1440px) {
    width: 72px;
    top: 554px;
    right: 277px;
  }
`;

export const Leafdesc7 = styled.img`
  position: absolute;
  width: 77px;
  top: 153px;
  right: 12px;
  transform: rotate(346deg);
  @media screen and (min-width: 1440px) {
    width: 158px;
    top: 184px;
    right: -52px;
  }
`;
export const Leafdesc8 = styled.img`
  position: absolute;
  width: 57px;
  top: 286px;
  right: 629px;
  transform: rotate(102deg);
  @media screen and (min-width: 1310px) {
    width: 57px;
    top: 286px;
    right: 679px;
  }
  @media screen and (min-width: 1440px) {
    width: 69px;
    top: 388px;
    right: 665px;
  }
`;
export const Cream1desc = styled.img`
  position: absolute;
  width: 81px;
  top: 180px;
  left: 179px;

  @media screen and (min-width: 1024px) {
    width: 87px;
    top: 194px;
    left: 205px;
  }
  @media screen and (min-width: 1240px) {
    width: 95px;
    top: 153px;
    left: 220px;
  }
  @media screen and (min-width: 1440px) {
    width: 120px;
    top: 286px;
    left: 250px;
  }
`;
export const Cream2desc = styled.img`
  position: absolute;
  width: 110px;
  top: 253px;
  left: 294px;
  @media screen and (min-width: 1024px) {
    width: 110px;
    top: 261px;
    left: 340px;
  }
  @media screen and (min-width: 1240px) {
    width: 120px;
    top: 241px;
    left: 384px;
  }
  @media screen and (min-width: 1440px) {
    width: 160px;
    top: 425px;
    left: 453px;
  }
`;
export const Cream3desc = styled.img`
  position: absolute;
  width: 62px;
  top: 229px;
  left: 440px;
  @media screen and (min-width: 850px) {
    left: 485px;
  }
  @media screen and (min-width: 960px) {
    left: 570px;
  }

  @media screen and (min-width: 1024px) {
    width: 62px;
    top: 268px;
    left: 505px;
  }
  @media screen and (min-width: 1150px) {
    width: 62px;
    top: 268px;
    left: 635px;
  }
  @media screen and (min-width: 1440px) {
    width: 90px;
    top: 399px;
    left: 681px;
  }
`;
export const Cream4desc = styled.img`
  position: absolute;
  width: 110px;
  top: 235px;
  right: 130px;
  @media screen and (min-width: 1024px) {
    width: 110px;
    top: 273px;
    right: 270px;
  }

  @media screen and (min-width: 1440px) {
    width: 150px;
    top: 393px;
    right: 279px;
  }
`;
export const Cream5desc = styled.img`
  position: absolute;
  width: 67px;
  top: 131px;
  right: 25px;
  @media screen and (min-width: 1024px) {
    width: 67px;
    top: 191px;
    right: 144px;
  }

  @media screen and (min-width: 1440px) {
    width: 100px;
    top: 233px;
    right: 102px;
  }
`;
export const RedFlower = styled.img`
  position: absolute;
  width: 303px;
  top: 213px;
  right: -100px;

  @media screen and (min-width: 1440px) {
    /* position: absolute; */
    width: 413px;
    top: 335px;
    right: -50px;
  }
`;

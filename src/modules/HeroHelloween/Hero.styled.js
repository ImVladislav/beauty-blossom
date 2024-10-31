import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundColor = styled.div`
  background: linear-gradient(90deg, #b6fa62 0%, #daffad 100%);
  height: 300px;
  position: relative;
  overflow: hidden;
  z-index: 0;
  user-select: none;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 1440px) {
    height: 600px;
  }
`;
export const ContainerBanner = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  position: relative;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 140px;
  }
`;
export const ImgContainer = styled.div``;
export const FifteenImg = styled.img`
  position: absolute;
  top: 30px;
  left: -40px;
  z-index: -1;
  width: 76px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 120px;
    top: -30px;
    left: -80px;
  }
  @media screen and (min-width: 1440px) {
    width: 254px;
    top: -110px;
    left: -120px;
  }
`;
export const FiveImg = styled.img`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: -1;
  width: 48px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 60px;
    top: 0px;
    left: 130px;
  }
  @media screen and (min-width: 1440px) {
    width: 111px;
    top: -30px;
    left: 300px;
  }
`;
export const TenImg = styled.img`
  position: absolute;
  bottom: -25px;
  left: 75px;
  width: 87px;
  height: auto;
  transform: rotate(30deg);
  @media screen and (min-width: 768px) {
    width: 100px;
    bottom: 10px;
    left: 120px;
    transform: rotate(0deg);
  }
  @media screen and (min-width: 1440px) {
    width: 213px;
    bottom: -15px;
    left: 250px;
    transform: rotate(0deg);
  }
`;
export const CartImg = styled.img`
  position: absolute;
  top: 60px;
  left: -30px;
  z-index: -1;
  width: 160px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 220px;
    top: 0px;
  }
  @media screen and (min-width: 1440px) {
    width: 380px;
    top: -40px;
    left: -0px;
  }
`;

export const TwentyImg = styled.img`
  position: absolute;
  top: -25px;
  right: -25px;
  z-index: -1;
  width: 88px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 150px;
    top: -50px;
    right: -50px;
  }
  @media screen and (min-width: 1440px) {
    width: 310px;
    top: -100px;
    right: -50px;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  height: auto;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-left: 200px;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    width: 845px;
    margin-left: 350px;
  }
`;
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  color: #343434;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 90px;
  }
`;
export const TextWrap = styled.div`
  width: 180px;
  @media screen and (min-width: 768px) {
    width: 400px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
    width: 745px;
  }
`;
export const Subtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: #343434;
  margin: 18px 0 14px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin: 16px 0;
  }
  @media screen and (min-width: 1440px) {
    font-size: 26px;
    margin: 20px 0;
  }
`;
export const StyleLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.9;
  text-decoration: none;
  color: #f7f3f3;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  padding: 10px;

  background: #f67497;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(0.95);
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    border-radius: 20px;

    font-size: 22px;
  }
`;
export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 9px;
  line-height: 1.6;
  text-align: center;
  color: #343434;
  &:first-of-type {
    margin-top: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    &:first-of-type {
      margin-top: 20px;
    }
  }
`;

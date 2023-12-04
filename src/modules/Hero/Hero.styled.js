import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapBackground = styled.div`
  position: relative;
overflow: hidden;
      @media screen and (max-width: 767px) {
    height: 155px;
      }

      @media screen and (min-width: 768px) {
    height: 360px;
      }

  @media screen and (min-width: 1024px) {
    height: 350px;
  }
`;

export const Background = styled.div`
  width: 100vw;
  overflow: hidden;
  /* background: linear-gradient(
    180deg,
    #ffc8a1 0.02%,
    rgba(192, 178, 167, 0) 78.93%
  ); */
  background-size: contain;
    /* height: inherit; */

  
`;

export const Banner = styled.img`
  position: absolute;
    filter: blur(4px);
  width: 100%;
  height: 250px;
  overflow: hidden;

      @media screen and (min-width: 768px) {
    height: 360px;
      }

    @media screen and (min-width: 1024px) {
    height: 350px;

  }
  @media screen and (min-width: 1440px) {
 height: 380px;
  }

`


export const HeroWrap = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;

      /* @media screen and (max-width: 767px) {
  height: 240px;

  }

    @media screen and (max-width: 1023px) {
  height: 360px;

  } */

`;

export const Product = styled.img`
  position: absolute;
  /* bottom: -35px; */
  /* right: 75px; */
  /* width: 160px; */
  /* width: 320px; */
  height: 450px;
  top: 0px;
  @media screen and (max-width: 767px) {

  /* width: 186px; */
  height: 200px;

    position: relative;
    left: 0px;
    top: 0px;
    
  }

    @media screen and (min-width: 768px) {
    /* width: 150; */
    position: relative;
    left: 15px;
    /* top: 60px;  */
    height: 400px;
  }

  @media screen and (min-width: 1024px) {
    position: relative;
    right: 20px;
    top: 0px;
   height: 450px;
  }
  @media screen and (min-width: 1440px) {
     height: 450px;
    top: 0px;
    left: 5%;
  }
`;

export const Wraper = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* margin-left: 150px; */

  @media screen and (min-width: 768px) {
    margin-left: 40px;
    margin-right: -40px;
        margin-top: 10px;
    display: flex;
    align-items: flex-start;

    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;

  }
 @media screen and (min-width: 840px) {
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 90px;
  }


  @media screen and (min-width: 1024px) {
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 90px;
  }

    @media screen and (min-width: 1124px) {
    margin-top: 20px;
    margin-left: -10px;
    margin-right: 90px;
  }

      @media screen and (min-width: 1324px) {
    margin-top: 20px;
    margin-left: -10px;
    margin-right: 155px;
  }


  @media screen and (min-width: 1400) {
    margin-top: 20px;
    margin-left: 18px;
    margin-right: 41px;
  }


  @media screen and (min-width: 1660px) {
    margin-top: 20px;
    margin-left: -110px;
    margin-right: 310px;
  }


  
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xxl}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-family: math;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  color: black;
margin: 0;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxl *2}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxl *2.5}px;
  }
`;

export const Text = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  color: ${(p) => p.theme.colors.accentColor};
  margin-bottom: 30px;

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
`;

export const TextSecond = styled.p`
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  /* color: ${(p) => p.theme.colors.accentColor}; */
  color: black;
  margin-bottom: 10px;

      @media screen and (max-width: 767px) {
      font-size: ${(p) => p.theme.fontSizes.sm* 0.6}px;
    margin-bottom: 20px;
    }
    
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: ${(p) => p.theme.fontSizes.sm* 0.8}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm*1.1}px;
    margin-bottom:60px;
  }
`;

export const LinkBtn = styled(Link)`
  background: transparent;
  /* border: 2px solid ${(p) => p.theme.colors.accentColor}; */
border: 2px solid #1A0471;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: ${(p) => p.theme.fontWeights.body*2};
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  padding: 6px 8px;
  transition: all 250ms ease-in-out;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  color: #1A0471;

  margin-bottom: 30px;
  margin-left: 50px;
  &:hover {
    color: white;
    /* background: ${(p) => p.theme.colors.accentColor}; */
    background: #1A0471;

  }
  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-bottom: 110px;
    margin-left:30px;
       padding: 7px 30px;
    justify-content:flex-start;
     font-size: ${(p) => p.theme.fontSizes.m*0.7}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
    margin-left:30px;
    padding: 7px 30px;
    justify-content:flex-start;
  }
`;

export const TextСonditions = styled.p`
  position: absolute;
  bottom: -2%;
  /* right: 3%; */
  left: 3%;
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
  /* color: ${(p) => p.theme.colors.accentColor}; */
  color: white;
  text-align: start;
  margin-bottom: 5px;

    @media screen and (max-width: 767px) {
    bottom: 20%;
    right: 10%;
    margin-right: 30px;
  }

  @media screen and (min-width: 768px) {
    bottom: 8%;
    right: 10%;
    margin-right: 30px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
    bottom: 10%;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapBanner = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Banner = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;

  object-fit: cover;
  object-position: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
  @media screen and (min-width: 1024px) {
    gap: 60px;
  }
  @media screen and (min-width: 1440px) {
    gap: 250px;
  }
`;

export const Product = styled.img`
  width: 100%;
`;

export const TitleContainer = styled.div`
  position: absolute;

  left: 50%;
  transform: translateX(-45%);

  top: clamp(30px, 8vw, 70px);
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: clamp(5px, 2vw, 50px);
  @media screen and (min-width: 768px) {
    top: 15%;
    left: 60%;
  }
  @media screen and (min-width: 1440px) {
    top: 60px;
    left: 60%;
  }
`;

export const Title = styled.h2`
  font-family: "Arial", sans-serif;
  font-size: clamp(40px, 8vw, 110px);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #022931;
`;

export const Desc = styled.p`
  font-family: "Arial", sans-serif;
  font-size: clamp(10px, 2vw, 26px);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.02em;
  text-align: center;
  color: #022931;
`;

export const LinkBtn = styled(Link)`
  font-family: "Arial", sans-serif;
  font-size: clamp(10px, 3vw, 17px);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: #ffffff;

  background: #18697a;
  padding: 6px 12px;
  border-radius: 7px;
  &:hover,
  &:focus {
    background: #0c5261;
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 22px;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../images/banner.png";



export const MainBanner = styled.img`
  width: 100%;

`;
export const StyledLink = styled(Link)`
  width: 396px;
  height: 95px;
  background: transparent;
  border: 8px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  text-decoration: none;
  font-size: 28px;




  transition: color 1s ease;
  color: ${(p) => p.theme.colors.accentColor};
  &:hover {
    color: white;
    background: ${(p) => p.theme.colors.accentColor};
  }
`;

export const TextBlock = styled.div`
    display: flex;
    margin-left: 760px;
    /* margin-bottom: 150px; */
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 650px;
`;

export const Product = styled.img`
width: 1200px;

`;

export const ProductImg = styled.div`
/* right: 400px; */
left: -200px;
 position: absolute;

`;

export const Thumb = styled.div`
  width: 100%; /* Розтягуємо на всю ширину */
  height: 100%; /* Розтягуємо на всю висоту */

  text-align: center;
  background-image: url(${bg});

  margin-left: auto;
  margin-right: auto;
  background-size: cover;
  display: flex;
  justify-content: center;
`;
export const BannerTitle = styled.h3`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  /* padding-left: 55%;  */
  justify-content: center;
  color: ${(p) => p.theme.colors.accentColor};
  font-size: 70px;
  font-weight: 700;
`;

export const Background = styled.div`
  /* background: #f9f8f6; */
  /* background-image: url(${bg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat; */
`;

export const BannerSubTitle = styled.h4`
  margin-bottom: 60px;
  color: ${(p) => p.theme.colors.accentColor};
  font-size: 25px;
  display: flex;
  justify-content: center;
  /* padding-left: 58%; */
`;
export const BottomBanerText = styled.p`
    margin-top: 150px;
    margin-left: auto;
`;
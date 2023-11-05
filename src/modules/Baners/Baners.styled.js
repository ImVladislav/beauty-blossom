import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding: 0 40px;
  }
`;

export const BanersWrap = styled.div`
  position: relative;
`;

// export const Background = styled.div`
//   background: linear-gradient(
//     180deg,
//     #ffde9f 0.03%,
//     rgba(192, 178, 167, 0) 123.08%
//   );
//   background-size: contain;

//   width: 100%;
//   padding: 0 30px;
//   height: 291px;
// `;

export const ProductPurito = styled.img`
  width: 100%;
`;
export const ProductRetinol = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    /* width: 700px; */
  }
`;
export const LinkRetinol = styled(Link)`
  position: absolute;
  /* bottom: 50px; */
  /* right: 65px; */
  bottom: 14%;
  right: 6%;
  /* bottom: 15%;
  right: 10%; */
  background: transparent;
  border: 3px solid #ec1c1c;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;

  font-size: 10px;
  /* font-size: ${(p) => p.theme.fontSizes.m}px; */
  color: #ec1c1c;
  padding: 7px 30px;

  transition: all 250ms ease-in-out;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  &:hover {
    color: white;
    background: #ec1c1c;
    /* border: 3px solid ${(p) => p.theme.colors.accentColor}; */
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 15%;
    right: 10%;
  }
`;
export const LinkPurito = styled(Link)`
  position: absolute;
  bottom: 15%;
  left: 5%;
  background: transparent;
  border: 3px solid #494141;
  border-radius: 50px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeights.body};
  text-decoration: none;
  font-size: ${(p) => p.theme.fontSizes.m}px;

  color: #494141;
  padding: 7px 30px;

  transition: all 250ms ease-in-out;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  &:hover {
    color: white;
    background: #494141;
  }
`;

// position: absolute;
// bottom: 14%;
// right: 6%;
// background: transparent;
// border: 3px solid #ec1c1c;
// border-radius: 50px;
// display: flex;
// text-align: center;
// justify-content: center;
// align-items: center;
// font-weight: 400;
// text-decoration: none;
// font-size: 10px;
// color: #ec1c1c;
// padding: 7px 30px;
// transition: all 250ms ease-in-out;

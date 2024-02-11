import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin: 40px 5px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  display: inline-block;
  max-width: fit-content;
  max-height: auto;
  @media screen and (min-width: 768px) {
    max-width: inherit;
  }
  @media screen and (min-width: 1024px) {
    max-width: inherit;
    /* max-height: 500px; */
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

export const WrapName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #aa9e9e;
  margin-bottom: 20px;
`;
export const ProductTags = styled.div`
  display: grid;
  justify-content: space-between;
  position: absolute;
  bottom: 60px;
`;
export const ProductName = styled.h2`
  margin: 0 10px 10px 0;

  font-size: ${(p) => p.theme.fontSizes.sm}px;
  text-align: justify;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    text-align: center;
  }
`;

// export const ProductArticle = styled.div`
//   position: absolute;
//   right: 5px;
//   top: 10px;
//   text-align: center;
//   padding: 7px 14px;
//   margin: 0 0 -15px 0;
//   font-size: ${(p) => p.theme.fontSizes.xs}px;
//   font-style: normal;
//   font-weight: ${(p) => p.theme.fontWeights.body};
//   background: ${(p) => p.theme.colors.topHeaderLine};
//   border-radius: ${(p) => p.theme.radii.none};
//   color: ${(p) => p.theme.colors.textColor};
//   @media screen and (min-width: 768px) {
//     font-size: ${(p) => p.theme.fontSizes.s}px;
//     position: relative;
//   }
// `;

// export const ProductArticleSpan = styled.span`
//   display: block;
//   margin: 3px;
//   text-align: center;
//   font-size: ${(p) => p.theme.fontSizes.xxs}px;
//   color: ${(p) => p.theme.colors.textColor};
//   font-weight: ${(p) => p.theme.fontWeights.bold};
//   @media screen and (min-width: 768px) {
//     font-size: ${(p) => p.theme.fontSizes.xs}px;
//   }
// `;

// export const ProductCode = styled.p`
//   font-size: ${(p) => p.theme.fontSizes.xs}px;
//   font-style: normal;
//   font-weight: ${(p) => p.theme.fontWeights.body};
//   line-height: normal;
//   margin: 5px 0;
//   @media screen and (min-width: 768px) {
//     font-size: ${(p) => p.theme.fontSizes.sm}px;
//   }
// `;
// export const ProductCountry = styled.p`
//   font-size: ${(p) => p.theme.fontSizes.xs}px;
//   font-style: normal;
//   font-weight: ${(p) => p.theme.fontWeights.bold};
//   line-height: normal;
//   margin: 5px 0;
//   @media screen and (min-width: 768px) {
//     font-size: ${(p) => p.theme.fontSizes.sm}px;
//   }
// `;
// export const ProductBrand = styled.p`
//   font-size: ${(p) => p.theme.fontSizes.s}px;
//   font-style: normal;
//   font-weight: ${(p) => p.theme.fontWeights.bold};
//   line-height: normal;
//   margin: 5px 0;
//   @media screen and (min-width: 768px) {
//     font-size: ${(p) => p.theme.fontSizes.m}px;
//   }
// `;

export const ProductPrice = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xxl}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  margin: 10px 0 10px 0;
  color: ${(p) => p.theme.colors.textColor};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.authxl}px;
  }
`;

export const ProductTitleDescription = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  margin: 5px 0;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.2px;
  color: black;
  border-bottom: 1px solid #aa9e9e;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
export const ProductDescriptionWrap = styled.div`
  text-align: justify;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: normal;
  margin: 5px 0;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
`;

export const Info = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    width: fit-content;
  }
`;

export const CounterBlock = styled.div`
  position: relative;
  width: 180px;
  height: 40px;
  display: flex;
  border-radius: 20px;
  border: 1px solid ${(p) => p.theme.colors.textColor};
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-evenly;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    height: 38px;
    margin-bottom: 10px;
    width: 95px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1024px) {
    width: 120px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ButtonIncDec = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background: transparent;
  font-size: ${(p) => p.theme.fontSizes.xxl}px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const InputIncDec = styled.input`
  text-align: center;
  font-family: monospace;
  outline: none;
  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background-color: transparent;
  font-size: ${(p) => p.theme.fontSizes.xxl}px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
`;

export const UlHistoryList = styled.ul`
  display: flex;
  margin-left: 3%;
  flex-wrap: wrap;
`;

export const LiHistoryList = styled.li`
  margin: 0px;
`;

export const LinkHistoryLink = styled(Link)`
  color: #833989;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  margin: 0px 2px;
`;

export const PHistoryName = styled.p`
  color: #833989;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  margin: 6px 2px;
  cursor: pointer;
`;

export const DivProductDescr = styled.div`
  /* display: flex; */
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const DivAboutProduct = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    display: flex;
    margin-left: auto;
  }
`;

export const DivAboutProductMobile = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DivPriceCounterProduct = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const DivAvableProduct = styled.div`
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

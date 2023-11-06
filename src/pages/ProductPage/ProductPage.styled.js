import styled from "styled-components";

export const PageContainer = styled.div`
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: center; */
  /* justify-content: center; */
  @media screen and (min-width: 768px) {
    margin: 40px 0px;
    flex-direction: row;
    align-items: flex-start;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  display: inline-block;
  max-width: 500px;
  max-height: 500px;
  @media screen and (min-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 500px;
    max-height: 500px;
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
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductArticle = styled.div`
  position: absolute;
  right: 5px;
  top: 10px;
  text-align: center;
  padding: 7px 14px;
  margin: 0 0 -15px 0;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};

  background: ${(p) => p.theme.colors.menuBg};
  border-radius: ${(p) => p.theme.radii.none};
  color: ${(p) => p.theme.colors.textColor};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.s}px;
    position: relative;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductArticleSpan = styled.span`
  display: block;
  margin: 3px;

  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.xxs}px;
  color: ${(p) => p.theme.colors.textColor};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductCode = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xs}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: normal;
  margin: 5px 0;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ProductBrand = styled.p`
  font-size: ${(p) => p.theme.fontSizes.s}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  margin: 5px 0;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductPrice = styled.p`
  font-size: ${(p) => p.theme.fontSizes.l}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  margin: 10px 0 10px 0;
  color: ${(p) => p.theme.colors.textColor};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.authxl}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ProductTitleDescription = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;
  margin: 5px 0;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  letter-spacing: 1.2px;

  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ProductDescription = styled.p`
  text-align: justify;

  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: normal;

  margin: 5px 0;
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.sm}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Info = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const CounterBlock = styled.div`
  width: 103px;
  height: 38px;
  display: flex;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.textColor};
  position: relative;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  margin-bottom: 10px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const ButtonIncDec = styled.button`
  flex: 1 0 auto;
  height: 100%;
  position: relative;
  display: inline-block;
  vertical-align: top;

  cursor: pointer;
  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background: none;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const InputIncDec = styled.input`
  text-align: center;

  outline: none;

  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background-color: none;
  font-size: ${(p) => p.theme.fontSizes.m}px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
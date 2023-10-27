import styled from "styled-components";

export const PageContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const ImageWrap = styled.div`
  position: relative;
  display: inline-block;
  max-width: 500px;
  max-height: 500px;
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

export const ProductName = styled.h2`
  margin: 0 10px 10px 0;

  font-size: ${(p) => p.theme.fontSizes.l}px;
  text-align: justify;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
`;

export const ProductArticle = styled.div`
  text-align: center;
  padding: 7px 14px;
  margin: 0 0 -15px 0;
  font-size: ${(p) => p.theme.fontSizes.s}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};

  background: ${(p) => p.theme.colors.menuBg};
  border-radius: ${(p) => p.theme.radii.none};
  color: ${(p) => p.theme.colors.textColor};
`;

export const ProductArticleSpan = styled.span`
  display: block;
  margin: 3px;

  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  color: ${(p) => p.theme.colors.textColor};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

export const ProductCode = styled.p`
  font-size: ${(p) => p.theme.fontSizes.sm}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: normal;
  margin: 5px 0;
`;
export const ProductBrand = styled.p`
  font-size: ${(p) => p.theme.fontSizes.m}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  margin: 5px 0;
`;

export const ProductPrice = styled.p`
  font-size: ${(p) => p.theme.fontSizes.authxl}px;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  margin: 10px 0 10px 0;
  color: ${(p) => p.theme.colors.textColor};
`;

export const ProductTitleDescription = styled.p`
  font-size: ${(p) => p.theme.fontSizes.xl}px;
  margin: 5px 0;

  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: normal;
  letter-spacing: 1.2px;

  color: ${(p) => p.theme.colors.accentColor};
`;
export const ProductDescription = styled.p`
  text-align: justify;

  font-size: ${(p) => p.theme.fontSizes.sm}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.body};
  line-height: normal;

  margin: 5px 0;
`;
export const Info = styled.div`
  width: 50%;
  padding-left: 20px;
`;
export const CounterBlock = styled.div`
  width: 103px;
  height: 38px;
  display: flex;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.textColor};
  position: relative;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  margin-bottom: 10px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
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
  font-size: ${(p) => p.theme.fontSizes.l}px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;

export const InputIncDec = styled.input`
  text-align: center;

  outline: none;

  color: ${(p) => p.theme.colors.textColor};
  border: 0;
  padding: 0;
  background-color: none;
  font-size: ${(p) => p.theme.fontSizes.l}px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
`;

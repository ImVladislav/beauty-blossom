import styled from "styled-components";

export const PageContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const ImageWrap = styled.div`
  position: relative;
  display: inline-block;
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
  font-size: 30px;
  text-align: justify;

  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductArticle = styled.div`
  margin: 0 0 -15px 0;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;

  padding: 7px 14px;
  background: #f7f5ee;
  border-radius: 0;
  color: #000;
`;

export const ProductArticleSpan = styled.span`
  display: block;
  margin-bottom: 1px;
  font-size: 12px;
  color: #acacac;
  white-space: nowrap;
`;

export const ProductBrand = styled.p`
  font-size: 20px;

  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 5px 0;
`;

export const ProductPrice = styled.p`
  font-size: 30px;

  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px 0 10px 0;
  color: #000;
`;

export const ProductTitleDescription = styled.p`
  font-size: 30px;
  margin: 5px 0;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;

  color: ${(p) => p.theme.colors.accentColor};
`;
export const ProductDescription = styled.p`
  text-align: justify;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 5px 0;
`;
export const Info = styled.div`
  width: 50%;
  padding-left: 20px;
`;

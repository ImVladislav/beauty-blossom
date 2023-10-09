import styled from "styled-components";

export const PageContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
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
  margin: 0 0 10px;
  font-size: 20px;
  display: inline-block;
  font-weight: 400;
`;
export const ProductArticle = styled.div`
  margin: 0 0 -15px 0;
  font-size: 13px;
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
  font-size: 14px;
  margin: 5px 0;
`;

export const ProductPrice = styled.p`
  margin-right: 15px;
  color: #000;
`;

export const Info = styled.div`
  width: 33.33333%;
  padding-left: 20px;
`;

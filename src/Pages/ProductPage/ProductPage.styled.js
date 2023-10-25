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
  background: ${(p) => p.theme.colors.menuBg};
  border-radius: 0;
  color: ${(p) => p.theme.colors.black};
`;

export const ProductArticleSpan = styled.span`
  display: block;
  margin-bottom: 1px;
  font-size: 12px;
  color: ${(p) => p.theme.colors.black};
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
  color: ${(p) => p.theme.colors.black};
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
export const CounterBlock = styled.div`
  width: 103px;
  height: 38px;
  display: flex;
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.black};
  position: relative;
  align-items: center;
  font-size: 18px;
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
  color: ${(p) => p.theme.colors.black};
  border: 0;
  padding: 0;
  background: none;
  font-size: 20px;
  &:hover {
    color: ${(p) => p.theme.colors.accentColor};
    cursor: pointer;
  }
`;

export const InputIncDec = styled.input`
  text-align: center;

  outline: none;

  color: ${(p) => p.theme.colors.black};
  border: 0;
  padding: 0;
  background-color: none;
  font-size: 20px;
`;

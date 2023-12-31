import styled from "styled-components";

export const FooterWrap = styled.footer`
  padding: 10px 0 36px 0;
  background: ${(p) => p.theme.colors.topHeaderLine};
`;
export const LogoWrap = styled.div`
  margin-left: 10px;
  margin-right: 50px;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;
export const Wrap = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  gap: 5px;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 0;
    max-width: 900px;
    margin-right: 0;
  }
`;

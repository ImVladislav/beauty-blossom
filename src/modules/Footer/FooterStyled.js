import styled from "styled-components";

export const FooterWrap = styled.footer`
  background: ${(p) => p.theme.colors.topLine};
`;

export const Wrap = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 10px 30px 20px 50px;
    justify-content: space-between;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
`;

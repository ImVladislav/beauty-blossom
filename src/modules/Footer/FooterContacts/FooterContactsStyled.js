import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const TitleWrap = styled.div`
  text-align: start;
`;
export const Title = styled.h3`
  color: ${(p) => p.theme.colors.border};
  font-family: "Alegreya Sans";
  font-size: ${(p) => p.theme.fontSizes.xs}px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
  line-height: 1;
  letter-spacing: 1px;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0 20px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.l}px;
    font-style: normal;

    line-height: 1;
    letter-spacing: 2.2px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 180px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;
export const Underline = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${(p) => p.theme.colors.black};
`;
export const ContactWraper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 20px;
`;

export const ContactGroup = styled.div`
  position: relative;
  break-inside: avoid;
  transform: translateZ(0);
  display: grid;
`;

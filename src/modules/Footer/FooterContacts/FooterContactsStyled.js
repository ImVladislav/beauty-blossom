import styled from "styled-components";

export const Wrap = styled.div`
  width: 150px;
  @media screen and (min-width: 1024px) {
    width: 180px;
  }
  @media screen and (min-width: 1440px) {
    width: 225px;
  }
`;

export const TitleWrap = styled.div`
  margin-bottom: 5px;
`;
export const Title = styled.h3`
  color: ${(p) => p.theme.colors.border};
  font-family: "Alegreya Sans";
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.subtitle};
  font-style: normal;
  letter-spacing: 2.21px;
  letter-spacing: 0.745px;
  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.l}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xl}px;
  }
`;

export const ContactWraper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactGroup = styled.div`
  position: relative;
  break-inside: avoid;
  transform: translateZ(0);
  display: grid;
`;

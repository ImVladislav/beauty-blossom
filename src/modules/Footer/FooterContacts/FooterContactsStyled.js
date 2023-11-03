import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TitleWrap = styled.div`
  text-align: start;
`;
export const Title = styled.h3`
  /* font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px; */
  color: #461c49;

  font-family: Alegreya Sans;
  font-size: 11.455px;
  font-style: normal;
  font-weight: 500;
  line-height: 103.312%; /* 35.126px */
  letter-spacing: 0.745px;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding: 0 180px 0 20px;
    font-size: ${(p) => p.theme.fontSizes.xl}px;
    font-style: normal;
    font-weight: 500;
    line-height: 103.312%; /* 35.126px */
    letter-spacing: 2.21px;
  }
`;
export const Underline = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000; /* You can change the color to your preference */
  /* margin-left: 20px; Adjust the spacing between the title and the line */
`;
export const ContactWraper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 15px; */
  padding: 10px 0 0 20px;
`;

export const ContactGroup = styled.div`
  position: relative;
  break-inside: avoid;
  /* padding-bottom: 18px; */
  transform: translateZ(0);
  display: grid;
  /* margin-left: 20px; */
`;

export const ContactItem = styled.a`
  margin-bottom: 8px;
  text-decoration: none;
  color: #000000;

  font-size: 17px;
  font-weight: 400;
`;
export const Phone = styled.img`
  position: absolute;
  left: -28px;
`;

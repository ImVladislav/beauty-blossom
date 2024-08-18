import styled from "styled-components";

export const FooterWrap = styled.footer`
  /* background: ${(p) => p.theme.colors.topLine}; */
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
`;

export const Wrap = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 10px 30px 20px 50px;
    justify-content: space-between;
  }

  @media screen and (min-width: 868px) {
    padding: 10px 20px 20px 20px;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    width: 90%;
    justify-content: space-around;
  }
`;
//===================work schedule==========================================
export const ScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c4c4c4;
  padding-top: 17px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const ScheduleTitle = styled.h4`
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.03;
  text-transform: lowercase;
  text-align: center;
  color: #616161;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const ScheduleText = styled.p`
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.03;
  text-transform: lowercase;
  text-align: center;
  color: #616161;
  margin-bottom: 4px;
  /* @media screen and (min-width: 768px) {
    margin-bottom: 0;
  } */
`;

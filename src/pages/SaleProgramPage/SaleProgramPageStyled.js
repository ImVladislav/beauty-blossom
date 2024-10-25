import styled from "styled-components";

export const Wrap = styled.div`
  padding: 0 20px;
`;
export const SectionTitle = styled.h2`
  font-family: "Mulish", sans-serif;

  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  color: #ff96cf;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 1.6em;
  }

  /* @media screen and (min-width: 1440px) {
  } */
`;

export const InfoTitle = styled.h3`
  font-family: "Mulish", sans-serif;

  font-size: 12px;
  font-weight: bold;
  padding: 0 0 20px 0px;

  text-align: center;
  color: #616161;

  @media screen and (min-width: 768px) {
    padding: 0 0 30px 0px;
    font-size: 1.4em;
  }
`;
export const InfoWrap = styled.div`
  margin: 20px 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;
export const Text = styled.p`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 8px;
  line-height: 1.1;
  color: #616161;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TextPink = styled.p`
  font-family: "Mulish", sans-serif;
  font-weight: 400;
  font-size: 8px;
  line-height: 1.1;
  font-style: italic;
  color: #ff96cf;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const ConditionsList = styled.ul`
  display: block;

  margin: 15px 0px 15px 5px;
`;

export const ConditionsItem = styled.li`
  list-style-type: decimal;
  font-size: 8px;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-left: 35px;
  }
`;
export const ImportantList = styled.ul`
  margin-bottom: 30px;

  & li::before {
    content: "●";
    color: #ff96cf;
    margin-right: 8px;
  }
`;
export const ImportantItem = styled.li`
  margin-bottom: 30px;
  display: flex;
  font-size: 8px;
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  color: #ff96cf;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  justify-content: center;
  margin: 30px 0;
  position: relative;

  @media screen and (min-width: 1024px) {
    margin: 40px 0;
  }

  @media screen and (min-width: 1440px) {
    display: flex;

    justify-content: center;
  }
`;
export const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 103;
`;
export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  max-height: 100vh;
  text-align: center;
  position: relative;
  overflow-y: auto;
`;
export const Link = styled.a`
  text-decoration: none;
  font-family: "Mulish", sans-serif;
  color: #616161;
  &:hover {
    color: ${(p) => p.theme.colors.textColor};
  }
`;
export const SubText = styled.p`
  margin-bottom: 5px;
  font-family: "Mulish", sans-serif;
  margin-left: 5px;
  font-size: 10px;
  color: #616161;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Red = styled.span`
  font-family: "Mulish", sans-serif;
  color: red;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

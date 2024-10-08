import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  font-family: "Mulish", sans-serif;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  color: #ff96cf;
  @media screen and (min-width: 768px) {
    font-size: 2em;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const ConditionsTitle = styled.h4`
  font-family: "Mulish", sans-serif;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  padding: 20px 0px;
  margin-left: 10px;
  color: #616161;
  @media screen and (min-width: 768px) {
    font-size: 1.8em;
    margin-left: 34px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Text = styled.p`
  font-family: "Mulish", sans-serif;
  padding: 0 5px;
  line-height: 1.5;
  /* font-weight: bold; */
  font-size: 8px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  /* 
  @media screen and (min-width: 1440px) {
  } */
`;
export const ConditionsList = styled.ul`
  display: block;

  margin: 15px 0px 15px 25px;
`;

export const ListItems = styled.li`
  margin-left: 5px;
  margin-top: 4px;
  list-style-type: decimal;
  font-size: 10px;
  font-family: "Mulish", sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

  @media screen and (min-width: 1440px) {
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

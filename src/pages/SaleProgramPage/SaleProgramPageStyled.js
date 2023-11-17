import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    font-size: 2.2em;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const ConditionsTitle = styled.h4`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  padding: 20px 0px;
  margin-left: 10px;
  color: ${(p) => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    font-size: 1.8em;
    margin-left: 34px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Text = styled.p`
  padding: 0 5px;
  font-weight: bold;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const ConditionsList = styled.ul`
  display: block;

  margin: 15px 0px 15px 25px;
`;

export const ListItems = styled.li`
  margin-left: 5px;
  list-style-type: decimal;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-left: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  margin: 30px 0;
  position: relative;

  @media screen and (min-width: 1024px) {
    margin: 40px 0;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
  }
`;
export const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Півпрозорий чорний фон */
  display: flex;
  justify-content: center; /* Центруємо горизонтально */
  align-items: center; /* Центруємо вертикально */
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

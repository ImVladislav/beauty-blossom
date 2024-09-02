import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`;
export const TitleLine = styled.div`
  display: none;
  @media screen and (min-width: 1310px) {
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #aa9e9e;
    margin-top: 70px;
  }
`;

export const Title = styled.h2`
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.09;
  text-align: center;
  color: #616161;
  margin-top: 40px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 30px;
  justify-content: center;
`;

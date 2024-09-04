import styled from "styled-components";

export const BrandInfo = styled.section`
  padding: 20px;
  margin-top: 25px;
  @media screen and (min-width: 1024px) {
    margin-top: 35px;
  }
`;

export const BrandInfoWrap = styled.div`
  border: 1px solid #616161;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1024px) {
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;
export const Image = styled.img`
  width: 70px;
  height: fit-content;
  @media screen and (min-width: 1024px) {
    width: 140px;
  }
`;

export const Desc = styled.p`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 1.09;

  color: #1e1e1e;

  & span {
    font-family: "Mulish", sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.09;

    color: #1e1e1e;
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

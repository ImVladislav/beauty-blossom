import styled from "styled-components";

export const Background = styled.div`
  background: ${(p) => p.theme.colors.topHeaderLine};
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
export const Text = styled.h2`
  margin: 0;
  color: ${(p) => p.theme.colors.textColor};
  font-weight: 500;
  font-family: "Alegreya Sans";
  font-size: 17px;
  padding: 6px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
`;
export const Underline = styled.div`
  height: 1px;
  background-color: #000;
`;

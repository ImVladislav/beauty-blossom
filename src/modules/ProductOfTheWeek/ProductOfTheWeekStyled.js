import styled from "styled-components";

export const Background = styled.div`
  background: ${(p) => p.theme.colors.topHeaderLine};
  display: flex;
  justify-content: center;
`;
export const Text = styled.h2`
  margin: 0;
  color: ${(p) => p.theme.colors.textColor};
  font-weight: 500;
  font-family: "Alegreya Sans";
  font-size: 20px;
  padding: 6px;
`;
export const Link = styled.a`
  text-decoration: underline;
  color: ${(p) => p.theme.colors.textColor};
`;

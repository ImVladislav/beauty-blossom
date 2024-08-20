import styled from "styled-components";

export const Background = styled.div`
  /* background: ${(p) => p.theme.colors.topLine}; */

  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
export const Text = styled.h2`
  margin: 0;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  font-weight: 500;

  font-size: 14px;
  padding: 6px;

  font-family: "Mulish", sans-serif;
  font-weight: 500;

  line-height: 1.079;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: justify;
  color: #616161;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  /* color: ${(p) => p.theme.colors.accentColor}; */
  color: #616161;
`;
// export const Underline = styled.div`
//   height: 1px;
//   background-color: ${(p) => p.theme.colors.accentColor};
// `;

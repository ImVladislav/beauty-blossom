import styled from "styled-components";

export const ContainerHeader = styled.div`
  padding: 20px;
  background: ${(p) => p.theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

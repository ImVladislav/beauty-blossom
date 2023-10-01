import styled from 'styled-components';

export const Wrap = styled.div`
  background: ${(p) => p.theme.colors.menuBg};
  padding: 10px;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.black};
  font-family: 'Inknut Antiqua';
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
`;

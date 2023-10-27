import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  background: ${(p) => p.theme.colors.menuBg};
  padding: 10px;
`;
export const List = styled.ul`
  display: grid;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.body};
`;
export const ListItem = styled.li`
  margin-bottom: 8px;
`;
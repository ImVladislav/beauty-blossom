import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Message = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;
const StyleLink = styled(Link)`
  color: ${(p) => p.theme.colors.textColor};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Message>Сторінка відсутня</Message>
        <StyleLink to="/">Перейти на головну сторінку</StyleLink>
      </Container>
    </>
  );
};

export default NotFoundPage;

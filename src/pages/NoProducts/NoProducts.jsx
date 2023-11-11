import React from "react";
import { Container } from "../../shared/styles/Container";
import styled from "styled-components";

const Message = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NoProducts = () => {
  return (
    <>
      <Container>
        <Message>Товари відсутні</Message>
      </Container>
    </>
  );
};

export default NoProducts;

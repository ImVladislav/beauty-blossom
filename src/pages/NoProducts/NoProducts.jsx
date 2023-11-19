import React from "react";
import { Container } from "../../shared/styles/Container";
import { Message } from "./NoProducts.styled";

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

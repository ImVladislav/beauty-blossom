import React from "react";
import { Container } from "../../shared/styles/Container";
import { Message } from "./NoProducts.styled";

const NoProducts = () => {
  return (
    <div style={{ display: "flex" }}>
      <Container>
        <Message>Товари відсутні</Message>
      </Container>
    </div>
  );
};

export default NoProducts;

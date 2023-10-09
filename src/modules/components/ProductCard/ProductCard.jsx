import React from "react";
import {
  ItemStyle,
  LinkStyle,
  Container,
  Image,
  Name,
  Price,
  Content,
} from "./ProductCard.styled";

const ProductCard = ({ product }) => {
  return (
    <>
      <ItemStyle>
        <LinkStyle to={`/product/${product.id}`}>
          <Container>
            <div></div>
            <div>
              <Image src={product.image} alt={product.name} />
            </div>
            <Content>
              <Name>{product.name}</Name>
              <Price> ${product.price}</Price>
            </Content>
          </Container>
        </LinkStyle>
      </ItemStyle>
    </>
  );
};

export default ProductCard;

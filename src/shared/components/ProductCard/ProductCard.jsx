import React from "react";
import {
  ItemStyle,
  LinkStyle,
  Container,
  ImageWrap,
  Image,
  Name,
  Price,
  Content,
} from "./ProductCard.styled";
import Sticker from "../Sticker/Sticker";

const ProductCard = ({ products }) => {
  console.log(products);
  return (
    <>
      <ItemStyle>
        <LinkStyle to={`/product/${products.id}`}>
          <Container>
            <div></div>
            <ImageWrap>
              <Image src={products.images} alt={products.name} />
              {products.new && (
                <Sticker text="Новинка" newproduct={products.new.toString()} />
              )}
              {products.sale && (
                <Sticker
                  text="Розпродаж"
                  saleproduct={products.sale.toString()}
                />
              )}
            </ImageWrap>
            <Content>
              <Name>{products.name}</Name>
              <Price> ${products.price}</Price>
            </Content>
          </Container>
        </LinkStyle>
      </ItemStyle>
    </>
  );
};

export default ProductCard;

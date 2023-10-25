import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../redux/cart/slice";
import { selectCart } from "../../../redux/cart/selectors";
import Sticker from "../Sticker/Sticker";

import {
  ItemStyle,
  LinkStyle,
  Container,
  ImageWrap,
  Image,
  Content,
  Name,
  Price,
  ButtonWrap,
} from "./ProductCard.styled";
import Button from "../Button/Button";

const ProductCard = ({ products }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const productCart = useSelector(selectCart);

  const handleAddToCart = (event) => {
    event.preventDefault();

    const productCartFind = productCart?.find(
      (item) => +item.id === +products.id
    );

    if (!productCartFind) {
      dispatch(addToCart({ ...products, quantity: 1 }));
    }
    return;
  };

  const isProductInCart = productCart?.some(
    (item) => +item.id === +products.id
  );

  return (
    <>
      <ItemStyle>
        <LinkStyle to={`/product/${products.id}`}>
          <Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
              <Price>{products.price} ₴</Price>
            </Content>
            {isHovered && (
              <ButtonWrap>
                <Button
                  className="buy-button"
                  text={
                    products.amount <= 0
                      ? "Немає в наявності"
                      : isProductInCart
                      ? "У кошику"
                      : "Купити"
                  }
                  onClick={handleAddToCart}
                  disabled={isProductInCart || products.amount <= 0}
                />
              </ButtonWrap>
            )}
          </Container>
        </LinkStyle>
      </ItemStyle>
    </>
  );
};

export default ProductCard;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../redux/cart/slice";
import { selectCart } from "../../../redux/cart/selectors";
import { optUserSelector } from "../../../redux/auth/selectors";

import Sticker from "../Sticker/Sticker";
import Button from "../Button/Button";

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
  ProductTags,
  CounterBlock,
  ButtonIncDec,
  InputIncDec,
} from "./ProductCard.styled";
import { toast } from "react-toastify";

const ProductCard = ({ products }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const productCart = useSelector(selectCart);
  const optUser = useSelector(optUserSelector);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (event) => {
    event.preventDefault();

    const productCartFind = productCart?.find(
      (item) => +item.id === +products.id
    );

    if (!productCartFind) {
      dispatch(addToCart({ ...products, quantity }));
    }
    return;
  };

  const isProductInCart = productCart?.some(
    (item) => +item.id === +products.id
  );
  const isProductUnavailable = products.amount <= 0;

  const handleQuantityChange = (event) => {
    console.log(event.curentTarget);
    const newQuantity = parseInt(event.curentTarget.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const incrementQuantity = () => {
    if (products.amount > quantity) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Обмежена кількість товару на складі!");
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <ItemStyle className={isProductUnavailable ? "unavailable" : ""}>
        <Container
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <LinkStyle to={`/product/${products.id}`}>
            <div></div>
            <ImageWrap>
              <Image src={products.images} alt={products.name} />
              <ProductTags>
                {products.new && <Sticker text="Новинка" />}
                {products.sale && <Sticker text="Знижка" sale />}
              </ProductTags>
            </ImageWrap>
            <Content>
              <Name>{products.name}</Name>
              {optUser ? (
                <Price>{products.priceOPT} ₴</Price>
              ) : (
                <Price>{products.price} ₴</Price>
              )}
            </Content>
          </LinkStyle>
          {products.amount <= 0 || (
            <CounterBlock>
              <ButtonIncDec onClick={decrementQuantity}>–</ButtonIncDec>
              <InputIncDec
                type="number"
                min="1"
                max={products.amount}
                value={quantity}
                onChange={handleQuantityChange}
                readOnly={true}
              />
              <ButtonIncDec onClick={incrementQuantity}>+</ButtonIncDec>
            </CounterBlock>
          )}
          {isHovered && (
            <>
              <ButtonWrap>
                <Button
                  goods
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
            </>
          )}
        </Container>
      </ItemStyle>
    </>
  );
};

export default ProductCard;

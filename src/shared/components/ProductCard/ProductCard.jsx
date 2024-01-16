import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import axios from "axios";

import { addToCart } from "../../../redux/cart/slice";
import { selectCart } from "../../../redux/cart/selectors";
import {
  loggedInSelector,
  optUserSelector,
} from "../../../redux/auth/selectors";

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

const ProductCard = ({ products }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const productCart = useSelector(selectCart);
  const optUser = useSelector(optUserSelector);
  const [quantity, setQuantity] = useState(1);
  const loggedIn = useSelector(loggedInSelector);

  const handleAddToCart = async (event) => {
    event.preventDefault();

    const productCartFind = productCart?.find(
      (item) => +item.id === +products.id
    );
    if (!productCartFind) {
      dispatch(addToCart({ ...products, quantity }));
      if (loggedIn) {
        try {
          await axios.post(`/basket`, {
            name: products.name,
            article: products.article,
            code: products.code,
            amount: products.amount,
            description: products.description,
            priceOPT: products.priceOPT,
            quantity: quantity,
            price: products.price,
            brand: products.brand,
            images: products.images,
            new: products.new,
            sale: products.sale,
            category: products.category,
            subCategory: products.subCategory,
            subSubCategory: products.subSubCategory,
            productId: products.id,
          });
        } catch (error) {
          console.error("Помилка додавання товару в кошик:", error);
        }
      }
    }
    return;
  };

  const isProductInCart = productCart?.some(
    (item) => +item.code === +products.code
  );

  const isProductUnavailable = products.amount <= 0;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.currentTarget.value, 10);
    if (
      !isNaN(newQuantity) &&
      newQuantity >= 1 &&
      newQuantity <= products.amount
    ) {
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
          <LinkStyle to={`/product/${products.id || products.productId}`}>
            <div></div>
            <ImageWrap>
              <Image
                itemProp="image"
                src={products.images}
                alt={products.name}
              />
              <ProductTags>
                {products.new && <Sticker text="Новинка" />}
                {products.sale && <Sticker text="Знижка" sale />}
              </ProductTags>
            </ImageWrap>
            <Content itemScope itemType="https://schema.org/Product">
              <Name itemProp="name">{products.name}</Name>
              {optUser ? (
                <Price>{products.priceOPT} ₴</Price>
              ) : (
                <Price itemProp="price">{products.price} ₴</Price>
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
                // readOnly={true}
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

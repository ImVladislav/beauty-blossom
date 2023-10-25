import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { addToCart } from "../../redux/cart/slice";
import { selectGoods } from "../../redux/products/selectors";

import Button from "../../shared/components/Button/Button";
import QuickOrderModal from "../../modules/QuickOrderModal/QuickOrderModal";
import { Container } from "../../shared/styles/Container";

import {
  PageContainer,
  ImageWrap,
  ProductImage,
  WrapName,
  ProductName,
  ProductArticle,
  ProductBrand,
  ProductPrice,
  ProductDescription,
  ProductTitleDescription,
  Info,
  ButtonIncDec,
  CounterBlock,
  InputIncDec,
} from "./ProductPage.styled";
import SecondButton from "../../shared/components/SecondButton/SecondButton";
import Sticker from "../../shared/components/Sticker/Sticker";
import { selectCart } from "../../redux/cart/selectors";
import ScrollToTop from "../../shared/components/ScrollToTop/ScrollToTop";

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // стейт для модалки - швидке замовлення
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectGoods);
  const productCart = useSelector(selectCart);

  const product = products?.find((item) => +item.id === +id); // amount, article, brand, code, description, images, name,new,price,priceOPT,sale,category,subCategory,subSubCategory
  const productCartFind = productCart?.find((item) => +item.id === +id);

  const handleAddToCart = () => {
    if (!productCartFind) {
      dispatch(addToCart({ ...product, quantity }));
    }
    return;
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // функція для відкриття модалки швидкого замовлення
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <PageContainer>
        <ImageWrap>
          <ProductImage src={product.images} alt={product.name} />
          {product.new && (
            <Sticker text="Новинка" newproduct={product.new.toString()} />
          )}
          {product.sale && (
            <Sticker text="Розпродаж" saleproduct={product.sale.toString()} />
          )}
        </ImageWrap>
        <Info>
          <WrapName>
            <ProductName>{product.name}</ProductName>
            <ProductArticle>
              <span>Артикул </span>
              {product.article}
            </ProductArticle>
          </WrapName>
          <div>Штрих-код: {product.code}</div>
          <ProductBrand> {product.brand}</ProductBrand>
          <ProductPrice>{product.price} ₴</ProductPrice>
          {product.amount <= 0 ||
            (!productCartFind && (
              <CounterBlock>
                <ButtonIncDec onClick={decrementQuantity}>–</ButtonIncDec>
                <InputIncDec
                  type="number"
                  min="1"
                  max={product.amount}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <ButtonIncDec onClick={incrementQuantity}>+</ButtonIncDec>
              </CounterBlock>
            ))}

          <Button
            text={
              product.amount <= 0
                ? "Немає в наявності"
                : productCartFind
                ? "У кошику"
                : "Купити"
            }
            onClick={handleAddToCart}
            disabled={productCartFind || product.amount <= 0}
          />
          {/* <SecondButton
            text="Швидке замовлення"
            onClick={toggleModal}
            disabled={product.amount <= 0}
          ></SecondButton> */}
          <ProductTitleDescription>Опис</ProductTitleDescription>
          <ProductDescription>{product.description}</ProductDescription>

          {isModalOpen && <QuickOrderModal onClose={toggleModal} />}
        </Info>
      </PageContainer>
      <ScrollToTop />
    </Container>
  );
};

export default ProductPage;

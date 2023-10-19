import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { addToCart } from "../../redux/cart/slice";
import { selectorGoods } from "../../redux/products/selectors";

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
} from "./ProductPage.styled";
import SecondButton from "../../shared/components/SecondButton/SecondButton";
import Sticker from "../../shared/components/Sticker/Sticker";

const ProductPage = () => {
  const [inCart, setInCart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectorGoods);

  const product = products?.find((item) => +item.id === +id); // amount, article, brand, code, description, images, name,new,price,priceOPT,sale,category,subCategory,subSubCategory

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setInCart(true);
  };

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
          <ProductPrice>{product.price} грн</ProductPrice>
          <Button
            text={inCart ? "У кошику" : "Купити"}
            onClick={handleAddToCart}
            disabled={inCart}
          />
          <SecondButton
            text="Швидке замовлення"
            onClick={toggleModal}
          ></SecondButton>
          <ProductTitleDescription>Опис</ProductTitleDescription>
          <ProductDescription>{product.description}</ProductDescription>

          {isModalOpen && <QuickOrderModal onClose={toggleModal} />}
        </Info>
      </PageContainer>
    </Container>
  );
};

export default ProductPage;

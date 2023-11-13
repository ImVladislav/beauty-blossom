import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

import { addToCart } from "../../redux/cart/slice";
import { selectGoods } from "../../redux/products/selectors";
import {
  _idSelector,
  loggedInSelector,
  optUserSelector,
} from "../../redux/auth/selectors";
import { selectCart } from "../../redux/cart/selectors";

import Button from "../../shared/components/Button/Button";
// import SecondButton from "../../shared/components/SecondButton/SecondButton";
import QuickOrderModal from "../../modules/QuickOrderModal/QuickOrderModal";
import Sticker from "../../shared/components/Sticker/Sticker";
import { Container } from "../../shared/styles/Container";
import { Loader } from "../../shared/components/Loader/Loader";

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
  ProductCode,
  ProductArticleSpan,
  ProductTags,
} from "./ProductPage.styled";

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // стейт для модалки - швидке замовлення
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectGoods);
  const productCart = useSelector(selectCart);
  const optUser = useSelector(optUserSelector);
  const [loading, setLoading] = useState(true);
  const loggedIn = useSelector(loggedInSelector);

  useEffect(() => {
    setLoading(false);
  }, []);

  const product = products?.find(
    (item) => +item.id === +id || +item.productId === +id
  );
  const productCartFind = productCart?.find(
    (item) => +item.id === +id || +item.productId === +id
  );

  const handleAddToCart = async () => {
    if (!productCartFind) {
      dispatch(addToCart({ ...product, quantity }));
      if (loggedIn) {
        try {
          await axios.post(`/basket`, {
            name: product.name,
            article: product.article,
            code: product.code,
            amount: product.amount,
            description: product.description,
            priceOPT: product.priceOPT,
            quantity: quantity,
            price: product.price,
            brand: product.brand,
            images: product.images,
            new: product.new,
            sale: product.sale,
            category: product.category,
            subCategory: product.subCategory,
            subSubCategory: product.subSubCategory,
            productId: product.id,
          });
        } catch (error) {
          console.error("Помилка додавання товару в кошик:", error);
        }
      }
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const incrementQuantity = () => {
    if (product.amount > quantity) {
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

  // функція для відкриття модалки швидкого замовлення
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <PageContainer>
          <ImageWrap>
            <ProductImage src={product.images} alt={product.name} />
            <ProductTags>
              {product.new && <Sticker text="Новинка" />}
              {product.sale && <Sticker text="Знижка" sale />}
            </ProductTags>
          </ImageWrap>
          <Info>
            <WrapName>
              <ProductName>{product.name}</ProductName>
              <ProductArticle>
                <ProductArticleSpan>Артикул</ProductArticleSpan>
                {product.article}
              </ProductArticle>
            </WrapName>
            <ProductCode>Штрих-код: {product.code}</ProductCode>
            <ProductBrand> {product.brand}</ProductBrand>
            {optUser ? (
              <ProductPrice>{product.priceOPT} ₴</ProductPrice>
            ) : (
              <ProductPrice>{product.price} ₴</ProductPrice>
            )}
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
                    readOnly={true}
                  />
                  <ButtonIncDec onClick={incrementQuantity}>+</ButtonIncDec>
                </CounterBlock>
              ))}

            <Button
              goods
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
      )}
    </Container>
  );
};

export default ProductPage;

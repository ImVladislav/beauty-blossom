import React, { useState, useEffect } from "react";
// import { ReactComponent as NextPrevButtonSvg } from "../../images/NextPrev.svg";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Sticker from "../../shared/components/Sticker/Sticker";

import { useMedia } from "../../hooks/useMedia";
import {
  SliderContainer,
  SliderHeaderToggle,
  Button,
  CartWrap,
  ProductCard,
  ProductImage,
  ProductTags,
  ProductName,
} from "./ProductSlider.styled";

export const ProductSlider = ({ products }) => {
  const { isDesktopScreen } = useMedia();
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSale, setShowSale] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const itemsPerSlide = isDesktopScreen ? 5 : 6;

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    const maxSlide = Math.ceil(products.length - itemsPerSlide);
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === maxSlide && endIdx < filteredProduct.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const startIdx = currentSlide;
  const endIdx = startIdx + itemsPerSlide;
  const displayedProducts = filteredProduct
    .sort((a, b) => b.code - a.code)
    .slice(startIdx, endIdx);

  const toggleSaleFilter = () => {
    setShowSale(!showSale);
    if (showNew) {
      setShowNew(false);
    }
  };

  const toggleNewFilter = () => {
    setShowNew(!showNew);
    if (showSale) {
      setShowSale(false);
    }
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (showSale && showNew) {
        return product.sale + product.new;
      }
      if (showSale) {
        setCurrentSlide(0);
        return product.sale;
      }
      if (showNew) {
        setCurrentSlide(0);
        return product.new;
      }
      return product.sale + product.new;
    });

    setFilteredProduct(filteredProducts);
  }, [showSale, showNew, products]);

  return (
    <div>
      <SliderContainer>
        <SliderHeaderToggle
          style={{ color: showSale ? "#e93f11" : "#A03DA9" }}
          onClick={toggleSaleFilter}
        >
          Акції
        </SliderHeaderToggle>
        <SliderHeaderToggle
          style={{ color: showNew ? "#7baf35" : "#A03DA9" }}
          onClick={toggleNewFilter}
        >
          Новинки
        </SliderHeaderToggle>
      </SliderContainer>
      <SliderContainer>
        <Button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={currentSlide === 0 ? "icon-disabled" : ""}
        >
          {/* <NextPrevButtonSvg
            style={{
              fill: currentSlide === 0 ? "#ffffff" : "#A03DA9",
            }}
          /> */}
          <AiOutlineLeft />
        </Button>
        <CartWrap>
          {displayedProducts.map((filtred) => (
            <ProductCard to={`/product/${filtred.id}`} key={filtred.id}>
              <ProductImage
                src={filtred.images}
                alt={filtred.name}
              ></ProductImage>
              <ProductTags>
                {filtred.sale && <Sticker sale text="Акція" />}
                {filtred.new && <Sticker text="Новинка" />}
              </ProductTags>
              <ProductName>{filtred.name}</ProductName>
            </ProductCard>
          ))}
        </CartWrap>
        <Button
          // style={{ transform: "rotate(180deg)" }}
          onClick={handleNextSlide}
          disabled={
            currentSlide >= Math.max(0, products.length - itemsPerSlide) ||
            displayedProducts.length < 5
          }
          className={
            currentSlide === products.length - 2 ? "icon-disabled" : ""
          }
        >
          <AiOutlineRight />
          {/* <NextPrevButtonSvg
            style={{
              fill:
                displayedProducts.length < itemsPerSlide
                  ? "#ffffff"
                  : "#A03DA9",
            }}
          /> */}
        </Button>
      </SliderContainer>
    </div>
  );
};

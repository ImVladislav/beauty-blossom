import React, { useState } from "react";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Sticker from "../../shared/components/Sticker/Sticker";

import { useMedia } from "../../hooks/useMedia";

import {
  SliderContainer,
  Button,
  CartWrap,
  ProductCard,
  ProductImage,
  ProductTags,
  ProductName,
  TitleLine,
  TitleContainer,
  Title,
} from "./Slider.styled";
import { Container } from "react-bootstrap";

export const Slider = ({ products, title }) => {
  const { isDesktopScreen } = useMedia();
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = isDesktopScreen ? 5 : 4;

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    const maxSlide = Math.ceil(products.length - itemsPerSlide);
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const startIdx = currentSlide * itemsPerSlide;
  const endIdx = startIdx + itemsPerSlide;
  const displayedProducts = products.slice(startIdx, endIdx);

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <TitleLine />
      </TitleContainer>
      <SliderContainer>
        <Button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={currentSlide === 0 ? "icon-disabled" : ""}
        >
          <AiOutlineLeft />
        </Button>
        <CartWrap>
          {displayedProducts.map((filtered) => (
            <ProductCard to={`/product/${filtered.id}`} key={filtered.id}>
              <ProductImage src={filtered.images} alt={filtered.name} />
              <ProductTags>
                {filtered.sale && <Sticker sale text="Акція" />}
                {filtered.new && <Sticker text="Новинка" />}
              </ProductTags>
              <ProductName>{filtered.name}</ProductName>
            </ProductCard>
          ))}
        </CartWrap>
        <Button
          onClick={handleNextSlide}
          disabled={
            currentSlide >=
            Math.max(0, Math.ceil(products.length / itemsPerSlide) - 1)
          }
          className={
            currentSlide ===
            Math.max(0, Math.ceil(products.length / itemsPerSlide) - 1)
              ? "icon-disabled"
              : ""
          }
        >
          <AiOutlineRight />
        </Button>
      </SliderContainer>
    </Container>
  );
};

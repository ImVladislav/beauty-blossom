import React, { useState } from "react";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Sticker from "../../../shared/components/Sticker/Sticker";

import { useMedia } from "../../../hooks/useMedia";

import {
  SliderContainer,
  Button,
  CartWrap,
  ProductImage,
  ProductTags,
  ProductName,
  TitleLine,
  TitleContainer,
  Title,
  ProductCardLink,
  ProductImageWrap,
  Container,
} from "./SliderDesktop.styled";

export const SliderDesktop = ({ products, title }) => {
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
          className={currentSlide === 0 && "icon-disabled"}
        >
          <AiOutlineLeft />
        </Button>
        <CartWrap>
          {displayedProducts.map((filtered) => (
            <ProductCardLink to={`/product/${filtered.id}`} key={filtered.id}>
              <div>
                <ProductImageWrap>
                  <ProductImage src={filtered.images} alt={filtered.name} />
                </ProductImageWrap>
                <ProductTags>
                  {filtered.sale && <Sticker sale text="Акція" />}
                  {filtered.new && <Sticker text="Новинка" />}
                </ProductTags>
              </div>
              <ProductName>{filtered.name}</ProductName>
            </ProductCardLink>
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
              Math.max(0, Math.ceil(products.length / itemsPerSlide) - 1) &&
            "icon-disabled"
          }
        >
          <AiOutlineRight />
        </Button>
      </SliderContainer>
    </Container>
  );
};

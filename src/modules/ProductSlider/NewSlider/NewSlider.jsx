import React, { useState } from "react";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import { useMedia } from "../../../hooks/useMedia";

import {
  SliderContainer,
  Button,
  CartWrap,
  TitleContainer,
  Title,
  Container,
} from "./NewSlider.styled";
import ProductCard from "../../../shared/components/ProductCard/ProductCard";

export const NewSlider = ({ items, title }) => {
  const { isMobileScreen } = useMedia();
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = !isMobileScreen ? 3 : 2;

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    const maxSlide = Math.ceil(items.length - itemsPerSlide);
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const startIdx = currentSlide * itemsPerSlide;
  const endIdx = startIdx + itemsPerSlide;
  const displayedProducts = [...items].slice(startIdx, endIdx);

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
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
            <ProductCard products={filtered} key={filtered.id} slider />
          ))}
        </CartWrap>
        <Button
          onClick={handleNextSlide}
          disabled={
            currentSlide >=
            Math.max(0, Math.ceil(items.length / itemsPerSlide) - 1)
          }
          className={
            currentSlide ===
              Math.max(0, Math.ceil(items.length / itemsPerSlide) - 1) &&
            "icon-disabled"
          }
        >
          <AiOutlineRight />
        </Button>
      </SliderContainer>
    </Container>
  );
};

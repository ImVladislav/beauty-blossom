import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as NextPrevButtonSvg } from "../../images/NextPrev.svg";
import { useSelector } from "react-redux";
import { selectGoods } from "../../redux/products/selectors";



const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  white-space: nowrap; /* Забороняє перенесення на новий рядок */
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
`;

const ProductCard = styled.div`
  /* flex: 0 0 calc(16% - 20px); */
  width: 261px;
  margin-right: 10px; /* Відступ між карточками */
  scroll-snap-align: start;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  display: inline-block; /* Вирівнювання в ряд */
  vertical-align: top; /* Вирівнювання вгору */
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 0 7px 15px rgba(59, 55, 43, 0.25);
    z-index: 3;
    cursor: pointer;
  }
`;

const ProductImage = styled.img`
  width: 240px;
  height: 240px;
`;

const ProductName = styled.h3`
  margin: 10px 0;
`;

const ProductTags = styled.div`
  display: grid;
  justify-content: space-between;
  position: absolute;
  bottom: 60px;
`;

const SaleTag = styled.span`
  position: relative;
  background-color: #e93f11;
  color: #fff;
  padding: 5px;
  border-radius: 5px 5px 5px 0px;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 8px;
    height: 8px;
    background: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%208%208%22%20width%3D%228%22%20height%3D%228%22%3E%3ClinearGradient%20id%3D%22flag2-shadow%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%224%22%20y1%3D%227%22%20x2%3D%224%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20d%3D%22M0%200c.1.3.2.5.5.8l5.7%205.7c.7.7%201.8.8%201.8-.6V0H0z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22url%28%23flag2-shadow%29%22%2F%3E%3C%2Fsvg%3E")
      0 0 no-repeat;
  }
  margin: 2px;
`;

const NewTag = styled.span`
  position: relative;
  background-color: #7baf35;
  color: #fff;
  padding: 5px;
  border-radius: 5px 5px 5px 0px;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 8px;
    height: 8px;
    background: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%208%208%22%20width%3D%228%22%20height%3D%228%22%3E%3ClinearGradient%20id%3D%22flag2-shadow%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%224%22%20y1%3D%227%22%20x2%3D%224%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20d%3D%22M0%200c.1.3.2.5.5.8l5.7%205.7c.7.7%201.8.8%201.8-.6V0H0z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22url%28%23flag2-shadow%29%22%2F%3E%3C%2Fsvg%3E")
      0 0 no-repeat;
  }
  margin: 2px;
`;

const TagText = styled.p`
  font-size: 24px;
  margin: 0;
`;

const Button = styled.button`
  position: relative;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
  width: 30px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 13px;
    height: 24px;
    filter: grayscale(1); /* Застосувати чорно-білий колір за замовчуванням */
    transition: filter 0.3s; /* Анімація при наведенні */

    .icon-disabled {
      filter: grayscale(
        1
      ); /* Приклад ефекту для вимкненого стану (чорно-біле зображення) */
      cursor: not-allowed; /* Заборонити курсор при наведенні */
    }

    &:hover {
      filter: grayscale(0); /* Відмінити чорно-білий колір при наведенні */
      /* fill: red;  */
    }
  }
`;

const SliderHeaderToggle = styled.button`
  border: none;
  padding: 3px;
  color: ${(p) => p.theme.colors.accentColor};
  background-color: transparent;
  font-size: 29px;
  font-weight: bold;
  cursor: pointer;
  &:last-child {
    margin-left: 20px;
  }
`;

export const ProductSlider = () => {
  // const saleProducts = useSelector(selectSale);// всі sale
  // const newProducts = useSelector(selectNew);// всі new
  const products = useSelector(selectGoods); // всі продукти

  const [filteredProduct, setFilteredProduct] = useState(products);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSale, setShowSale] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const itemsPerSlide = 5;

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    console.log(displayedProducts);
    const maxSlide = Math.ceil(products.length - itemsPerSlide);
    if (currentSlide < maxSlide) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === maxSlide && endIdx < filteredProduct.length) {
      // Якщо досягнуто останній слайд, а ще є товари для показу, збільшити `startIdx` та `endIdx`
      setCurrentSlide(currentSlide + 1);
    }
  };

  const startIdx = currentSlide;
  const endIdx = startIdx + itemsPerSlide;
  const displayedProducts = filteredProduct.slice(startIdx, endIdx);

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
        return true; // Показати всі товари
      }
      if (showSale) {
        setCurrentSlide(0);
        return product.sale;
      }
      if (showNew) {
        setCurrentSlide(0);
        return product.new;
      }
      return true; // Показати всі товари, якщо фільтри не активовані
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
          Розпродаж
        </SliderHeaderToggle>
        <SliderHeaderToggle
          style={{ color: showNew ? "#7baf35" : "#A03DA9" }}
          onClick={toggleNewFilter}
        >
          Новинка
        </SliderHeaderToggle>
      </SliderContainer>
      <SliderContainer>
        <Button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className={currentSlide === 0 ? "icon-disabled" : ""}
        >
          <NextPrevButtonSvg
            style={{
              fill: currentSlide === 0 ? "#ffffff" : "#A03DA9",
            }}
          />
        </Button>

        {displayedProducts.map((filtred) => (
          <ProductCard key={filtred.id}>
            <ProductImage src={filtred.images} alt={filtred.name} >

              </ProductImage>
            <ProductName>{filtred.name}</ProductName>
            <ProductTags>
              {filtred.sale && (
                <SaleTag>
                  <TagText>Розпродаж</TagText>
                </SaleTag>
              )}
              {filtred.new && (
                <NewTag>
                  <TagText>Новинка</TagText>
                </NewTag>
              )}
            </ProductTags>
          </ProductCard>
        ))}
<Button
  style={{ transform: "rotate(180deg)" }}
  onClick={handleNextSlide}
  disabled={
    currentSlide >= Math.max(0, products.length - 5) ||
    displayedProducts.length < 5
  }
  className={currentSlide === products.length - 2 ? "icon-disabled" : ""}
>
          <NextPrevButtonSvg
    style={{
      fill:
        displayedProducts.length < 5
          ? "#ffffff"
          : "#A03DA9",
    }}
  />
</Button>
      </SliderContainer>
    </div>
  );
};

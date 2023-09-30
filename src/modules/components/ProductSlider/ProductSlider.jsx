import React, { useState } from "react";
import styled from "styled-components";
import NextPrevButtonSvg from "../Images/NextPrev.svg"

// Дані з товарами (ваші дані)
const products = [
  {
    id: 1,
    name: "Скраб ким чен ин",
    image: "посилання на фото товару 1",
    isSale: true, // Розпродаж
    isNew: false, // Новинка
  },
  {
    id: 2,
    name: "Парфум комунізму",
    image: "посилання на фото товару 2",
    isSale: false, // Не розпродаж
    isNew: true, // Новинка
    },
    {
    id: 3,
    name: "Тоталітарний шампунь",
    image: "посилання на фото товару 2",
    isSale: true, // Не розпродаж
    isNew: true, // Новинка
    },
      {
    id: 4,
    name: "Крем з ядерним еффектом",
    image: "посилання на фото товару 2",
    isSale: false, // Не розпродаж
    isNew: false, // Новинка
    },
        {
    id: 5,
    name: "Гель сонце нації",
    image: "посилання на фото товару 2",
    isSale: false, // Не розпродаж
    isNew: true, // Новинка
    },
          {
    id: 6,
    name: "Тональна пудра Кімерсен",
    image: "посилання на фото товару 2",
    isSale: false, // Не розпродаж
    isNew: true, // Новинка
    },
            {
    id: 7,
    name: "ТУТ МОГЛА БУТИ ВАША РЕКЛАМА",
    image: "посилання на фото товару 2",
    isSale: false, // Не розпродаж
    isNew: false, // Новинка
    },
              {
    id: 8,
    name: "Зніму порчу не дорого",
    image: "посилання на фото товару 2",
    isSale: true, // Не розпродаж
    isNew: false, // Новинка
    },
          {
    id: 9,
    name: "назва товару",
    image: "посилання на фото товару 2",
    isSale: true, // Не розпродаж
    isNew: true, // Новинка
    },
          {
    id: 10,
    name: "крем від проблем",
    image: "посилання на фото товару 2",
    isSale: false, // Не розпродаж
    isNew: true, // Новинка
  },

];


const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  white-space: nowrap; /* Забороняє перенесення на новий рядок */
`;

const ProductCard = styled.div`
  /* flex: 0 0 calc(16% - 20px); */
  width: 1440px;
  margin-right: 10px; /* Відступ між карточками */
  scroll-snap-align: start;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  display: inline-block; /* Вирівнювання в ряд */
  vertical-align: top; /* Вирівнювання вгору */
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const ProductName = styled.h3`
  margin: 10px 0;
`;

const ProductTags = styled.div`
display: grid;
  justify-content: space-between;
`;

const SaleTag = styled.span`
position: relative;
  background-color: #e93f11;
  color: #fff;
  padding: 5px;
  border-radius: 5px 5px 5px 0px;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 8px;
    height: 8px;
    background: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%208%208%22%20width%3D%228%22%20height%3D%228%22%3E%3ClinearGradient%20id%3D%22flag2-shadow%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%224%22%20y1%3D%227%22%20x2%3D%224%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20d%3D%22M0%200c.1.3.2.5.5.8l5.7%205.7c.7.7%201.8.8%201.8-.6V0H0z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22url%28%23flag2-shadow%29%22%2F%3E%3C%2Fsvg%3E") 0 0 no-repeat;
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
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 8px;
    height: 8px;
    background: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%208%208%22%20width%3D%228%22%20height%3D%228%22%3E%3ClinearGradient%20id%3D%22flag2-shadow%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%224%22%20y1%3D%227%22%20x2%3D%224%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20d%3D%22M0%200c.1.3.2.5.5.8l5.7%205.7c.7.7%201.8.8%201.8-.6V0H0z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22url%28%23flag2-shadow%29%22%2F%3E%3C%2Fsvg%3E") 0 0 no-repeat;
 
  }
  margin: 2px;
`;

const TagText = styled.p`
    font-size: 24px;
    margin: 0;
`


const Button = styled.button`

    display: block;
    margin-top: auto;
    margin-bottom: auto;
    width: 30px;
    background-color: transparent;
    border: none;

`

const ButtonSvg = styled.img`
    width: 13px;
    transform: rotate(180deg);
    &:disabled{
        fill: brown;
    }
`

const SliderHeaderToggle = styled.button`
    border: none;
    margin-right: 20px;
    margin-bottom: 40px;
    padding: 3px;
    color: #FF49AB;
    background-color: transparent;
    font-size: 29px;
    font-weight: bold;
`

export const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSale, setShowSale] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < Math.floor(products.length - 5)) {
      setCurrentSlide(currentSlide + 1);
    } 
  };

  // Обчислення діапазону товарів, які відображаються на поточному слайді
  const startIdx = currentSlide;
  const endIdx = startIdx + 5;
  const displayedProducts = products.slice(startIdx, endIdx);

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

  // Фільтрація товарів за фільтрами
  const filteredProducts = displayedProducts.filter((product) => {
    if (showSale && showNew) {
      return true; // Показати всі товари
    }
    if (showSale) {
      return product.isSale;
    }
    if (showNew) {
      return product.isNew;
    }
    return true; // Показати всі товари, якщо фільтри не активовані
  });


    return (
        <div>
            <SliderContainer>
                <SliderHeaderToggle
                    style={{ color: showSale ? "#e93f11" : "#FF49AB" }}
                    onClick={toggleSaleFilter}
                >
                    Розпродаж
                </SliderHeaderToggle>
                <SliderHeaderToggle
                    style={{ color: showNew ? "#7baf35" : "#FF49AB" }}
                    onClick={toggleNewFilter}
                >
                    Новинка
                </SliderHeaderToggle>
            </SliderContainer>
            <SliderContainer>
                <Button
                    onClick={handlePrevSlide}
                    disabled={currentSlide === 0}
                >
                <ButtonSvg src={NextPrevButtonSvg} alt="prev"/>
                    -
                </Button>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id}>
                        <ProductImage src={product.image} alt={product.name} />
                        <ProductName>{product.name}</ProductName>
                        <ProductTags>
                            {product.isSale && <SaleTag><TagText>Розпродаж</TagText></SaleTag>}
                            {product.isNew && <NewTag><TagText>Новинка</TagText></NewTag>}
                        </ProductTags>
                    </ProductCard>
                ))}
                <Button
                    onClick={handleNextSlide}
                    disabled={currentSlide === 2 } //костиль
                >
                    <ButtonSvg src={NextPrevButtonSvg} alt="next"/>
                </Button>
            </SliderContainer>
        </div>
    );
};
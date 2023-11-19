import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectGoods } from "../../redux/products/selectors";
import { setfilter } from "../../redux/filter/slice";

import { Container } from "../../shared/styles/Container";
import {
  BrandPageContainer,
  BrandCard,
  BrandItem,
  BrandName,
  Title,
} from "./AllBrands.styled";

const AllBrands = () => {
  const items = useSelector(selectGoods);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.target.innerText;

    dispatch(setfilter(name));
  };

  const brand = items
    ?.map((item) => item.brand)
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);

  const sortedBrands = brand
    .map((item) => item.charAt(0).toUpperCase()) // Виділяємо першу букву та переводимо її в верхній регістр
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, [])
    .sort();

  return (
    <main>
      <Container>
        <BrandPageContainer>
          {sortedBrands.map((letter, index) => (
            <BrandItem key={index}>
              <Title>{letter}</Title>
              {brand.map((item, itemIndex) => {
                if (item.charAt(0).toUpperCase() === letter) {
                  return (
                    <BrandCard key={itemIndex}>
                      <BrandName
                        to={`/brands/${item.toLowerCase().trim()}`}
                        onClick={handleClick}
                      >
                        {item}
                      </BrandName>
                    </BrandCard>
                  );
                }
                return null;
              })}
            </BrandItem>
          ))}
        </BrandPageContainer>
      </Container>
    </main>
  );
};

export default AllBrands;

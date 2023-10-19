import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectorGoods } from "../../redux/products/selectors";
import { setfilter } from "../../redux/filter/slice";

import { Container } from "../../shared/styles/Container";
import {
  BrandPageContainer,
  BrandCard,
  BrandItem,
  BrandName,
} from "./AllBrands.styled";

const AllBrands = () => {
  const items = useSelector(selectorGoods);
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
              <h2>{letter}</h2>
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

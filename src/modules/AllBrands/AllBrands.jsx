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
    .map((item) => item.charAt(0).toUpperCase())
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, [])
    .sort();

  return (
    <main style={{ display: "flex" }}>
      <Container>
        <BrandPageContainer>
          {sortedBrands.map((letter, index) => (
            <BrandItem key={index}>
              <Title>{letter}</Title>
              <BrandCard>
                {brand.map((item, itemIndex) => {
                  if (item.charAt(0).toUpperCase() === letter) {
                    return (
                      <div key={itemIndex}>
                        <BrandName
                          to={`/brands/${item.toLowerCase().trim()}`}
                          onClick={handleClick}
                        >
                          {item}
                        </BrandName>
                      </div>
                    );
                  }
                  return null;
                })}
              </BrandCard>
            </BrandItem>
          ))}
        </BrandPageContainer>
      </Container>
    </main>
  );
};

export default AllBrands;

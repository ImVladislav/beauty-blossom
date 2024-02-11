import React, { useEffect } from "react";
import {
  Container,
  CartWrap,
  Line,
  ProductCard,
  ProductImage,
  ProductName,
  Title,
} from "./SimilarProducts.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterBrand } from "../../redux/filter/selectors";
import { setfilter } from "../../redux/filter/slice";

export const SimilarProducts = ({ brand }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (brand) {
      dispatch(setfilter(brand));
    }
  }, [brand, dispatch]);

  const items = useSelector(selectFilterBrand);
  const limitedItems = items.slice(0, 3);
  return (
    <Container>
      <Title>Інші товари цього бренду</Title>
      <Line />
      <CartWrap>
        {limitedItems.map((filtred) => (
          <ProductCard to={`/product/${filtred.id}`} key={filtred.id}>
            <ProductImage
              src={filtred.images}
              alt={filtred.name}
            ></ProductImage>

            <ProductName>{filtred.name}</ProductName>
          </ProductCard>
        ))}
      </CartWrap>
    </Container>
  );
};

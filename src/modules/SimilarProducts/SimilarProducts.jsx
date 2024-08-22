import React, { useEffect } from "react";
import {
  Container,
  CartWrap,
  Line,
  BrandStyledLink,
  ProductImage,
  ProductName,
  Title,
  ProductCardLink,
} from "./SimilarProducts.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterBrand } from "../../redux/filter/selectors";
import { setfilter } from "../../redux/filter/slice";

export const SimilarProducts = ({ brand, productId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (brand) {
      dispatch(setfilter(brand));
    }
  }, [brand, dispatch]);

  const items = useSelector(selectFilterBrand);

  const limitedItems = [...items]
    .sort((a, b) => b.amount - a.amount)
    .filter((product) => product.id !== productId)
    .slice(0, 3);

  return (
    <>
      {!limitedItems.length <= 1 && (
        <Container>
          <BrandStyledLink to={`/brands/${brand.toLowerCase()}`}>
            <Title>iнші товари цього бренду</Title>
          </BrandStyledLink>
          <Line />
          <CartWrap>
            {limitedItems.map((filtred) => (
              <ProductCardLink
                to={`/product/${filtred.id}`}
                onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
                key={filtred.id}
              >
                <ProductImage
                  src={filtred.images}
                  alt={filtred.name}
                ></ProductImage>

                <ProductName>{filtred.name}</ProductName>
              </ProductCardLink>
            ))}
          </CartWrap>
        </Container>
      )}
    </>
  );
};

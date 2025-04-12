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

export const SimilarProducts = ({ brand, productId, setQuantity }) => {
  const dispatch = useDispatch();

  // Очищення пробілів у бренді перед передачею у фільтр
  useEffect(() => {
    if (brand) {
      dispatch(setfilter(brand.trim()));
    }
  }, [brand, dispatch]);

  const items = useSelector(selectFilterBrand);

  const limitedItems = [...items]
    .sort((a, b) => b.amount - a.amount)
    .filter((product) => product.id !== productId)
    .slice(0, 3);

  const handleLinkClick = () => {
    setQuantity(1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {limitedItems.length > 0 && (
        <Container>
          <BrandStyledLink to={`/brands/${brand.trim().toLowerCase()}`}>
            <Title>iнші товари цього бренду</Title>
          </BrandStyledLink>
          <Line />
          <CartWrap>
            {limitedItems.map((product) => (
              <ProductCardLink
                to={`/product/${product.id}`}
                onClick={handleLinkClick}
                key={product.id}
              >
                <ProductImage src={product.images} alt={product.name} />
                <ProductName>{product.name}</ProductName>
              </ProductCardLink>
            ))}
          </CartWrap>
        </Container>
      )}
    </>
  );
};

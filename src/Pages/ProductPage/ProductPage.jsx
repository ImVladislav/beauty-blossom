import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { } from "../../redux/products/selectors";
import { addToCart } from "../../redux/cart/slice";

import {
  PageContainer,
  ProductImage,
  WrapName,
  ProductName,
  ProductArticle,
  ProductBrand,
  ProductPrice,
  Info,
} from "./ProductPage.styled";
import Button from "../../shared/components/Button/Button";
import QuickOrderModal from "../../modules/QuickOrderModal/QuickOrderModal";
import { selectorGoods } from "../../redux/products/selectors";

const ProductPage = () => {
  const [inCart, setInCart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectorGoods);

  const product = products?.find((item) => +item.id === +id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setInCart(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <PageContainer>
      <div>
        <ProductImage src={product.images} alt={product.name} />
      </div>
      <Info>
        <WrapName>
          <ProductName>{product.name}</ProductName>
          <ProductArticle>
            <span>Артикул </span>
            {product.article}
          </ProductArticle>
        </WrapName>
        <ProductBrand>Бренд: {product.brand}</ProductBrand>
        <ProductPrice>${product.price}</ProductPrice>
        <Button
          text={inCart ? "У кошику" : "Купити"}
          onClick={handleAddToCart}
          disabled={inCart}
        />
        <button onClick={toggleModal}>Швидке замовлення</button>
        {isModalOpen && <QuickOrderModal onClose={toggleModal} />}
      </Info>
    </PageContainer>
  );
};

export default ProductPage;

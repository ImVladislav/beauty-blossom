import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { addToCart } from "../../../redux/cart/slice";
import { selectCart } from "../../../redux/cart/selectors";
import {
  loggedInSelector,
  optUserSelector,
} from "../../../redux/auth/selectors";

import Button from "../Button/Button";

import {
  ItemStyle,
  LinkStyle,
  ImageWrap,
  Image,
  Content,
  Name,
  Price,
  ButtonWrap,
  ProductTags,
  BrandName,
  PriceWrap,
  PriceName,
  Available,
  PriceSale,
} from "./ProductCard.styled";
import NewSticker from "../Sticker/NewSticker";

const ProductCard = ({ products, slider }) => {
  // eslint-disable-next-line
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const productCart = useSelector(selectCart);
  const optUser = useSelector(optUserSelector);
  const quantity = 1;
  const loggedIn = useSelector(loggedInSelector);

  const handleClickLink = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddToCart = async (event) => {
    event.preventDefault();

    const productCartFind = productCart?.find(
      (item) => +item.id === +products.id
    );
    if (!productCartFind) {
      dispatch(addToCart({ ...products, quantity }));
      if (loggedIn) {
        try {
          await axios.post(`/basket`, {
            name: products.name,
            article: products.article,
            code: products.code,
            amount: products.amount,
            description: products.description,
            priceOPT: products.priceOPT,
            quantity: quantity,
            price: products.price,
            brand: products.brand,
            images: products.images,
            new: products.new,
            sale: products.sale,
            category: products.category,
            subCategory: products.subCategory,
            subSubCategory: products.subSubCategory,
            productId: products.id,
          });
        } catch (error) {
          console.error("Помилка додавання товару в кошик:", error);
        }
      }
    }
    return;
  };

  const isProductInCart = productCart?.some(
    (item) => +item.code === +products.code
  );

  const isProductUnavailable = products.amount <= 0;

  return (
    <>
      <ItemStyle
        className={isProductUnavailable ? "unavailable" : ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        slider={slider}
      >
        <LinkStyle
          to={`/product/${products.id || products.productId}`}
          onClick={handleClickLink}
        >
          <ImageWrap slider={slider}>
            <Image itemProp="image" src={products.images} alt={products.name} />
          </ImageWrap>

          <ProductTags>
            {products.sale && <NewSticker text="Sale" sale slider={slider} />}
            {products.new && <NewSticker text="New" slider={slider} />}
          </ProductTags>

          <Content itemScope itemType="https://schema.org/Product">
            <BrandName slider={slider}>{products.brand}</BrandName>
            <Name itemProp="name" slider={slider}>
              {products.name}
            </Name>

            {optUser ? (
              <PriceWrap>
                <div>
                  <PriceName slider={slider}>оптова ціна</PriceName>
                  {products.amount > 0 && (
                    <Available slider={slider}>в наявності</Available>
                  )}
                </div>
                <div>
                  {products.priceOldOPT && (
                    <PriceSale slider={slider}>
                      {products.priceOldOPT} грн
                    </PriceSale>
                  )}
                  <Price slider={slider}>
                    {products.priceOPT}
                    <span>грн</span>
                  </Price>
                </div>
              </PriceWrap>
            ) : (
              <PriceWrap>
                <div>
                  <PriceName slider={slider}>роздрібна ціна</PriceName>
                  {products.amount > 0 && (
                    <Available slider={slider}>в наявності</Available>
                  )}
                </div>
                <div>
                  {products.priceOld && (
                    <PriceSale itemProp="price" slider={slider}>
                      {products.priceOld} грн
                    </PriceSale>
                  )}
                  <Price itemProp="price" slider={slider}>
                    {products.price} <span>грн</span>
                  </Price>
                </div>
              </PriceWrap>
            )}
          </Content>

          <>
            <ButtonWrap>
              <Button
                list
                // className="buy-button"
                type="button"
                slider={slider}
                text={
                  products.amount <= 0
                    ? "Немає в наявності"
                    : isProductInCart
                    ? "У кошику"
                    : "додати до кошика"
                }
                onClick={handleAddToCart}
                disabled={isProductInCart || products.amount <= 0}
              />
            </ButtonWrap>
          </>
        </LinkStyle>
      </ItemStyle>
    </>
  );
};

export default ProductCard;

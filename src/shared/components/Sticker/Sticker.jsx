import React from "react";
import {
  ProductSticker,
  ProductStickerWrap,
  StickerText,
} from "./Sticker.styled";

const Sticker = ({ text, newproduct, saleproduct }) => {
  return (
    <>
      <ProductStickerWrap $newproduct={newproduct} $saleproduct={saleproduct}>
        <ProductSticker $newproduct={newproduct} $saleproduct={saleproduct}>
          <StickerText>{text}</StickerText>
        </ProductSticker>
      </ProductStickerWrap>
    </>
  );
};

export default Sticker;

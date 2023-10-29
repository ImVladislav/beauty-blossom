import React from "react";

import {
  ProductSticker,
  ProductStickerWrap,
  StickerText,
} from "./Sticker.styled";

const Sticker = ({ text, newproduct, saleproduct }) => {
  return (
    <>
      <ProductStickerWrap
        text={text}
        newproduct={newproduct}
        saleproduct={saleproduct}
      >
        <ProductSticker
          text={text}
          newproduct={newproduct}
          saleproduct={saleproduct}
        >
          <StickerText>{text}</StickerText>
        </ProductSticker>
      </ProductStickerWrap>
    </>
  );
};

export default Sticker;

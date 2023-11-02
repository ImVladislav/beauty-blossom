import React from "react";
import {
  ProductSticker,
  ProductStickerWrap,
  StickerText,
} from "./Sticker.styled";

const Sticker = ({ text, sale }) => {
  return (
    <>
      {/* <ProductStickerWrap className={sale && "sale"}> */}
      <ProductSticker className={sale && "sale"}>
        <StickerText>{text}</StickerText>
      </ProductSticker>
      {/* </ProductStickerWrap> */}
    </>
  );
};

export default Sticker;

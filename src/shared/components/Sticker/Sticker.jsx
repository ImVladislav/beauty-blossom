import React from "react";
import { ProductSticker, StickerText } from "./Sticker.styled";

const Sticker = ({ text, sale }) => {
  return (
    <>
      <ProductSticker className={sale && "sale"}>
        <StickerText>{text}</StickerText>
      </ProductSticker>
    </>
  );
};

export default Sticker;

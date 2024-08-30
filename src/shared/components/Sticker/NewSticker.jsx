import React from "react";
import { Elips, TitleNew, TitleSale } from "./newStikers";

const NewSticker = ({ text, sale, slider, product }) => {
  return (
    <Elips slider={slider} product={product}>
      {sale ? (
        <TitleSale slider={slider} product={product}>
          {text}
        </TitleSale>
      ) : (
        <TitleNew slider={slider} product={product}>
          {text}
        </TitleNew>
      )}
    </Elips>
  );
};

export default NewSticker;

import React from "react";
import { Elips, TitleNew, TitleSale } from "./newStikers";

const NewSticker = ({ text, sale, slider }) => {
  return (
    <Elips slider={slider}>
      {sale ? (
        <TitleSale slider={slider}>{text}</TitleSale>
      ) : (
        <TitleNew slider={slider}>{text}</TitleNew>
      )}
    </Elips>
  );
};

export default NewSticker;

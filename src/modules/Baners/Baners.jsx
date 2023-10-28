import React from "react";
import {
  Wrap,
  ProductRetinol,
  ProductPurito,
  Background,
  LinkPurito,
  BanersWrap,
  LinkRetinol,
} from "./Baners.styled";
import retinol from "../../images/retinol.png";
import purito from "../../images/purito.png";

const Baners = () => {
  return (
    <>
      <Wrap>
        <BanersWrap>
          <ProductRetinol src={retinol} alt="retinol" />
          <LinkRetinol to="/brands/medi-peel">Дізнатись більше</LinkRetinol>
        </BanersWrap>
        <BanersWrap>
          <Background>
            <ProductPurito src={purito} alt="purito" />
          </Background>
          <LinkPurito to="/brands/purito">Дізнатись більше</LinkPurito>
        </BanersWrap>
      </Wrap>
    </>
  );
};

export default Baners;

import React from "react";
import {
  Wrap,
  ProductRetinol,
  ProductPurito,
  LinkPurito,
  BanersWrap,
  LinkRetinol,
} from "./Baners.styled";
import retinol from "../../images/retinol.png";
import purito from "../../images/purito.png";
import { useDispatch } from "react-redux";
import { setfilter } from "../../redux/filter/slice";
import { useMedia } from "../../hooks/useMedia";

const Baners = () => {
  const { screenType } = useMedia();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.currentTarget.name;
    dispatch(setfilter(name));
  };

  return (
    <>
      <Wrap>
        <BanersWrap>
          <ProductRetinol src={retinol} alt="retinol" />
          <LinkRetinol
            to="/brands/medi-peel"
            name="medi-peel"
            onClick={handleClick}
          >
            Дізнатись більше
          </LinkRetinol>
        </BanersWrap>
        {(screenType === "lg" || screenType === "desktop") && (
          <BanersWrap>
            <ProductPurito src={purito} alt="purito" />

            <LinkPurito to="/brands/purito" name="purito" onClick={handleClick}>
              Дізнатись більше
            </LinkPurito>
          </BanersWrap>
        )}
      </Wrap>
    </>
  );
};

export default Baners;

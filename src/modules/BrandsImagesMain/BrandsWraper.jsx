import {
  BrandImage,
  BrandLink,
  BrandsItem,
  BrandsList,
  FrontBrands,
  LayoutWarp,
} from "./BrandsWraperStyled";
import { ReactComponent as Brand1 } from "./BrandsImages/Dr_Jart-.svg";
import { ReactComponent as Brand2 } from "./BrandsImages/Esthetic-House.svg";
import { ReactComponent as Brand3 } from "./BrandsImages/La_dor.svg";
import { ReactComponent as Brand4 } from "./BrandsImages/Masil.svg";
import { ReactComponent as Brand5 } from "./BrandsImages/medi_peel_logo.svg";
import { ReactComponent as Brand6 } from "./BrandsImages/DAENG-GI-MEO-RI.svg";
import { useDispatch } from "react-redux";
import { setfilter } from "../../redux/filter/slice";

export const BrandsWraper = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const name = e.currentTarget.name;

    dispatch(setfilter(name));
  };
  return (
    <FrontBrands>
      <BrandsList>
        <BrandsItem>
          <BrandLink
            to="/brands/dr. jart+"
            name="dr. jart+"
            onClick={handleClick}
          >
            <Brand1 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/cp-1" name="cp-1" onClick={handleClick}>
            <Brand2 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/lador" name="lador" onClick={handleClick}>
            <Brand3 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/masil" name="masil" onClick={handleClick}>
            <Brand4 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink
            to="/brands/medi-peel"
            name="medi-peel"
            onClick={handleClick}
          >
            <Brand5 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink
            to="/brands/daeng gi meori"
            name="daeng gi meori"
            onClick={handleClick}
          >
            <Brand6 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
      </BrandsList>
    </FrontBrands>
  );
};

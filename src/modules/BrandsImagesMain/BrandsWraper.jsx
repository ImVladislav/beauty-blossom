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

export const BrandsWraper = () => {
  return (
    <FrontBrands>
      <BrandsList>
        <BrandsItem>
          <BrandLink to="/brands/DR. JART+">
            <Brand1 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/cp-1">
            <Brand2 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/lador">
            <Brand3 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/masil">
            <Brand4 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/medi-peel">
            <Brand5 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
        <BrandsItem>
          <BrandLink to="/brands/daeng gi meori">
            <Brand6 className="BrandSVG" />
          </BrandLink>
        </BrandsItem>
      </BrandsList>
    </FrontBrands>
  );
};

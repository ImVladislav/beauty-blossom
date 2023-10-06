import { BrandImage, BrandLink, BrandsItem, BrandsList, FrontBrands, LayoutWarp } from "./BrandsWraperStyled"
import Brand1 from "./BrandsImages/DAENG-GI-MEO-RI.svg"
import Brand2 from "./BrandsImages/Dr_Jart-.svg"
import Brand3 from "./BrandsImages/Esthetic-House.svg"
import Brand4 from "./BrandsImages/La_dor.svg"
import Brand5 from "./BrandsImages/Masil.svg"
import Brand6 from "./BrandsImages/medi_peel_logo.svg"

export const BrandsWraper = () => {
    return (
        <FrontBrands>
            <LayoutWarp>
                <BrandsList>
                    <BrandsItem>
                        <BrandLink to="*">
                            <BrandImage src={Brand1} />
                        </BrandLink>
                    </BrandsItem>
                    <BrandsItem>
                        <BrandLink to="*">
                            <BrandImage src={Brand2} />
                        </BrandLink>
                    </BrandsItem>
                    <BrandsItem>
                        <BrandLink to="*">
                            <BrandImage src={Brand3} />
                        </BrandLink>
                    </BrandsItem>
                    <BrandsItem>
                        <BrandLink to="*">
                            <BrandImage src={Brand4} />
                        </BrandLink>
                    </BrandsItem>
                    <BrandsItem>
                       <BrandLink to="*">
                            <BrandImage src={Brand5} />
                        </BrandLink>
                    </BrandsItem>
                    <BrandsItem>
                        <BrandLink to="*">
                            <BrandImage src={Brand6} />
                        </BrandLink>
                    </BrandsItem>
                </BrandsList>
            </LayoutWarp>
        </FrontBrands>
    );
}


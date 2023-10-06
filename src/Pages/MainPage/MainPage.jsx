import { BrandsWraper } from "../../modules/components/BrandsImagesMain/BrandsWraper";
import { Container } from "../../modules/components/Container";
import Banner from "../../modules/components/Images/bannerPopularBrands.jpg";
import { ProductSlider } from "../../modules/components/ProductSlider/ProductSlider";

import {
  MainBanner,
  BannerTitle,
  StyledLink,
  Thumb,
  Background,
} from "./MainPage.styled";

 const MainPage = () => {

    return (<Background>
        <Container>
            <MainBanner src={Banner} alt="banner"/>
            <Thumb>
                <BannerTitle>Популярні <br /> корейські бренди</BannerTitle>
                <StyledLink to="/terms_of_wholesale_cooperation">УМОВИ ОПТОВОЇ СПІВПРАЦІ</StyledLink>
            </Thumb>
        </Container>
        <ProductSlider/>
        <BrandsWraper/>
        </Background>
    );
};
export default MainPage




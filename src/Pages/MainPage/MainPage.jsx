
import { Container } from "../../modules/components/Container";
import Banner from "../../modules/components/Images/bannerPopularBrands.jpg"
import { ProductSlider } from "../../modules/components/ProductSlider/ProductSlider";
import { MainBanner, BannerTitle, StyledLink, Thumb} from "./MainPageStyled";


export const MainPage = () => {

    return (<div>
        <Container>
            <MainBanner src={Banner} alt="banner"/>
            <Thumb>
                <BannerTitle>Популярні <br /> корейські бренди</BannerTitle>
                <StyledLink to="/terms_of_wholesale_cooperation">УМОВИ ОПТОВОЇ СПІВПРАЦІ</StyledLink>
            </Thumb>
        </Container>
        <ProductSlider />
        </div>
    );
}
import { Container } from "../../modules/components/Container";
import { Footer } from "../../modules/components/Footer/Footer";
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
  return (
    <Background>
      <Container>
        <MainBanner src={Banner} alt="banner" />
        <Thumb>
          <BannerTitle>
            Популярні <br /> корейські бренди
          </BannerTitle>
          <StyledLink to="/terms_of_wholesale_cooperation">
            УМОВИ ОПТОВОЇ СПІВПРАЦІ
          </StyledLink>
        </Thumb>
      </Container>
      <ProductSlider />
      <Footer />
    </Background>
  );
};
export default MainPage;

import AboutUs from "../../modules/AboutUs/AboutUs";
import { BrandsWraper } from "../../modules/BrandsImagesMain/BrandsWraper";
import { Container } from "../../shared/styles/Container";
import Banner from "../../images/bannerPopularBrands.jpg";
import { ProductSlider } from "../../modules/ProductSlider/ProductSlider";
import product from "../../images/productsBaner.png";
import {
  MainBanner,
  BannerTitle,
  StyledLink,
  Thumb,
  Background,
  BannerSubTitle,
  TextBlock,
  ProductImg,
  Product,
  BottomBanerText,
} from "./MainPage.styled";

const MainPage = () => {
  return (
    <Background>
      <Container style={{ maxWidth: "100%" }}>
        {/* <MainBanner src={Banner} alt="banner" /> */}
        <Thumb>
          <Container>
          
        <ProductImg >
          <Product src={product} alt="product"/>
          </ProductImg>
          <TextBlock>
            <BannerTitle>
              ПОПУЛЯРНІ <br /> КОРЕЙСЬКІ БРЕНДИ
            </BannerTitle>
            <BannerSubTitle>
              {" "}
              ВЕЛИКИЙ АСОРТИМЕНТ ТА ОРИГіНАЛЬНі ТОВАРИ{" "}
            </BannerSubTitle>
            <StyledLink to="/wholesaleProgram">ОПТОВА СПІВПРАЦЯ*</StyledLink>
              <BottomBanerText> *ТИСНИ ЩОБ ДІЗНАТИСЬ УМОВИ</BottomBanerText>
            </TextBlock>

            </Container>
        </Thumb>
      </Container>
      <ProductSlider />
      <AboutUs />
      <BrandsWraper />
    </Background>
  );
};
export default MainPage;

import AboutUs from "../../modules/AboutUs/AboutUs";
import { BrandsWraper } from "../../modules/BrandsImagesMain/BrandsWraper";
import { Container } from "../../shared/styles/Container";
import { ProductSlider } from "../../modules/ProductSlider/ProductSlider";
import product from "../../images/productsBaner.png";
import {
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
import Hero from "../../modules/Hero/Hero";
import Baners from "../../modules/Baners/Baners";
import { useEffect, useState } from "react";
import { Loader } from "../../shared/components/Loader/Loader";
import { useMedia } from "../../hooks/useMedia";

const MainPage = () => {
  const { isDesktopScreen, isMobileScreen } = useMedia();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    // <Container>
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Hero />
          <ProductSlider />
          <BrandsWraper />
          {!isMobileScreen && <AboutUs />}

          <Baners />
        </div>
      )}
    </>
    // </Container>
    // <Background>
    //   <Container style={{ maxWidth: "100%" }}>
    //     {/* <MainBanner src={Banner} alt="banner" /> */}
    //     <Thumb>
    //       <Container>
    //         <ProductImg>
    //           <Product src={product} alt="product" />
    //         </ProductImg>
    //         <TextBlock>
    //           <BannerTitle>
    //             ПОПУЛЯРНІ <br /> КОРЕЙСЬКІ БРЕНДИ
    //           </BannerTitle>
    //           <BannerSubTitle>
    //             {" "}
    //             ВЕЛИКИЙ АСОРТИМЕНТ ТА ОРИГіНАЛЬНі ТОВАРИ{" "}
    //           </BannerSubTitle>
    //           <StyledLink to="/wholesaleProgram">ОПТОВА СПІВПРАЦЯ*</StyledLink>
    //           <BottomBanerText> *ТИСНИ ЩОБ ДІЗНАТИСЬ УМОВИ</BottomBanerText>
    //         </TextBlock>
    //       </Container>
    //     </Thumb>
    //   </Container>
    //   <ProductSlider />
    //   <AboutUs />
    //   <BrandsWraper />
    // </Background>
  );
};
export default MainPage;
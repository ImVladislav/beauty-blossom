import AboutUs from "../../modules/components/AboutUs/AboutUs";
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
  BannerSubTitle,
  TextBlock,
} from "./MainPage.styled";

 const MainPage = () => {

     return (<Background>
         <Container style={{maxWidth:'100%'}}>
             {/* <MainBanner src={Banner} alt="banner" /> */}
             <Thumb>
                 <TextBlock>
                 <BannerTitle>Популярні <br /> корейські бренди</BannerTitle>
                 <BannerSubTitle> Великий асортимент та оригінальні товари </BannerSubTitle>
                 <StyledLink to="/wholesaleProgram">
                     Оптова співпраця
                     </StyledLink>
                     </TextBlock>
             </Thumb>
         </Container>
         <ProductSlider />
         <AboutUs />
         <BrandsWraper />
     </Background>
     );
};
export default MainPage




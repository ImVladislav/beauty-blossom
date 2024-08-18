import { useEffect, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

import AboutUs from "../../modules/AboutUs/AboutUs";
import { BrandsWraper } from "../../modules/BrandsImagesMain/BrandsWraper";
import { ProductSlider } from "../../modules/ProductSlider/ProductSlider";
// import Hero from "../../modules/HeroOld/Hero";
// import Baners from "../../modules/Baners/Baners";
import { Loader } from "../../shared/components/Loader/Loader";
import { SliderDesktop } from "../../modules/ProductSlider/SliderDesktop/SliderDesktop";
import { selectNew, selectSale } from "../../redux/products/selectors";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import HeroBaner from "../../modules/Hero/HeroBaner";

const MainPage = () => {
  const { isMobileScreen } = useMedia();
  const [loading, setLoading] = useState(true);
  const newProducts = useSelector(selectNew);
  const saleProducts = useSelector(selectSale);

  useEffect(() => {
    setLoading(false);
  }, []);

  const newFiltred = newProducts.filter((item) => !item.amount <= 0);
  const saleFiltred = saleProducts.filter((item) => !item.amount <= 0);
  // console.log(newFiltred);
  // console.log(saleFiltred);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div style={{ marginBottom: "40px" }}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Beauty Blossom</title>
            <meta name="description" content="Головна сторінка" />
          </Helmet>
          <HeroBaner />

          {isMobileScreen ? (
            <ProductSlider products={[...newFiltred, ...saleFiltred]} />
          ) : (
            <>
              <SliderDesktop products={newFiltred} title="Новинки" />
              <SliderDesktop products={saleFiltred} title="Акції" />
            </>
          )}
          <BrandsWraper />
          {/* {!isMobileScreen && <AboutUs />} */}
          <AboutUs />
          {/* <Baners /> */}
        </div>
      )}
    </>
  );
};
export default MainPage;

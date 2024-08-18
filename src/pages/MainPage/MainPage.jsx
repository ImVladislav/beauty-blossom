import { useEffect, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

import AboutUs from "../../modules/AboutUs/AboutUs";
import { BrandsWraper } from "../../modules/BrandsImagesMain/BrandsWraper";

import Baners from "../../modules/Baners/Baners";
import { Loader } from "../../shared/components/Loader/Loader";
import { SliderDesktop } from "../../modules/ProductSlider/SliderDesktop/SliderDesktop";
import { selectNew, selectSale } from "../../redux/products/selectors";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import HeroBaner from "../../modules/Hero/HeroBaner";

import NewSlider from "../../modules/ProductSlider/NewSlider/NewSlider";

const MainPage = () => {
  const { isMobileScreen, isDesktopScreen } = useMedia();

  const [loading, setLoading] = useState(true);
  const newProducts = useSelector(selectNew);
  const saleProducts = useSelector(selectSale);

  useEffect(() => {
    setLoading(false);
  }, []);

  const newFiltred = newProducts.filter((item) => !item.amount <= 0);
  const saleFiltred = saleProducts.filter((item) => !item.amount <= 0);

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

          {isDesktopScreen ? (
            <>
              <NewSlider
                items={saleFiltred.slice(0, 8)}
                title={"товари зі зниженною ціною"}
              />
              <NewSlider
                items={newFiltred.slice(0, 8)}
                title={"нове постачання"}
              />
            </>
          ) : (
            <>
              <SliderDesktop
                products={saleFiltred}
                title="товари зі зниженною ціною"
              />
              <SliderDesktop products={newFiltred} title="нове постачання" />
            </>
          )}
          <BrandsWraper />
          {!isMobileScreen && <AboutUs />}

          <Baners />
        </div>
      )}
    </>
  );
};
export default MainPage;

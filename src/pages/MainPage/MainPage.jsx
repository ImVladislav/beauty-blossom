import { useEffect, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

import AboutUs from "../../modules/AboutUs/AboutUs";
import { BrandsWraper } from "../../modules/BrandsImagesMain/BrandsWraper";

import { Loader } from "../../shared/components/Loader/Loader";

import { NewSlider } from "../../modules/ProductSlider/NewSlider/NewSlider";
import { SliderDesktop } from "../../modules/ProductSlider/SliderDesktop/SliderDesktop";

import { selectNew, selectSale } from "../../redux/products/selectors";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
// import HeroBaner from "../../modules/Hero/HeroBaner";
import Hero from "../../modules/HeroTrimay/Hero";

import CategoryList from "../../modules/MainCategotyList/CategoryList";

const MainPage = () => {
  const { isDesktopScreen } = useMedia();

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
          <Hero />

          {isDesktopScreen ? (
            <>
              <SliderDesktop
                items={saleFiltred.slice(0, 8)}
                title="товари зі зниженною ціною"
              />
              <SliderDesktop
                items={newFiltred.slice(0, 8)}
                title="нове постачання"
              />
            </>
          ) : (
            <>
              <NewSlider
                items={saleFiltred}
                title={"товари зі зниженною ціною"}
              />
              <NewSlider items={newFiltred} title={"нове постачання"} />
            </>
          )}
          <CategoryList />
          {/* <BrandsWraper /> */}

          <AboutUs />
        </div>
      )}
    </>
  );
};
export default MainPage;

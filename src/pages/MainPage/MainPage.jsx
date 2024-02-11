import { useEffect, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

import AboutUs from "../../modules/AboutUs/AboutUs";
import { BrandsWraper } from "../../modules/BrandsImagesMain/BrandsWraper";
import { ProductSlider } from "../../modules/ProductSlider/ProductSlider";
import Hero from "../../modules/Hero/Hero";
import Baners from "../../modules/Baners/Baners";
import { Loader } from "../../shared/components/Loader/Loader";
import { Slider } from "../../modules/ProductSlider/SliderDesktop/SliderDesktop";
import { selectNew, selectSale } from "../../redux/products/selectors";
import { useSelector } from "react-redux";

const MainPage = () => {
  const { isMobileScreen } = useMedia();
  const [loading, setLoading] = useState(true);
  const newProducts = useSelector(selectNew);
  const saleProducts = useSelector(selectSale);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Hero />

          {isMobileScreen ? (
            <ProductSlider products={[...newProducts, ...saleProducts]} />
          ) : (
            <>
              <Slider products={newProducts} title="Новинки" />
              <Slider products={saleProducts} title="Акції" />
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

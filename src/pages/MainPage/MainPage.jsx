import { useEffect, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

import AboutUs from "../../modules/AboutUs/AboutUs";
import { BrandsWraper } from "../../modules/BrandsImagesMain/BrandsWraper";
import { ProductSlider } from "../../modules/ProductSlider/ProductSlider";
import Hero from "../../modules/Hero/Hero";
import Baners from "../../modules/Baners/Baners";
import { Loader } from "../../shared/components/Loader/Loader";

const MainPage = () => {
  const { isMobileScreen } = useMedia();
  const [loading, setLoading] = useState(true);

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
          <ProductSlider />
          <BrandsWraper />
          {!isMobileScreen && <AboutUs />}

          <Baners />
        </div>
      )}
    </>
  );
};
export default MainPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import { selectFilterBrand } from "../../redux/filter/selectors";
import { setfilter } from "../../redux/filter/slice";

import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Container } from "../../shared/styles/Container";
import { Helmet } from "react-helmet";

import {
  BrandInfo,
  BrandInfoWrap,
  Desc,
  Image,
  TextInner,
  Title,
} from "./Brands.styled";

const Brands = () => {
  const { brands } = useParams();
  const dispatch = useDispatch();
  const [infoBrand, setInfoBrand] = useState({});

  useEffect(() => {
    if (brands) {
      setInfoBrand(null);
      dispatch(setfilter(brands));
      getBrand();
    }
  }, [brands, dispatch]);

  // info brand
  const getBrand = async () => {
    try {
      // const { data } = await axios.get(`brands/name`, { brand: brands });
      const { data } = await axios.get(`/brands`);

      const foundBrand = data.find(
        (item) => item.name.toLowerCase() === brands.toLowerCase()
      );

      if (foundBrand) {
        setInfoBrand(foundBrand);
      } else {
        setInfoBrand(null);
      }
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  const items = useSelector(selectFilterBrand);
  const sortedItems = items
    .filter((item) => (item.new || item.sale) && item.amount !== 0)
    .concat(
      items.filter((item) => !(item.new || item.sale) && item.amount !== 0)
    )
    .concat(
      items.filter((item) => (item.new || item.sale) && item.amount === 0)
    )
    .concat(
      items.filter((item) => !(item.new || item.sale) && item.amount === 0)
    );

  const allItemsNmeForMetaHelmet = sortedItems.map((item) => item.name);
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beauty Blossom | Бренди </title>
        <meta name="description" content={allItemsNmeForMetaHelmet} />
        <meta name="keywords" content={allItemsNmeForMetaHelmet} />
      </Helmet>

      <Container>
        {/* {infoBrand && (
          <BrandInfo>
            <BrandInfoWrap>
              <Image src={infoBrand.logo} alt={infoBrand.name} width={70} />
              <TextInner>
                <Title>{infoBrand.title}</Title>
                <Desc>{infoBrand.description}</Desc>
              </TextInner>
            </BrandInfoWrap>
          </BrandInfo>
        )} */}

        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default Brands;

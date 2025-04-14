import React, { useEffect, useState } from "react";
import {
  selectFilterCategory,
  selectFilterCategorySub,
  selectFilterCategorySubSub,
} from "../../redux/filter/selectors";

import { useSelector } from "react-redux";

import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SortCategory = () => {
  const categoryItems = useSelector(selectFilterCategory);
  const subCategoryItems = useSelector(selectFilterCategorySub);
  const subSubCategoryItems = useSelector(selectFilterCategorySubSub);



  // console.log(categoryItems);
  // const navigateToChild = () => {
  //   navigate("/child", { state: { parentPathname: window.location.pathname } });
  // };
  // console.log(window.location.pathname);
  // eslint-disable-next-line no-unused-vars


  const location = useLocation();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(location);
  // console.log(location.pathname);
  



  useEffect(() => {
    const fetchGoodsByCategory = async () => {
      try {
        setLoading(true);
  
        // Обрізаємо зайві слеші якщо є
        const rawCategory = location.pathname.replace(/\/+$/, '');
  
        // Формуємо URL вручну, щоб зберегти /
        const url = `https://beauty-blossom-backend.onrender.com/api/goods?category=${rawCategory}`;
  
        const res = await axios.get(url);
        setCategoryProducts(res.data.goods);
      } catch (error) {
        console.error("❌ Error loading products:", error.message);
        setCategoryProducts([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchGoodsByCategory();
  }, [location.pathname]);

  
// console.log(categoryProducts);






  let products = categoryProducts;

  const sortedItems = products
    .filter((item) => (item.new || item.sale) && item.amount !== 0)
    .concat(
      products.filter((item) => !(item.new || item.sale) && item.amount !== 0)
    )
    .concat(
      products.filter((item) => (item.new || item.sale) && item.amount === 0)
    )
    .concat(
      products.filter((item) => !(item.new || item.sale) && item.amount === 0)
    );

    


  return (
    <main>
      <Container>
        <ProductsList items={sortedItems} />
      </Container>
    </main>
  );
};

export default SortCategory;

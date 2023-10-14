// import { createSelector } from "@reduxjs/toolkit";

// export const getProducts = (store) => store.products;
export const selectorGoods = (store) => store.goods.items;

// export const goodsSelector = createSelector(
//   (state) => state.products, // Це посилається на ваш редюсер для товарів
//   (products) => products.items // Це вибирає поле 'items' зі стейту редюсера товарів
// );

export const selectSale = (store) =>
  store.goods.items.filter((item) => item.sale === true);

export const selectNew = (store) =>
  store.goods.items.filter((item) => item.new === true);

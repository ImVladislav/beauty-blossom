// import { createSelector } from "@reduxjs/toolkit";

export const getProducts = (store) => store.products;
export const goodsSelector = (store) => store.goods;



// export const goodsSelector = createSelector(
//   (state) => state.products, // Це посилається на ваш редюсер для товарів
//   (products) => products.items // Це вибирає поле 'items' зі стейту редюсера товарів
// );
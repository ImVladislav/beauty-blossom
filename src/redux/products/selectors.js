import { createSelector } from "@reduxjs/toolkit";

export const selectGoods = (store) => store.goods.items;
export const selectNewPost = (store) => store.selectNewPost;
export const refreshSelectorGoods = (state) => state.goods.isRefreshing;

export const selectSale = createSelector(selectGoods, (items) =>
  items.filter((item) => item.sale === true)
);

export const selectNew = createSelector(selectGoods, (items) =>
  items.filter((item) => item.new === true)
);

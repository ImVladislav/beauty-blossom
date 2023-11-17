import { createSelector } from "reselect";

const selectGoods = (state) => state.goods;
const selectSearch = (state) => state.search;

export const selectSearchQuery = createSelector(
  [selectSearch, selectGoods],
  (search, goods) => {
    if (!search) {
      return goods;
    }
    const result = goods.items.filter(({ name }) => {
      return name.toLowerCase().includes(search.toLowerCase());
    });
    return result;
  }
);

export const selectSearchQueryCode = createSelector(
  [selectSearch, selectGoods],
  (search, goods) => {
    if (!search) {
      return goods;
    }
    const searchQuery = search.trim();
    if (!searchQuery) {
      return goods;
    }

    const results = goods.items.filter(({ code }) => {
      const orderCodeString = code.toString();
      return orderCodeString.includes(searchQuery);
    });
    return results;
  }
);

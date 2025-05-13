import { createSelector } from "reselect";

import { selectGoods } from "../products/selectors";
const selectFilter = (store) => store.filter;

// const selectGoods = (store) => store.goods.items;
export const selectFilterBrand = createSelector(
  [selectFilter, selectGoods],
  (filter, goods) => {
    if (!filter) {
      return goods;
    }

    return goods.filter(
      ({ brand }) =>
        brand?.toLowerCase().trim() === filter?.toLowerCase().trim()
    );
  }
);

export const selectFilterCategory = createSelector(
  [selectFilter, selectGoods],
  (filter, goods) => {
    if (!filter) {
      return goods;
    }


    return goods.filter(({ category }) =>
      category.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilterCategorySub = createSelector(
  [selectFilter, selectGoods],
  (filter, goods) => {
    if (!filter) {
      return goods;
    }

    return goods.filter(({ subCategory }) =>
      subCategory?.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectFilterCategorySubSub = createSelector(
  [selectFilter, selectGoods],
  (filter, goods) => {
    if (!filter) {
      return goods;
    }
    console.log(filter);
    

    return goods.filter(({ subSubCategory }) =>
      subSubCategory?.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

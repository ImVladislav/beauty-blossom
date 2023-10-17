export const selectFilterBrand = (store) => {
  const { filter, goods } = store;
  if (!filter) {
    return goods;
  }

  const result = goods.items.filter(({ brand }) => {
    return brand.toLowerCase().includes(filter.toLowerCase());
  });
  return result;
};

export const selectFilterCategory = (store) => {
  const { filter, goods } = store;
  if (!filter) {
    return goods;
  }

  const result = goods.items.filter(({ category }) => {
    return category.toLowerCase().includes(filter.toLowerCase());
  });
  return result;
};

export const selectFilterCategorySub = (store) => {
  const { filter, goods } = store;
  if (!filter) {
    return goods;
  }

  const result = goods.items.filter(({ subCategory }) => {
    return subCategory?.toLowerCase().includes(filter.toLowerCase());
  });

  return result;
};

export const selectFilterCategorySubSub = (store) => {
  const { filter, goods } = store;
  if (!filter) {
    return goods;
  }

  const result = goods.items.filter(({ subSubCategory }) => {
    return subSubCategory?.toLowerCase().includes(filter.toLowerCase());
  });

  return result;
};

export const selectFilter = (store) => store.filter;

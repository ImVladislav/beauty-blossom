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

export const getFilter = (store) => {
  const { filter, products } = store;
  if (!filter) {
    return products;
  }
  const result = products.filter(({ brand }) => {
    return brand.toLowerCase().includes(filter.toLowerCase());
  });
  return result;
};

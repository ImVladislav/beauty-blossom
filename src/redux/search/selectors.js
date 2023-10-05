// export const selectSearchQuery = (store) => store.search;
export const selectSearchQuery = (store) => {
  const { search, products } = store;
  if (!search) {
    return products;
  }
  const result = products.filter(({ name }) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });
  return result;
};

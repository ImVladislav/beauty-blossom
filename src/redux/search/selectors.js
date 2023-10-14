export const selectSearchQuery = (store) => {
  const { search, goods } = store;
  if (!search) {
    return goods;
  }
  const result = goods.items.filter(({ name }) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });
  return result;
};

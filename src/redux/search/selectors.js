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

export const selectSearchQueryCode = (store) => {
  const { search, goods } = store;
  if (!search) {
    return goods;
  }
  const searchQuery = search.trim();
  if (!searchQuery) {
    return goods;
  }

  const results = goods.items.filter(({ code }) => {
    // Перетворюємо номер замовлення у рядок для подальшого пошуку
    const orderCodeString = code.toString();
    // Перевіряємо, чи рядок номера замовлення містить введений користувачем пошуковий запит
    return orderCodeString.includes(searchQuery);
  });
  return results;
};

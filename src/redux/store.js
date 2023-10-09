import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/slice";
import filterReducer from "./filter/slice";
import searchReducer from "./search/slice";
import cartReducer from "./cart/slice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import filterReducer from "./filter/slice";
import searchReducer from "./search/slice";
import cartReducer from "./cart/slice";
import { goodsReducer } from "./products/slice";
const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    cart: cartReducer,
    goods: goodsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

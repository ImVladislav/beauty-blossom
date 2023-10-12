import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import filterReducer from "./filter/slice";
import searchReducer from "./search/slice";
import cartReducer from "./cart/slice";
import { goodsReducer } from "./goods/goodSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
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

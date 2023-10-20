import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import filterReducer from "./filter/slice";
import searchReducer from "./search/slice";
import cartReducer from "./cart/slice";
import { goodsReducer } from "./products/slice";
import { authReducer } from "./auth/authSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
  search: searchReducer,
  cart: cartReducer,
  goods: goodsReducer,
});


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
  auth: persistedReducer,
  filter: filterReducer,
  search: searchReducer,
  cart: cartReducer,
  goods: goodsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);

export { store, persistor };





// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";


// import filterReducer from "./filter/slice";
// import searchReducer from "./search/slice";
// import cartReducer from "./cart/slice";
// import { goodsReducer } from "./products/slice";
// import { authReducer } from "./auth/authSlice";


// const rootReducer = combineReducers({
//   auth: authReducer,
//   filter: filterReducer,
//   search: searchReducer,
//   cart: cartReducer,
//   goods: goodsReducer,
// });
// const persistConfig = {
//    key: "root",
//     storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });

// const persistor = persistStore(store);

// export { store, persistor };

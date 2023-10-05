import { createSlice, nanoid } from "@reduxjs/toolkit";

import data from "./../../tovary.json";

const productsSlice = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    addProduct: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: (data) => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteProduct: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;

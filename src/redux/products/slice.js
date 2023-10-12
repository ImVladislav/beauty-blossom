import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getGoods } from "../operations";

const initialState = []; 

const productsSlice = createSlice({
  name: "products",
  initialState, 
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
  extraReducers: (builder) => {
    builder.addCase(getGoods.fulfilled, (state, action) => {
      return action.payload; // Замініть стан даними з getGoods
    });
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
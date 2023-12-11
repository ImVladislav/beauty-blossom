import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],
  reducers: {
    setCart: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
    addToCart: (state, action) => {
      const { _id, quantity } = action.payload;

      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeQuantityCart: (state, action) => {
      const { _id, quantity } = action.payload;

      const existingItemIndex = state.findIndex((item) => item._id === _id);

      if (existingItemIndex !== -1) {
        const existingItem = state[existingItemIndex];

        if (existingItem.quantity > 1) {
          existingItem.quantity = quantity;
        } else {
          state.splice(existingItemIndex, 1);
        }
      }
    },
    removeCart: (state, action) => {
      const { itemId } = action.payload;

      const updatedCart = state.filter((item) => item._id !== itemId);

      return updatedCart;
    },
    deleteAll: () => {
      return [];
    },
  },
});

export const { setCart, addToCart, removeQuantityCart, removeCart, deleteAll } =
  cartSlice.actions;
export default cartSlice.reducer;

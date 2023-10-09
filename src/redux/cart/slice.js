import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const updatedCart = state.filter((item) => item.id !== productIdToRemove);
      state = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;

      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        // Якщо товар вже є в корзині, збільшуємо кількість
        existingItem.quantity = quantity;
      } else {
        // Інакше додаємо новий товар до корзини
        state.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeQuantityCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        const existingItem = state[existingItemIndex];

        if (existingItem.quantity > 1) {
          existingItem.quantity = quantity;
        } else {
          state.splice(existingItemIndex, 1);
        }

        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeCart: (state, action) => {
      const { itemId } = action.payload;
      const updatedCart = state.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
        deleteAll: () => {
      
      localStorage.removeItem("cart"); 
  return [];
    },
  },
});

export const { deleteAll, addToCart, removeQuantityCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

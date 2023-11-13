import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],
  reducers: {
    setCart: (state, action) => {
      state.length = 0; // Очистити існуючий масив
      state.push(...action.payload); // Додати нові елементи
    },
    addToCart: (state, action) => {
      const { _id, quantity } = action.payload;

      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        // Якщо товар вже є в корзині, збільшуємо кількість
        existingItem.quantity = quantity;
      } else {
        // Інакше додаємо новий товар до корзини
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

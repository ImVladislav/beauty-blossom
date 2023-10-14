import { createSlice } from "@reduxjs/toolkit";
import { getGoods } from "../operations";

export const goodsSlice = createSlice({
  name: "goods",
  initialState: { items: [] }, // Змінено ініціалізацію початкового стану
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGoods.fulfilled, (state, action) => {
        state.items = action.payload; // Оновлюємо поле 'items' з отриманими товарами
      })
      .addCase(getGoods.rejected, (state, action) => {
        // Обробка помилки
      });
  },
});

export const goodsReducer = goodsSlice.reducer;

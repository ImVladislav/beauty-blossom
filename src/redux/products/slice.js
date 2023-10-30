import { createSlice } from "@reduxjs/toolkit";
import { getGoods } from "../operations";

export const goodsSlice = createSlice({
  name: "goods",
  initialState: { items: [], isRefreshing: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGoods.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(getGoods.fulfilled, (state, action) => {
        state.items = action.payload; // Оновлюємо поле 'items' з отриманими товарами
        state.isRefreshing = false;
      })
      .addCase(getGoods.rejected, (state, action) => {
        // Обробка помилки
        state.isRefreshing = false;
      });
  },
});

export const goodsReducer = goodsSlice.reducer;

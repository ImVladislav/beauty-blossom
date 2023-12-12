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
        state.items = action.payload;
        state.isRefreshing = false;
      })
      .addCase(getGoods.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const goodsReducer = goodsSlice.reducer;

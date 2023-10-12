import { createSlice } from "@reduxjs/toolkit";
import { getGoods } from "../operations";




export const goodsSlice = createSlice({
  name: "goods",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGoods.fulfilled, (_, action ) => {
      return action.payload;
    });
  },
});

export const goodsReducer = goodsSlice.reducer;
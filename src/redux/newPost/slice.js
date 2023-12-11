import { createSlice } from "@reduxjs/toolkit";
import { getNewPost } from "../operations";

const newPostslice = createSlice({
  name: "newPost",
  initialState: "",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewPost.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getNewPost.rejected, (state, action) => {
        // Обробка помилки
      });
  },
});

export const newPostReducer = newPostslice.reducer;

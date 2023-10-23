import { createSlice } from "@reduxjs/toolkit";
import { getNewPost } from "../operations";


const newPostslice = createSlice({
  name: "newPost",
  initialState: '', // Змінено ініціалізацію початкового стану
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewPost.fulfilled, (state, action) => {
        state.items = action.payload; // Оновлюємо поле 'items' з отриманими товарами
      })
      .addCase(getNewPost.rejected, (state, action) => {
        // Обробка помилки
      });
  },
});

export const newPostReducer = newPostslice.reducer;
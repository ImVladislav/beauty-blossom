import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setfilter: (state, { payload }) => payload,
  },
});

export const { setfilter } = filterSlice.actions;

export default filterSlice.reducer;

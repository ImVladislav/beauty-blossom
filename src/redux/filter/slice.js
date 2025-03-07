import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("filter") || "";
console.log(initialState);

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setfilter: (_, { payload }) => {
      localStorage.setItem("filter", payload);
      console.log(payload);
      
      return payload;
    },
  },
});

export const { setfilter } = filterSlice.actions;

export default filterSlice.reducer;

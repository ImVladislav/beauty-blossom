import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://api.novaposhta.ua/v2.0/json";

export const getNew = createAsyncThunk("/", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.post("/");
    console.log(res.data);

    return res.data;
  } catch (error) {
    return rejectWithValue("Server error");
  }
});

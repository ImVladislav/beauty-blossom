import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

// axios.defaults.baseURL = "https://beauty-blossom-backend.onrender.com/api";
axios.defaults.baseURL = "localhost:3000";

export const getGoods = createAsyncThunk(
  "/goods",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/goods");

      return res.data;
    } catch (error) {
      return rejectWithValue("Server error");
    }
  }
);

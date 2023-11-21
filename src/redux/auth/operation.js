import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";
axios.defaults.baseURL = "https://beauty-blossom-backend.onrender.com/api";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post("/auth/register", credentials);

      return res.data;
    } catch (error) {
      if (error.response.data.message === "Email already in use") {
        toast.error("Клієнт з такою поштою вже зареєстрований!");
      }
      if (
        error.response.data.message === "The phone number is already in use"
      ) {
        toast.error("Клієнт з таким номером телефону вже зареєстрований!");
      }
      if (error.response.status === 400) {
        toast.error("Дані введені не коректні!");
      }
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Server error");
      }
      return rejectWithValue("Server error");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      token.set(data.token);
      // Зберігаємо токен в Local Storage
      localStorage.setItem("authToken", data.token);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Server error");
      }
      return rejectWithValue("Server error");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/auth/logout");
      token.unset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Server error");
      }
      return rejectWithValue("Server error");
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return rejectWithValue("Unautorized");
    // }

    // token.set(persistedToken);

    if (!state.auth.token) {
      return rejectWithValue("Unautorized");
    }

    token.set(state.auth.token);
    try {
      const { data } = await axios.get("/auth/current");
      // console.log(data);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Server error");
      }
      return rejectWithValue("Server error");
    }
  }
);

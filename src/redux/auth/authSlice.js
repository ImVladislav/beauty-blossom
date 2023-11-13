import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshCurrentUser } from "./operation";

const initialState = {
  firstName: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isRegister: false,
  isAdmin: false,
  optUser: false,
  _id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.number = action.payload.number;
        state.isAdmin = action.payload.isAdmin;
        state.optUser = action.payload.optUser;
        state.isRegister = true;
        state._id = action.payload._id;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.lastName = action.payload.lastName;
        state.isAdmin = action.payload.isAdmin;
        state.optUser = action.payload.optUser;
        state._id = action.payload._id;
        state.isLoggedIn = true;
        state.isRegister = true;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state)
      .addCase(logout.fulfilled, (state) => {
        state.firstName = null;
        state.lastName = null;
        state.email = null;
        state.number = null;
        state.token = null;
        state.isAdmin = false;
        state.isLoggedIn = false;
        state.isRegister = false;
        state.optUser = false;
        state._id = null;
      })
      .addCase(refreshCurrentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.number = action.payload.number;
        state.email = action.payload.email;
        state.isAdmin = action.payload.isAdmin;
        state.optUser = action.payload.optUser;
        state._id = action.payload._id;
        state.isLoggedIn = true;
        state.isRegister = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, (state, action) => {
        state.firstName = null;
        state.lastName = null;
        state.number = null;
        state.email = null;
        state.isAdmin = false;
        state.optUser = false;
        state._id = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;

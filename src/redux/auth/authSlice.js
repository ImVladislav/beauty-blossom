import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './operation';


const initialState = {
  firstName: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isRegister: false,
  isAdmin: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.number = action.payload.number;
        state.isAdmin = action.payload.isAdmin;
        state.isRegister = true;

      })
      .addCase(login.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.lastName = action.payload.lastName;
        state.isAdmin = action.payload.isAdmin;
        state.isLoggedIn = true;
        state.isRegister = true;
        state.token = action.payload.token;
        
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state)
      .addCase(logout.fulfilled, state => {
        state.firstName = null;
        state.lastName = null;
        state.email = null;
        state.number = null;
        state.token = null;
        state.isAdmin = false;
        state.isLoggedIn = false;
        state.isRegister = false;
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
        state.isLoggedIn = true;
        state.isRegister = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './operation';


const initialState = {
  firstName: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isRegister: false,
};
console.log(initialState);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.email = action.payload.email;
        state.isRegister = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRegister = true;
        state.token = action.payload.token;
        
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state)
      .addCase(logout.fulfilled, state => {
        state.firstName = null;
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRegister = false;
      })
      .addCase(refreshCurrentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.firstName = action.payload.firstName;
        state.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRegister = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;

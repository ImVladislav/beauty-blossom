import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


import { toast } from "react-toastify";
axios.defaults.baseURL = 'https://beauty-blossom-backend.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';

  },
  
};

export const register = createAsyncThunk

('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const res = await axios.post('/auth/register', credentials);
    
      return res.data;
  } catch (error) {
    if (error.response.status === 409) {
      toast.error("Ви вже зареєстровані!");
    }
    return rejectWithValue('Server error');
  }
});

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.token);
    // Зберігаємо токен в Local Storage
    localStorage.setItem('authToken', data.token);
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || 'Server error');
    }
    return rejectWithValue('Server error');
  }
});


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      token.unset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Server error');
      }
      return rejectWithValue('Server error');
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unautorized');
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/auth/current');
      console.log(data);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Server error');
      }
      return rejectWithValue('Server error');
    }
  }
);

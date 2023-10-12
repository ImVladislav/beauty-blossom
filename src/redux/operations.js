
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://beauty-blossom-backend.onrender.com/api';

export const getGoods = createAsyncThunk ('/goods', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get('/goods');
    console.log(res.data);
    
    return res.data;
  } catch (error) {
    return rejectWithValue('Server error');
  }
});

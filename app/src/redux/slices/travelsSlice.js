import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react'
import axios from 'axios';

const TRAVELS_URL = 'http://localhost:3000/travels';

export const fetchTravels = createAsyncThunk(
  'travels/fetchTravels',
  async (travels) => {
    const response = await axios.get(TRAVELS_URL, {params: travels});
    return response.data;
  },
);

const initialState = {
    travels: [],
    status: 'idle',
    error: null,
};

const travelsSlice = createSlice({
  name: 'travels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTravels.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchTravels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.travels = action.payload;
    })
    .addCase(fetchTravels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    })
  },
});

export const selectAllTravels = (state) => state.travels.travels;
export const getTravelsStatus = (state) => state.travels.status;
export const getTravelsError = (state) => state.travels.error;

export default travelsSlice.reducer;
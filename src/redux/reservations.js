import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const fetchReservations = createAsyncThunk(
  'moto-mate/reservations/fetchReservations',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/reservations');
    const data = await response.json();
    return data;
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default reservationsSlice.reducer;

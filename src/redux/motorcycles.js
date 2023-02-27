import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchMotorcycle = createAsyncThunk(
  'moto-mate/motorcycles/fetchMotorcycle',
  async () => {
    const response = await axios.get(
      'http://127.0.0.1:3000/api/v1/motorcycles',
    );
    return response.data.map((motorcycle) => ({
      id: motorcycle.id,
      name: motorcycle.name,
      description: motorcycle.description,
      image: motorcycle.img_url,
      model_year: motorcycle.model_year,
      price: motorcycle.price,
      engine: motorcycle.engine,
      fuel: motorcycle.fuel_type,
    }));
  },
);

export const addMotorcycle = createAsyncThunk(
  'moto-mate/motorcycles/addMotorcycle',
  async (motorcycle) => {
    const response = await axios.post(
      'http://localhost:3000/api/v1/motorcycles',
      motorcycle,
    );
    return response.data;
  },
);

export const deleteMotorcycle = createAsyncThunk(
  'moto-mate/motorcycles/deleteMotorcycle',
  async (id) => {
    await axios.delete(`http://127.0.0.1:3000/api/v1/motorcycles/${id}`);
    return id;
  },
);

const motorcyclesSlice = createSlice({
  name: 'motorcycles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMotorcycle.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addMotorcycle.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteMotorcycle.fulfilled, (state, action) => {
      return state.filter((motorcycle) => motorcycle.id !== action.payload);
    });
  },
});

export default motorcyclesSlice.reducer;

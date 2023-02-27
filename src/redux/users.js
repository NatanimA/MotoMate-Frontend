import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1'

initialState = {};

export const loginUser = createAsyncThunk(
    'moto-mate/users/loginUser', async (user) => {
        const response = await axios.post(URL + '/login',user);
        return response.data;
    }
);

export const registerUser = createAsyncThunk(
    'moto-mate/users/registerUser',
    async (user) => {
        const response = await axios.post(URL + '/register',user);
        return response.data;
    }
);


const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(loginUser.fulfilled, (state,action) => {
            return action.payload
        });
        builder.addCase(registerUser.fulfilled, (state,action) => {
            return action.payload
        });
    }
});

export default userSlice.reducer;



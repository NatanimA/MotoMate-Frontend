import { configureStore } from '@reduxjs/toolkit';
import motorcyclesReducer from './motorcycles';
import reservationsReducer from './reservations';
import userReducer from './users'

const store = configureStore({
  reducer: {
    motorcycles: motorcyclesReducer,
    reservations: reservationsReducer,
    users: userReducer
  },
});

export default store;

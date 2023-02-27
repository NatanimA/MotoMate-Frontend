import { configureStore } from '@reduxjs/toolkit';
import motorcyclesReducer from './motorcycles';
import reservationsReducer from './reservations';

const store = configureStore({
  reducer: {
    motorcycles: motorcyclesReducer,
    reservations: reservationsReducer,
  },
});

export default store;

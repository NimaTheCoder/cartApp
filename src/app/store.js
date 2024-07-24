// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice'; // Create this file for your cart slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // other reducers can be added here
  },
});

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // Import the counter reducer
// Import other reducers as needed

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
    // You can add other reducers here as well
    // Add your reducers here
  },
});
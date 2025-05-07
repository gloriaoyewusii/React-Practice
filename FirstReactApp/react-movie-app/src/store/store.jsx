import {configureStore} from '@reduxjs/toolkit';
import { userAuthApiSlice } from '../service/userAuthApi';

export const store = configureStore({
    reducer: {
        [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApiSlice.middleware)
});
// import

// export const store = configureStore({
//     reducer: {},
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

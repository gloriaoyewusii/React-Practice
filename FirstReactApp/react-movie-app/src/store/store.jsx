import {configureStore} from '@reduxjs/toolkit';
import { userAuthApiSlice } from '../service/userAuthApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { movieApi } from '../service/movieAPI';

export const store = configureStore({
    reducer: {
        [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
    //the reducer is a function that takes the current state and an action, and returns the next state
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAuthApiSlice.middleware,
         movieApi.middleware)
    //middleware occurs between the dispatch and the reducer, and it is used to make the requests to the backend
    //what are the middleware, dispatch, reducer, and the setupListeners?
});

setupListeners(store.dispatch);
// //the setupListeners is a function that is used to set up the listeners for the store, 
// import

// export const store = configureStore({
//     reducer: {},
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

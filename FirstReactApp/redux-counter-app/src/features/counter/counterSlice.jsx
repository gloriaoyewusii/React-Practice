import {createSlice} from '@reduxjs/toolkit';

const initialState = { value : 0 };
//the initial state is the state that is used to initialize the state, and it is the state that is used to initialize the state of the counter

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    //the name is the name of the slice, and it is the name of the slice that is used to initialize the state of the counter
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const {increment, decrement, reset} = counterSlice.actions;
//the increment, decrement and reset are the actions that are used to update the state of the counter, and they are the actions that are used to update the state of the counter
export default counterSlice.reducer;
//the reducer is the reducer that is used to update the state of the counter, and it is the reducer that is used to update the state of the counter
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { decrement, increment, reset} from './counterSlice.jsx';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default Counter;
//the Counter component is the component that is used to display the counter, and it is the component that is used to display the counter
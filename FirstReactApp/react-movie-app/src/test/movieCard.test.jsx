import {store} from '../store/store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import MovieCard from '../reusable/MovieCard';

// const renderWithProvider=(ui)=>(
//     render (<Provider store={store}></Provider>)
// ) still the same as below; just the curly brace is removed and the parentheses are added

const renderWithProvider=(ui)=>{
    render (<Provider store={store}></Provider>)
}

describe("MovieCard", () => {
    test("showing loading initially", () => {
        renderWithProvider(<MovieCard/>);

        let result = screen.findByText(/loading.../i)
        expect(result).toBeInTheDocument();
    })
})
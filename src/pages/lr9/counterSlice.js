// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        shoppingList: [],
    },
    reducers: {
        increment: (state) => {
            console.log('Before increment:', state);
            state.count += 1;
            console.log('After increment:', state);

        },
        decrement: (state) => {
            console.log('Before decrement:', state);
            state.count -= 1;
            console.log('After decrement:', state);

        },
        addToShoppingList: (state, action) => {
            console.log('Before addToShoppingList:', state);
            state.shoppingList.push(action.payload);
            console.log('After addToShoppingList:', state);

        },
        removeFromShoppingList: (state, action) => {
            console.log('Before removeFromShoppingList:', state);
            state.shoppingList = state.shoppingList.filter(item => item !== action.payload);
            console.log('After removeFromShoppingList:', state);

        },
    },
});

export const { increment, decrement, addToShoppingList, removeFromShoppingList } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;
export const selectShoppingList = (state) => state.counter.shoppingList;

export default counterSlice.reducer;

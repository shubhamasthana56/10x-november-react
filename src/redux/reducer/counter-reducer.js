//redux
// const counterReducer = (state, action)=> {
//     //increment, decrement
//     switch(action.type) {
//         case "INCREMNT":
//             return {...state, counter: state.counter + 1}
//     }
// }

import { createSlice } from "@reduxjs/toolkit";
import CounterReducer from "../../Reducer/counter-with-reducer";
const initialState = {
    counter: 0
}
const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
       increment: (state)=> {
           state.counter += 1
       },
       decrement: (state)=> {
           state.counter -= 1;
       },
       reset: (state)=> {
           state.counter = 0
       }
    }
})
export const {increment, decrement, reset} = counterReducer.actions;
export default counterReducer.reducer;
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: 0
}
const cartReducer = createSlice({
    name: "cart",
    initialState,
    reducers: {
       incrementCart: (state)=> {
           state.cart += 1
       },
       decrementCart: (state)=> {
           state.cart -= 1;
       },
       deleteFromCart: (state)=> {
           state.cart = 0
       }
    }
});
debugger
export default cartReducer.reducer;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cart-reducer";
import counterReducer from "./reducer/counter-reducer";
const reducer = combineReducers({
        
    counter: counterReducer,
    cart: cartReducer

})
const store = configureStore({
    reducer
});
export default store;
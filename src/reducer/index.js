import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "../slices/authSlice"; 
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice";

const rootReducers = combineReducers({
    auth: authReducers,
    profile: profileReducer,
    cart: cartReducer,
});

export default rootReducers;

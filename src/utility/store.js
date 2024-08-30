import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import customerReducer from "./customerSlice";

const store = configureStore({
  reducer:{
    user: userReducer,
    product:productReducer,
    customer:customerReducer,
  }
});

export default store;
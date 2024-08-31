import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import customerReducer from "./customerSlice";
import transactionReducer from "./transactionSlice";

const store = configureStore({
  reducer:{
    user: userReducer,
    product:productReducer,
    customer:customerReducer,
    transaction: transactionReducer,
  }
});

export default store;
import { createSlice } from "@reduxjs/toolkit";
import { updateProductDetail } from "./productSlice";

const transactionSlice = createSlice({
  name:'transaction',
  initialState: {
    transactionData: null,
  },
  reducers:{
    addTransactionDetails: (state,action)=>{
      state.transactionData = action.payload;
    },
    
  }
});

export const {addTransactionDetails}  = transactionSlice.actions;
export default transactionSlice.reducer;
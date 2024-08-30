import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const customerSlice = createSlice({
  name:"customer",
  initialState:{
    customerDetails: null,
  },
  reducers:{
    addCustomerDetails: (state,action)=>{
      state.customerDetails = action.payload;
    }
  }
});

export const {addCustomerDetails} = customerSlice.actions;
export default customerSlice.reducer;

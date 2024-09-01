import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name:'product',
  initialState:{
    productDetails: null,
  },
  reducers:{
    addProductsDetails: (state,action)=>{
      state.productDetails = action.payload;
    },
  }
});

export const {addProductsDetails} = productSlice.actions;
export default productSlice.reducer;
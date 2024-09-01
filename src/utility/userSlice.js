import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers:{
    addUserDetails:(state,action)=>{
      state.user = action.payload;
    },
    removeUserDetails:(state) =>{
      state.user = null;
    }
  }
});

export const {addUserDetails,removeUserDetails} = userSlice.actions;
export default userSlice.reducer; 
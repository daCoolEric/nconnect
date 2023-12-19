"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.value = action.payload;
    },
    resetAddress: (state, action) => {
      state.value = "";
    },
  },
});

export const { setAddress, resetAddress } = addressSlice.actions;

export default addressSlice.reducer;

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

export const pinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {
    setPin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPin } = pinSlice.actions;

export default pinSlice.reducer;

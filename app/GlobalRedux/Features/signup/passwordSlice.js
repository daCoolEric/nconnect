"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPassword } = passwordSlice.actions;

export default passwordSlice.reducer;

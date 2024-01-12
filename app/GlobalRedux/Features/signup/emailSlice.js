"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;

export default emailSlice.reducer;

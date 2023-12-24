"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

export const confirmPasswordSlice = createSlice({
  name: "confirm_password",
  initialState,
  reducers: {
    setConfirmPassword: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setConfirmPassword } = confirmPasswordSlice.actions;

export default confirmPasswordSlice.reducer;

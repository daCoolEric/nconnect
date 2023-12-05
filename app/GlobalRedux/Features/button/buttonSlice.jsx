//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setButtonType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setButtonType } = buttonSlice.actions;

export default buttonSlice.reducer;

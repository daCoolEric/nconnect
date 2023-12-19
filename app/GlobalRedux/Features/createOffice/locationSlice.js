"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.value = action.payload;
    },
    resetLocation: (state, action) => {
      state.value = "";
    },
  },
});

export const { setLocation, resetLocation } = locationSlice.actions;

export default locationSlice.reducer;

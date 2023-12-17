"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const officeSlice = createSlice({
  name: "district",
  initialState,
  reducers: {
    setOffice: (state, action) => {
      state.value = action.payload;
    },
    resetOffice: (state, action) => {
      state.value = false;
    },
  },
});

export const { setOffice, resetOffice } = officeSlice.actions;

export default officeSlice.reducer;

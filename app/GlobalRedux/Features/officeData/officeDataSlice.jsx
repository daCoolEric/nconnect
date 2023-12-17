//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const officeDataSlice = createSlice({
  name: "officeData",
  initialState,
  reducers: {
    setOfficeData: (state, action) => {
      return { value: action.payload };
    },
    resetOfficeData: (state, action) => {
      return { value: {} };
    },
  },
});

export const { setOfficeData, resetOfficeData } = officeDataSlice.actions;

export default officeDataSlice.reducer;

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
      return { ...state.value, value: action.payload };
    },
  },
});

export const { setOfficeData } = officeDataSlice.actions;

export default officeDataSlice.reducer;

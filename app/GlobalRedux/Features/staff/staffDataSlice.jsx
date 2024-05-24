//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const staffDataSlice = createSlice({
  name: "staffData",
  initialState,
  reducers: {
    setStaffData: (state, action) => {
      return { value: action.payload };
    },
    resetStaffData: (state, action) => {
      return { value: {} };
    },
  },
});

export const { setStaffData, resetStaffData } = staffDataSlice.actions;

export default staffDataSlice.reducer;

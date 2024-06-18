"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const staffEmailSlice = createSlice({
  name: "staffEmail",
  initialState,
  reducers: {
    setStaffEmail: (state, action) => {
      return { value: action.payload };
    },
    resetStaffEmail: () => {
      return { value: "" };
    },
  },
});

export const { setStaffEmail, resetStaffEmail } = staffEmailSlice.actions;

export default staffEmailSlice.reducer;

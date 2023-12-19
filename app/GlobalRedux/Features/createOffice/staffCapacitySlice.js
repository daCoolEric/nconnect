"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const staffCapacitySlice = createSlice({
  name: "staffCapacity",
  initialState,
  reducers: {
    setStaffCapacity: (state, action) => {
      state.value = action.payload;
    },
    resetStaffCapacity: (state, action) => {
      state.value = "";
    },
  },
});

export const { setStaffCapacity, resetStaffCapacity } =
  staffCapacitySlice.actions;

export default staffCapacitySlice.reducer;

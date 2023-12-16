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
  },
});

export const { setOffice } = officeSlice.actions;

export default officeSlice.reducer;

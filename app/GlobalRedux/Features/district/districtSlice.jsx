"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "ASHANTI",
};

export const districtSlice = createSlice({
  name: "district",
  initialState,
  reducers: {
    setDistricts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDistricts } = districtSlice.actions;

export default districtSlice.reducer;

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const districtNameSlice = createSlice({
  name: "districtName",
  initialState,
  reducers: {
    setDistrictName: (state, action) => {
      state.value = action.payload;
    },
    resetDistrictName: (state, action) => {
      state.value = "";
    },
  },
});

export const { setDistrictName, resetDistrictName } = districtNameSlice.actions;

export default districtNameSlice.reducer;

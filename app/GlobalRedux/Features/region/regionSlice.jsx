"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const RegionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRegion } = RegionSlice.actions;

export default RegionSlice.reducer;

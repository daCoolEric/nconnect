"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBanner: (state, action) => {
      state.value = action.payload;
    },
    removeBanner: (state, action) => {
      state.value = null;
    },
  },
});

export const { setBanner, removeBanner } = bannerSlice.actions;

export default bannerSlice.reducer;

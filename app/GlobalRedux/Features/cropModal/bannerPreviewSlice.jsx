"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "/assets/images/officePlaceholder.png",
};

export const bannerPreviewSlice = createSlice({
  name: "bannerPreview",
  initialState,
  reducers: {
    setBannerPreview: (state, action) => {
      state.value = action.payload;
    },
    removeBannerPreview: (state, action) => {
      state.value = null;
    },
  },
});

export const { setBannerPreview, removeBannerPreview } =
  bannerPreviewSlice.actions;

export default bannerPreviewSlice.reducer;

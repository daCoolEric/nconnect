"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hidden",
};

export const cropModalSlice = createSlice({
  name: "crop_modal",
  initialState,
  reducers: {
    openCropModal: (state, action) => {
      state.value = action.payload;
    },
    closeCropModal: (state, action) => {
      state.value = "hidden";
    },
  },
});

export const { openCropModal, closeCropModal } = cropModalSlice.actions;

export default cropModalSlice.reducer;

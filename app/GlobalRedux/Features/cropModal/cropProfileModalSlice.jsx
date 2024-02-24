"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hidden",
};

export const cropProfileModalSlice = createSlice({
  name: "crop_profile_modal",
  initialState,
  reducers: {
    openCropProfileModal: (state, action) => {
      state.value = action.payload;
    },
    closeCropProfileModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { openCropProfileModal, closeCropProfileModal } =
  cropProfileModalSlice.actions;

export default cropProfileModalSlice.reducer;

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "/assets/images/profilePic.png",
};

export const avatarPreviewSlice = createSlice({
  name: "avatarPreview",
  initialState,
  reducers: {
    setAvatarPreview: (state, action) => {
      state.value = action.payload;
    },
    removeAvatarPreview: (state, action) => {
      state.value = null;
    },
  },
});

export const { setAvatarPreview, removeAvatarPreview } =
  avatarPreviewSlice.actions;

export default avatarPreviewSlice.reducer;

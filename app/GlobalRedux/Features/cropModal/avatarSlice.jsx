"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {
    setAvatar: (state, action) => {
      state.value = action.payload;
    },
    removeAvatar: (state, action) => {
      state.value = null;
    },
  },
});

export const { setAvatar, removeAvatar } = avatarSlice.actions;

export default avatarSlice.reducer;

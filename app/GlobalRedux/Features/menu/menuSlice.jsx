//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hidden",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state, action) => {
      state.value = action.payload;
    },
    closeMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;

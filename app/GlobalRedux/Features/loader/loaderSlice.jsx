//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hidden",
  prompt: "",
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    openLoaderModal: (state, action) => {
      state.value = action.payload;
    },
    setLoaderPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    closeLoaderModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { openLoaderModal, setLoaderPrompt, closeLoaderModal } =
  loaderSlice.actions;

export default loaderSlice.reducer;

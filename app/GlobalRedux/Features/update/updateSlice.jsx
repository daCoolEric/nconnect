//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hidden",
};

export const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {
    openUpdateModal: (state, action) => {
      state.value = action.payload;
    },
    closeUpdateModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { openUpdateModal, closeUpdateModal } = updateSlice.actions;

export default updateSlice.reducer;

//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "hidden",
};

export const deleteSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {
    openDeleteModal: (state, action) => {
      state.value = action.payload;
    },
    closeDeleteModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = deleteSlice.actions;

export default deleteSlice.reducer;

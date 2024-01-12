"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;

//menuSlice.jsx

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      return { value: [...state.value, action.payload] };
    },
    resetData: (state, action) => {
      return { value: [] };
    },
  },
});

export const { setData, resetData } = dataSlice.actions;

export default dataSlice.reducer;

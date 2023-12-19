"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const officeContactSlice = createSlice({
  name: "officeContact",
  initialState,
  reducers: {
    setOfficeContact: (state, action) => {
      state.value = action.payload;
    },
    resetOfficeContact: (state, action) => {
      state.value = "";
    },
  },
});

export const { setOfficeContact, resetOfficeContact } =
  officeContactSlice.actions;

export default officeContactSlice.reducer;

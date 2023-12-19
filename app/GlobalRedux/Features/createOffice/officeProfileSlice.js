"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const officeProfileSlice = createSlice({
  name: "officeProfile",
  initialState,
  reducers: {
    setOfficeProfile: (state, action) => {
      state.value = action.payload;
    },
    resetOfficeProfile: (state, action) => {
      state.value = "";
    },
  },
});

export const { setOfficeProfile, resetOfficeProfile } =
  officeProfileSlice.actions;

export default officeProfileSlice.reducer;

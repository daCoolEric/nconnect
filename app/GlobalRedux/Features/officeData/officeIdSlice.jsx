"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    districtId: "",
    regionId: "",
  },
};

export const officeIdsSlice = createSlice({
  name: "officeIds",
  initialState,
  reducers: {
    setOfficeIds: (state, action) => {
      state.value = {
        districtId: action.payload?.districtId,
        regionId: action.payload?.regionId,
      };
    },
    resetOfficeIds: (state, action) => {
      state.value = {
        districtId: "",
        regionId: "",
      };
    },
  },
});

export const { setOfficeIds, resetOfficeIds } = officeIdsSlice.actions;

export default officeIdsSlice.reducer;

"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

export const userNameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserName } = userNameSlice.actions;

export default userNameSlice.reducer;

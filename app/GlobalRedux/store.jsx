//store.jsx

"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Features/menu/menuSlice";
import districtReducer from "./Features/district/districtSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  districts: districtReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

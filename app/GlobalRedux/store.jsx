//store.jsx

"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Features/menu/menuSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

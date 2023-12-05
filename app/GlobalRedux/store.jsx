//store.jsx

"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Features/menu/menuSlice";
import districtReducer from "./Features/district/districtSlice";
import userNameReducer from "./Features/userName/userNameSlice";
import deleteReducer from "./Features/delete/deleteSlice";
import updateReducer from "./Features/update/updateSlice";
import loaderReducer from "./Features/loader/loaderSlice";
import buttonReducer from "./Features/button/buttonSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  districts: districtReducer,
  userName: userNameReducer,
  delete: deleteReducer,
  update: updateReducer,
  loader: loaderReducer,
  button: buttonReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

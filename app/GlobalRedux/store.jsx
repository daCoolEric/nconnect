//store.jsx

"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Features/menu/menuSlice";
import districtReducer from "./Features/district/districtSlice";
import userNameReducer from "./Features/userName/userNameSlice";
import deleteReducer from "./Features/delete/deleteSlice";
import updateReducer from "./Features/update/updateSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  districts: districtReducer,
  userName: userNameReducer,
  delete: deleteReducer,
  update: updateReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

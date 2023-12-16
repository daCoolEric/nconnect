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
import dataReducer from "./Features/data/dataSlice";
import regionReducer from "./Features/region/regionSlice";
import officeReducer from "./Features/office/office";
import officeDataReducer from "./Features/officeData/officeDataSlice";

const rootReducer = combineReducers({
  menu: menuReducer,
  districts: districtReducer,
  userName: userNameReducer,
  delete: deleteReducer,
  update: updateReducer,
  loader: loaderReducer,
  button: buttonReducer,
  data: dataReducer,
  region: regionReducer,
  office: officeReducer,
  officeData: officeDataReducer,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});

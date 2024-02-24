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
import districtNameReducer from "./Features/createOffice/districtNameSlice";
import addressReducer from "./Features/createOffice/addressSlice";
import locationReducer from "./Features/createOffice/locationSlice";
import staffCapacityReducer from "./Features/createOffice/staffCapacitySlice";
import officeContactReducer from "./Features/createOffice/officeContactSlice";
import officeProfileReducer from "./Features/createOffice/officeProfileSlice";
import loadingReducer from "./Features/loading/loadingSlice";
import emailReducer from "./Features/signup/emailSlice";
import passwordReducer from "./Features/signup/passwordSlice";
import confirmPasswordReducer from "./Features/signup/confirmPasswordSlice";
import pinReducer from "./Features/signup/pinSlice";
import roleReducer from "./Features/signup/roleSlice";
import officeIdsReducer from "./Features/officeData/officeIdSlice";
import cropModalReducer from "./Features/cropModal/cropModalSlice";
import bannerReducer from "./Features/cropModal/bannerSlice";
import bannerPreviewReducer from "./Features/cropModal/bannerPreviewSlice";
import avatarPreviewReducer from "./Features/cropModal/avatarPreviewSlice";
import cropProfileModalReducer from "./Features/cropModal/cropProfileModalSlice";
import avatarReducer from "./Features/cropModal/avatarSlice";

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
  officeIds: officeIdsReducer,
  districtName: districtNameReducer,
  address: addressReducer,
  location: locationReducer,
  staffCapacity: staffCapacityReducer,
  officeContact: officeContactReducer,
  officeProfile: officeProfileReducer,
  loading: loadingReducer,
  email: emailReducer,
  password: passwordReducer,
  confirm_password: confirmPasswordReducer,
  pin: pinReducer,
  role: roleReducer,
  crop_modal: cropModalReducer,
  crop_profile_modal: cropProfileModalReducer,
  banner: bannerReducer,
  bannerPreview: bannerPreviewReducer,
  avatar: avatarReducer,
  avatarPreview: avatarPreviewReducer,

  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

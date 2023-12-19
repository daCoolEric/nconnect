"use client";
import { setButtonType } from "@app/GlobalRedux/Features/button/buttonSlice";
import {
  openLoaderModal,
  setLoaderPrompt,
} from "@app/GlobalRedux/Features/loader/loaderSlice";
import { openUpdateModal } from "@app/GlobalRedux/Features/update/updateSlice";
import React from "react";
import { useDispatch } from "react-redux";

function Button({ name, type, id }) {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-full mt-2 flex justify-center bg-green-400 rounded-lg hover:bg-green-300 py-1"
      style={{ backgroundColor: "#6dab3c" }}
    >
      <button
        type={type}
        className="w-full text-white text-2xl font-medium
      
      "
        onClick={() => {
          if (id === "update") {
            dispatch(openUpdateModal("visible"));
            dispatch(setButtonType(id));
          } else if (id === "signIn") {
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Signing In"));
          } else if (id === "signUp") {
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Creating Account"));
          } else if (id === "addDetails") {
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Adding Details"));
          }else if(id === "createOffice"){
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Creating Office"));
          }
        }}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;

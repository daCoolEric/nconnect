"use client";
import { setButtonType } from "@app/GlobalRedux/Features/button/buttonSlice";
import { openUpdateModal } from "@app/GlobalRedux/Features/update/updateSlice";
import React from "react";
import { useDispatch } from "react-redux";

function Button({ name, type, action }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full mt-2 flex justify-center bg-green-400 rounded-lg hover:bg-green-300 py-1">
      <button
        type={type}
        className="w-full text-white text-2xl font-medium
      
      "
        onClick={() => {
          if (name === "update") {
            dispatch(openUpdateModal("visible"));
            dispatch(setButtonType(name));
          }
        }}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;

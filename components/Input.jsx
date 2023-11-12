import { setUserName } from "@app/GlobalRedux/Features/userName/userNameSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Input({ placeholder, type }) {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full h-full flex justify-center items-center outline outline-green-400 rounded-lg  "
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full focus:outline-none ml-4 text-xl bg-transparent"
        style={{ color: "#000" }}
        onChange={(e) => {
          dispatch(setUserName(e.target.value));
        }}
      />
    </div>
  );
}

export default Input;

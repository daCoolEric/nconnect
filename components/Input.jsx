import { setUserName } from "../app/GlobalRedux/Features/userName/userNameSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Input({ placeholder, type, value, name, id, autoComplete, onChange }) {
  const dispatch = useDispatch();
  return (
    <div className="mt-2 ">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full rounded-md border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default Input;

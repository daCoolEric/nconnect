import { setUserName } from "@app/GlobalRedux/Features/userName/userNameSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Input({ placeholder, type, name, id, autoComplete }) {
  const dispatch = useDispatch();
  return (
    // <div
    //   className="w-full h-full flex justify-center items-center outline outline-green-400 rounded-lg  "
    //   style={{ backgroundColor: "#FFFFFF" }}
    // >
    //   <input
    //     type={type}
    //     placeholder={placeholder}
    //     className="w-full h-full focus:outline-none ml-4 text-xl bg-transparent"
    //     style={{ color: "#000" }}
    //     onChange={(e) => {
    //       dispatch(setUserName(e.target.value));
    //     }}
    //   />
    // </div>

    // -----------------------------------------------------------------

    <div className="mt-2 ">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        placeholder={placeholder}
        onChange={(e) => {
          dispatch(setUserName(e.target.value));
        }}
        className="block w-full rounded-md border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default Input;

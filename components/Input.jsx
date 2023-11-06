import React from "react";

function Input({ placeholder, type }) {
  return (
    <div
      className="w-full h-full flex justify-center items-center rounded-3xl "
      style={{ backgroundColor: "#CAFDDE" }}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full focus:outline-none ml-4 text-xl bg-transparent"
        style={{ color: "#000" }}
      />
    </div>
  );
}

export default Input;

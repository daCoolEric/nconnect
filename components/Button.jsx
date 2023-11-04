import React from "react";

function Button({ name }) {
  return (
    <div className="w-full h-full flex justify-center bg-green-400 rounded-3xl">
      <button className="text-white text-2xl font-medium">{name}</button>
    </div>
  );
}

export default Button;

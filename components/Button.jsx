import React from "react";

function Button({ name, type }) {
  return (
    <div className="w-full h-full flex justify-center bg-green-400 rounded-lg hover:bg-green-300 py-1">
      <button type={type} className="text-white text-2xl font-medium">
        {name}
      </button>
    </div>
  );
}

export default Button;

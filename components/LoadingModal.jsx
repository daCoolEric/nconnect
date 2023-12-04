import Image from "next/image";
import React from "react";
import Loader from "./Loader";

function LoadingModal({ prompt }) {
  return (
    <div className="w-10/12 h-3/6 bg-white rounded-lg flex justify-center items-center">
      <div className="w-full h-3/5 divide-y //outline //outline-red-500 flex flex-col justify-evenly">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-1/2 flex justify-center items-center">
            <Loader />
          </div>
          <div className="w-10/12 h-1/2 flex justify-center items-center //outline //outline-red-500">
            <p className="text-xl font-semibold text-gray-900">{prompt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingModal;

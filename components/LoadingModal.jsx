"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

function LoadingModal() {
  const loadingModalState = useSelector((state) => state.loader.value);
  const loadingPrompt = useSelector((state) => state.loader.prompt);
  return (
    <div
      className="w-screen h-screen bg-black/60 absolute z-10 flex justify-center items-center"
      style={{ visibility: loadingModalState }}
      //   style={{ visibility: "hidden" }}
    >
      <div className="w-10/12 h-3/6 bg-white rounded-lg flex justify-center items-center">
        <div className="w-full h-3/5 divide-y //outline //outline-red-500 flex flex-col justify-evenly">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-10/12 h-1/3 flex justify-center items-start //outline //outline-red-500">
              <p className="text-2xl font-semibold text-gray-900">
                {loadingPrompt}
              </p>
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
              <Loader />
            </div>
            <div className="w-10/12 h-1/3 flex justify-center items-end //outline //outline-red-500">
              <p className="text-xl font-semibold text-gray-900">
                Please wait...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingModal;

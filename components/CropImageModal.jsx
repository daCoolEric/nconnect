"use client";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import CropImage from "./CropImage";

// import { useSession } from "next-auth/react";

function CropImageModal() {
  //useSelector gets the state from store
  const cropModalState = useSelector((state) => state.crop_modal.value); // Access the counter state

  const dispatch = useDispatch();

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center //bg-black/60 absolute z-20"
      style={{ visibility: cropModalState }}
    >
      <div className="w-full h-5/6 //outline //outline-red-500 flex justify-center items-center">
        <CropImage />
      </div>
    </div>
  );
}
// Modal.requireAuth = true;

export default CropImageModal;

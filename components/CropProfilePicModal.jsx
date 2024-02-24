"use client";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import CropProfilePic from "./CropProfilePic";

// import { useSession } from "next-auth/react";

function CropProfilePicModal() {
  //useSelector gets the state from store
  const cropProfileModalState = useSelector(
    (state) => state.crop_profile_modal.value
  ); // Access the counter state

  const dispatch = useDispatch();

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center //bg-black/60 absolute z-20"
      style={{ visibility: cropProfileModalState }}
    >
      <div className="w-full h-5/6 //outline //outline-red-500 flex justify-center items-center">
        <CropProfilePic />
      </div>
    </div>
  );
}
// Modal.requireAuth = true;

export default CropProfilePicModal;

"use client";
import React, { useState } from "react";
import { closeDeleteModal } from "@app/GlobalRedux/Features/delete/deleteSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import LoadingModal from "./LoadingModal";
import ModalTemplate from "./ModalTemplate";

function UpdateModal() {
  //useSelector gets the state from store
  const updateModalState = useSelector((state) => state.update.value); // Access the counter state
  // const [visible, setVisible] = useState("hidden");
  const dispatch = useDispatch();
  return (
    <div
      className="w-screen h-screen bg-black/60 absolute z-10 flex justify-center items-center"
      style={{ visibility: updateModalState }}
    >
      <ModalTemplate
        alert_message="Update Profile!"
        sub_message="Updating this profile will pemanently modify your profile. Are you sure?"
        positive_response="No, don't update"
        negative_response="Yes, update it"
      />
    </div>
  );
}

export default UpdateModal;

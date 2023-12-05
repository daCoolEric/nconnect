"use client";
import React, { useState } from "react";
import { closeDeleteModal } from "@app/GlobalRedux/Features/delete/deleteSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import LoadingModal from "./LoadingModal";
import ModalTemplate from "./ModalTemplate";

function DeleteModal() {
  //useSelector gets the state from store
  const deleteModalState = useSelector((state) => state.delete.value); // Access the counter state
  // const [visible, setVisible] = useState("hidden");
  const dispatch = useDispatch();
  return (
    <div
      className="w-screen h-screen bg-black/60 absolute z-10 flex justify-center items-center"
      style={{ visibility: deleteModalState }}
    >
      <ModalTemplate
        alert_message="Delete Profile!"
        sub_message="Deleting this profile will pemanently remove your profile. Are you sure?"
        positive_response="No, keep it"
        negative_response="Yes, delete it"
      />
    </div>
  );
}

export default DeleteModal;

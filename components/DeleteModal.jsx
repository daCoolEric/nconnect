"use client";
import React, { useState } from "react";
import { closeDeleteModal } from "@app/GlobalRedux/Features/delete/deleteSlice";
import { useDispatch, useSelector } from "react-redux";

function DeleteModal() {
  //useSelector gets the state from store
  const deleteModalState = useSelector((state) => state.delete.value); // Access the counter state
  // const [visible, setVisible] = useState("hidden");
  const dispatch = useDispatch();
  return (
    <div
      className="w-screen h-screen bg-black/60 absolute z-10 flex justify-center items-center"
      style={{ visibility: deleteModalState }}
      onClick={() => dispatch(closeDeleteModal("hidden"))}
    >
      <div className="w-10/12 h-3/6 bg-white rounded-lg">
        <div className="w-full h-full divide-y //outline //outline-red-500 flex flex-col justify-evenly">
          <div className="w-full h-2/3 flex flex-col justify-center items-center">
            <div className="w-full h-1/2 flex justify-center items-center">
              Icon
            </div>
            <div className="w-10/12 h-1/2 flex justify-center items-start">
              <p className="text-xl font-semibold text-gray-900">
                Are you sure you want to delete your profile?
              </p>
            </div>
          </div>
          <div className="-mt-px flex divide-x  divide-gray-200">
            <div className="flex w-0 flex-1 ">
              <button className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                Yes
              </button>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <button className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;

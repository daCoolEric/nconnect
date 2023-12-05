import Image from "next/image";
import React from "react";
import { closeDeleteModal } from "@app/GlobalRedux/Features/delete/deleteSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  openLoaderModal,
  setLoaderPrompt,
} from "@app/GlobalRedux/Features/loader/loaderSlice";
import { closeUpdateModal } from "@app/GlobalRedux/Features/update/updateSlice";
import { setButtonType } from "@app/GlobalRedux/Features/button/buttonSlice";

function ModalTemplate({
  alert_message,
  sub_message,
  positive_response,
  negative_response,
}) {
  const dispatch = useDispatch();
  const buttonType = useSelector((state) => state.button.value);
  return (
    <div className="w-10/12 h-3/6 bg-white rounded-lg">
      <div className="w-full h-full divide-y //outline //outline-red-500 flex flex-col justify-evenly">
        <div className="w-full h-2/3 flex flex-col justify-center items-center">
          <div className="w-full h-1/3 flex justify-center items-center">
            <Image
              src="/assets/icons/alert.png"
              width={70}
              height={70}
              alt="alert icon"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-10/12 h-2/3 flex flex-col  justify-evenly items-center">
            <p className="text-2xl font-semibold text-gray-900 ">
              {alert_message}
            </p>

            <p className="text-md  text-gray-500 ">{sub_message}</p>
          </div>
        </div>
        <div className="-mt-px flex divide-x  divide-gray-200">
          <div className="flex w-0 flex-1 ">
            <button
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-xl font-semibold text-gray-900"
              onClick={() => {
                if (buttonType === "update") {
                  dispatch(closeUpdateModal("hidden"));
                } else if (buttonType === "delete") {
                  dispatch(closeDeleteModal("hidden"));
                }
              }}
            >
              {positive_response}
            </button>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <button
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-xl font-semibold text-gray-900"
              onClick={() => {
                if (buttonType === "update") {
                  dispatch(closeUpdateModal("hidden"));
                  dispatch(setLoaderPrompt("Updating Profile"));
                  dispatch(openLoaderModal("visible"));
                } else if (buttonType === "delete") {
                  dispatch(openLoaderModal("visible"));
                  dispatch(closeDeleteModal("hidden"));
                  dispatch(setLoaderPrompt("Deleting Profile"));
                }
              }}
            >
              {negative_response}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTemplate;

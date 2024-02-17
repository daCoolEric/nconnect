import React from "react";
import Link from "next/link";

import { resetData } from "@app/GlobalRedux/Features/data/dataSlice";
import { resetOffice } from "@app/GlobalRedux/Features/office/office";
import { resetOfficeData } from "@app/GlobalRedux/Features/officeData/officeDataSlice";

import {
  closeLoaderModal,
  openLoaderModal,
  setLoaderPrompt,
} from "@app/GlobalRedux/Features/loader/loaderSlice";
import { setLoading } from "@app/GlobalRedux/Features/loading/loadingSlice";
import { openUpdateModal } from "@app/GlobalRedux/Features/update/updateSlice";
import { signOut, useSession } from "next-auth/react";

import { useDispatch, useSelector } from "react-redux";
import { resetOfficeIds } from "@app/GlobalRedux/Features/officeData/officeIdSlice";

function MenuList({ name, page }) {
  const dispatch = useDispatch();

  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut({ callbackUrl: "/pages/signIn/" });

      dispatch(closeLoaderModal("hidden"));
      // alert("User logged out");
    } catch {
      alert("Error!");
      dispatch(closeLoaderModal("hidden"));
    }
    setLoading(false);
  };
  return (
    <div className="w-full h-1/5 //outline //outline-black flex justify-center items-center">
      <button
        onClick={() => {
          switch (name) {
            case "Log Out":
              {
                handleLogout();
                dispatch(resetOfficeIds());
                dispatch(openLoaderModal("visible"));
                dispatch(resetOfficeData());
                dispatch(resetData());
                dispatch(resetOffice());
              }

              break;
            case "Explore": {
              dispatch(resetOfficeIds());
            }

            default:
              {
                dispatch(resetOfficeData());
                dispatch(resetData());
                dispatch(resetOffice());
              }
              break;
          }
          //           if (name === "Log Out") {
          //             handleLogout();
          // dispatch(resetOfficeIds())
          //             dispatch(openLoaderModal("visible"));
          //             dispatch(resetOfficeData());
          //             dispatch(resetData());
          //             dispatch(resetOffice());
          //           } else {
          //             dispatch(resetOfficeData());
          //             dispatch(resetData());
          //             dispatch(resetOffice());
          //           }
        }}
      >
        <Link href={page}>{name}</Link>
      </button>
    </div>
  );
}

export default MenuList;

"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import InfoTab from "./InfoTab";

import { openDeleteModal } from "@app/GlobalRedux/Features/delete/deleteSlice";
import { openUpdateModal } from "@app/GlobalRedux/Features/update/updateSlice";
import { setButtonType } from "@app/GlobalRedux/Features/button/buttonSlice";
import { useSession } from "next-auth/react";


function StaffCard({
  staffId,
  forenames,
  surname,
  rank,
  email,
  contact,
  profilePic,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  return (
    <div className="w-full h-max //outline //outline-black">
      <div
        key={staffId}
        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div className="flex flex-1 flex-col p-8">
          <img
            className="mx-auto h-64 w-64 flex-shrink-0 rounded-full"
            src={profilePic}
            alt=""
          />
          <div className="mt-3 text-2xl">{`${forenames} ${surname}`}</div>
          <div className="mt-2 text-lg">{rank}</div>
          <div className="w-full mt-3 flex justify-center">
            <div className="w-6/12 h-max pt-3 pb-3 flex justify-between //outline //outline-red-500">
              <div className="w-1/3 flex justify-center">
                <a
                  href={`mailto:${email}`}
                  className="w-full flex justify-center"
                >
                  <Image
                    src="/assets/icons/email.png"
                    width={35}
                    height={35}
                    alt="Navigation Icon"
                    style={{ objectFit: "contain" }}
                    //   onClick={() => dispatch(openMenu("visible"))}
                  />
                </a>
              </div>
              {session?.data?.user?.id ? (
                <div className="w-1/3 flex justify-center">
                  <a
                    href={`tel:${contact}`}
                    className="w-full flex justify-center"
                  >
                    <Image
                      src="/assets/icons/call.png"
                      width={35}
                      height={35}
                      alt="Navigation Icon"
                      style={{ objectFit: "contain" }}
                      //   onClick={() => dispatch(openMenu("visible"))}
                    />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {console.log(staffId)}
        {session?.data?.user?.id === staffId ? (
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <button
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  onClick={() => {
                    router.push(`/pages/${session?.data?.user?.id}/updateUser`);
                  }}
                >
                  Edit
                </button>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <button
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  onClick={() => {
                    dispatch(openDeleteModal("visible"));
                    dispatch(setButtonType("delete"));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
    // </div>
  );
}

export default StaffCard;

"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function StaffMembersCard({ staffId, forenames, surname, rank, profilePic }) {
  const router = useRouter();

  return (
    <li key={staffId} className="w-full h-20 //outline //outline-green-500  ">
      <button
        onClick={() => {
          router.push(
            "/pages/userId/explore/region/district/staff-members/staffId"
          );
        }}
        className="w-full h-full"
      >
        <div className=" flex items-center gap-x-3 pl-3 w-full h-full //outline //outline-red-500 bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-md ">
          <img className="h-16 w-16 rounded-full" src={profilePic} alt="" />
          <div className="//outline //outline-red-500 flex flex-col items-start">
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
              {`${forenames} ${surname}`}
            </h3>
            <p
              className="text-xs font-semibold leading-6 text-indigo-600"
              style={{ fontSize: 10 }}
            >
              {rank}
            </p>
          </div>
        </div>
      </button>
    </li>
  );
}

export default StaffMembersCard;

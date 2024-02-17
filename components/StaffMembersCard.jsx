"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";

function StaffMembersCard({
  staffId,
  forenames,
  surname,
  rank,
  district,
  region,
  profilePic,
}) {
  const router = useRouter();
  // const region = useSelector((state) => state.region.value);
  // const district = useSelector((state) => state.districts.value);

  return (
    <li key={staffId} className="w-full h-20 //outline //outline-green-500  ">
      <Link
        // onClick={() => {
        //   router.push(
        href={`/pages/userId/explore/${region.toLowerCase()}/${district.toLowerCase()}/staff-members/${staffId}`}
        // );
        // }}
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
      </Link>
    </li>
  );
}

export default StaffMembersCard;

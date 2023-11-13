"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function StaffMembersCard({ firstname, lastname, rank, profilePic }) {
  const router = useRouter();
  return (
    <div className="w-full h-72 //outline //outline-black">
      <button
        className=" w-full h-full  bg-transparent p-5 rounded-lg"
        onClick={() =>
          router.push(
            "/pages/userId/explore/region/district/staff-members/staffId"
          )
        }
      >
        <div className="w-full h-3/4 flex justify-center items-center //outline //outline-green-500">
          <Image
            src={profilePic}
            width={180}
            height={180}
            alt="Profile Picture"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center //outline //outline-blue-500">
          <div>
            {firstname}
            {lastname}
          </div>
          <div>{rank}</div>
        </div>
      </button>
    </div>
  );
}

export default StaffMembersCard;

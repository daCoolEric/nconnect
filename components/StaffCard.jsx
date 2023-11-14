"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import InfoTab from "./InfoTab";

function StaffCard({ firstname, lastname, rank, email, contact, profilePic }) {
  const router = useRouter();
  return (
    <div className="w-full h-max //outline //outline-black">
      {/* <div className=" w-full h-full  bg-transparent p-5 rounded-lg"> */}
      <div className="w-full h-2/6 flex justify-center items-center //outline //outline-green-500">
        <Image
          src={profilePic}
          width={180}
          height={180}
          alt="Profile Picture"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full h-4/6 flex flex-col justify-center items-center //outline //outline-blue-500">
        <InfoTab info={`${firstname} ${lastname}`} />
        <InfoTab info={rank} />
        <InfoTab info={email} />
        <InfoTab info={contact} />
      </div>
      <div></div>
    </div>
    // </div>
  );
}

export default StaffCard;

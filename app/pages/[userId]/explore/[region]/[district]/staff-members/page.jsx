"use client";
import React from "react";
import Link from "next/link";
import StaffMembersCard from "@components/StaffMembersCard";
import { Office_Staff } from "@utils/staff";

function StaffMembers() {
  return (
    <div className="h-3/4 w-screen">
      <div
        className="w-10/12 h-14 m-auto text-2xl flex justify-center items-center text-green-600 font-medium //outline //outline-black "
        // style={{ color: "#339B20" }}
      >
        Meet our Staff
      </div>

      <div className="bg-gray-100 py-6  sm:py-5 //outline //outline-green-600">
        <div className="flex justify-center //outline //outline-red-500">
          <ul
            role="list"
            className="grid gap-x-2 gap-y-6 sm:grid-cols-2 sm:gap-y-6 xl:col-span-2 w-11/12 //outline //outline-black"
          >
            {Office_Staff.map((staff) => {
              return (
                <StaffMembersCard
                  key={staff.id}
                  staffId={staff.id}
                  forenames={staff.forenames}
                  surname={staff.surname}
                  rank={staff.rank}
                  profilePic={staff.profilePic}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffMembers;

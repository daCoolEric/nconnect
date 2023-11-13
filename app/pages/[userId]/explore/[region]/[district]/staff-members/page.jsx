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
        Staff Members
      </div>
      {Office_Staff.map((staff) => {
        return (
          <StaffMembersCard
            key={staff.id}
            firstname={staff.firstName}
            lastname={staff.lastName}
            rank={staff.rank}
            profilePic={staff.profilePic}
          />
        );
      })}
    </div>
  );
}

export default StaffMembers;

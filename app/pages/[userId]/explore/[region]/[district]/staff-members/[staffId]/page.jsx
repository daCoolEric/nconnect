"use client";
import React from "react";
import Link from "next/link";
import StaffCard from "@components/StaffCard";
import { useSelector } from "react-redux";

function IndividualStaff() {
  // const firstName = useSelector((state) => state.firstname.value);
  // const lastName = useSelector((state) => state.lastname.value);
  // const rank = useSelector((state) => state.rank.value);
  // const email = useSelector((state) => state.email.value);
  // const contact = useSelector((state) => state.contact.value);
  return (
    <div className="h-3/4 w-screen">
      <div>
        <StaffCard
          firstname="Daniel"
          lastname="Adu-Gyamfi"
          rank="District Registration Officer"
          profilePic="/assets/images/profilePic.png"
          email="dadgy@gmail.com"
          contact="0500000000"
        />
      </div>
    </div>
  );
}

export default IndividualStaff;

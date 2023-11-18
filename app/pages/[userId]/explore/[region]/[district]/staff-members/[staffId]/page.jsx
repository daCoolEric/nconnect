"use client";
import React from "react";
import Link from "next/link";
import StaffCard from "@components/StaffCard";
import { useSelector } from "react-redux";

const people = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

function IndividualStaff() {
  // const firstName = useSelector((state) => state.firstname.value);
  // const lastName = useSelector((state) => state.lastname.value);
  // const rank = useSelector((state) => state.rank.value);
  // const email = useSelector((state) => state.email.value);
  // const contact = useSelector((state) => state.contact.value);
  return (
    <div className="h-3/4 w-screen">
      {/* <div>
        <StaffCard
          firstname="Daniel"
          lastname="Adu-Gyamfi"
          rank="District Registration Officer"
          profilePic="/assets/images/profilePic.png"
          email="dadgy@gmail.com"
          contact="0500000000"
        /> */}

      {/* -------------------- */}

      <div
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <StaffCard
          forenames="Daniel"
          surname="Adu-Gyamfi"
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

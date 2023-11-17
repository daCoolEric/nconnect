"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

function StaffMembersCard({ staffId, firstname, lastname, rank, profilePic }) {
  const router = useRouter();
  return (
    <div className="w-full h-72 //outline //outline-black">
      {/* <button
        className=" w-full h-full  bg-transparent p-5 rounded-lg"
        onClick={() =>
          router.push(
            `/pages/userId/explore/region/district/staff-members/${staffId}`
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
          <div>{`${firstname} ${lastname}`}</div>
          <div>{rank}</div>
        </div>
      </button> */}

      {/* -------------------------------------------------------------- */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffMembersCard;

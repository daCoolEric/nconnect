"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import StaffMembersCard from "@components/StaffMembersCard";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import StaffMembersCardSkeleton from "@components/StaffMembersCardSkeleton";

// import { Office_Staff } from "@utils/staff";

function StaffMembers() {
  const [loading, setLoading] = useState(false);
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  const [staffProfiles, setStaffProfiles] = useState([]);
  const [staffId, setStaffId] = useState("");
  const region = useSelector((state) => state.region.value);
  const district = useSelector((state) => state.districts.value);
  useEffect(() => {
    const getStaffProfiles = async () => {
      try {
        setLoading(true);
        console.log(region.toLowerCase());
        console.log(district.toLowerCase());
        const response = await axios.get(
          // `http://localhost:3000/api/${
          //   session?.data?.user?.id || uuidv4()
          // } /${region.toLowerCase()}/${district.toLowerCase()}/staffmembers`
          `https://nconnect-peid.vercel.app/api/${
            session?.data?.user?.id || uuidv4()
          }/${region.toLowerCase()}/${district.toLowerCase()}/staffmembers`
        );
        setStaffProfiles(response.data);
        console.log(staffProfiles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getStaffProfiles();
  }, []);
  return (
    <div className="h-3/4 w-screen">
      <div
        className="w-10/12 h-14 m-auto text-2xl flex justify-center items-center text-green-600 font-medium //outline //outline-black "
        // style={{ color: "#339B20" }}
      >
        {session?.data?.user?.id ? "Staff Members" : "Meet our Staff"}
      </div>

      <div className="bg-gray-100 py-4  sm:py-5 //outline //outline-green-600">
        <div className="flex justify-center //outline //outline-red-500">
          <ul
            role="list"
            className="grid gap-x-2 gap-y-6 sm:grid-cols-2 sm:gap-y-6 xl:col-span-2 w-11/12 //outline //outline-black"
          >
            {loading ? (
              <StaffMembersCardSkeleton number={4} />
            ) : (
              <>
                {console.log(staffProfiles)}
                {staffProfiles.map((staff) => {
                (session?.data?.user?.id === staff?.id)? setStaffId(staff?.id): null;
                  return (
                    <StaffMembersCard
                      key={staff?.id}
                      staffId={staff?.id}
                      forenames={staff?.forenames}
                      surname={staff?.surname}
                      rank={staff?.rank}
                      district={staff?.districtname}
                      region={staff?.region}
                      profilePic={staff?.photoUrl}
                    />
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="w-full mt-2 flex justify-end ">
        {session?.data?.user?.districtname === district && staffId === ""  ? (
          <Link
            className="w-1/3 flex justify-center items-center //outline //outline-red-500"
            href={`/pages/${session?.data?.user?.id}/addDetails`}
          >
            <Image
              src="/assets/icons/add.png"
              width={70}
              height={70}
              alt="Create Office Icon"
              style={{ objectFit: "contain" }}
            />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default StaffMembers;

// ------------------------------------------------------

// "use client";
// import React, { useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// export default function SkeletonLoading() {
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked(!checked);
//   };
//   return (
//     <div className="h-3/4 w-screen">
//       <label>
//         <input type="checkbox" checked={checked} onChange={handleChange} />
//         Loading
//       </label>
//       <p>
//         {checked ? (
//           <Skeleton />
//         ) : (
//           <h2>NextJs Skeleton Loading - GeeksforGeeks</h2>
//         )}
//       </p>
//     </div>
//   );
// }

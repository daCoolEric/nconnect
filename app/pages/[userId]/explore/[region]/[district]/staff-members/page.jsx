"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import StaffMembersCard from "@components/StaffMembersCard";
// import { Office_Staff } from "@utils/staff";

function StaffMembers() {
  const [staffProfiles, setStaffProfiles] = useState([]);
  useEffect(() => {
    const getStaffProfiles = async () => {
      try {
        const response = await axios.get(
          //`http://localhost:3000/api/userId/ashanti/subin`
          `https://nconnect-nu.vercel.app/api/userId/ashanti/subin`
        );
        setStaffProfiles(response.data);
        console.log(staffProfiles);
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
        Meet our Staff
      </div>

      <div className="bg-gray-100 py-4  sm:py-5 //outline //outline-green-600">
        <div className="flex justify-center //outline //outline-red-500">
          <ul
            role="list"
            className="grid gap-x-2 gap-y-6 sm:grid-cols-2 sm:gap-y-6 xl:col-span-2 w-11/12 //outline //outline-black"
          >
            {console.log(staffProfiles)}
            {staffProfiles.map((staff) => {
              return (
                <StaffMembersCard
                  key={staff?.id}
                  staffId={staff?.id}
                  forenames={staff?.forenames}
                  surname={staff?.surname}
                  rank={staff?.rank}
                  profilePic={staff?.photoUrl}
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

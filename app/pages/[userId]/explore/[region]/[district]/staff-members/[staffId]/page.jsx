"use client";
import React, { useEffect, useState } from "react";
import StaffCard from "@components/StaffCard";
import { useSelector } from "react-redux";
import { redirect, useParams } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import StaffCardSkeleton from "@components/StaffCardSkeleton";

function IndividualStaff() {
  let { staffId } = useParams();
  const [loading, setLoading] = useState(false);
  const region = useSelector((state) => state.region.value);
  const district = useSelector((state) => state.districts.value);

  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });

  const [staffProfile, setStaffProfile] = useState([]);
  useEffect(() => {
    const getStaffProfiles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          // `http://localhost:3000/api/userId/${region.toLowerCase()}/${district.toLowerCase()}/${staffId}`
          `https://nconnect-peid.vercel.app/api/userId/${region.toLowerCase()}/${district.toLowerCase()}/${staffId}`
        );

        setStaffProfile(response.data);
        console.log(response);
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
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {loading ? (
          <StaffCardSkeleton />
        ) : (
          <StaffCard
            forenames={staffProfile.forenames}
            surname={staffProfile.surname}
            rank={staffProfile.rank}
            profilePic={staffProfile.photoUrl}
            staffId={staffProfile.staffId}
            email={staffProfile.email}
            contact={staffProfile.contact}
          />
        )}
      </div>
    </div>
  );
}

export default IndividualStaff;

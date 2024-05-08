"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";
import { v4 as uuidv4 } from "uuid";
import { setRegion } from "@app/GlobalRedux/Features/region/regionSlice";
import { useSession } from "next-auth/react";


const RegionsCard = ({ region }) => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  const router = useRouter();
  const dispatch = useDispatch();


  const navigateToDistrictPage = (region) => {
    router.push(
      `/pages/${
        session?.data?.user?.id || uuidv4()
      }/explore/${region.toLowerCase()}/`
    );
 
  };

  return (
    <div className="w-full h-20 //outline //outline-black">
      <button
        className=" w-full h-full  flex justify-center items-center bg-green-400 p-5 rounded-lg text-slate-50 font-semibold"
        onClick={() => {
          navigateToDistrictPage(region);
          dispatch(setDistricts(region));
          dispatch(setRegion(region));
        }}
      >
        {region}
      </button>
    </div>
  );
};

export default RegionsCard;

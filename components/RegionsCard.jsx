"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";

const RegionsCard = ({ region }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="w-full h-20 //outline //outline-black">
      <button
        className=" w-full h-full  bg-green-400 p-5 rounded-lg text-slate-50 font-semibold"
        onClick={() => {
          router.push(`/pages/userId/explore/${region.toLowerCase()}/`);
          dispatch(setDistricts(region));
        }}
      >
        {region}
      </button>
    </div>
  );
};

export default RegionsCard;

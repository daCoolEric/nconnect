"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";

import axios from "axios";
import { setRegion } from "@app/GlobalRedux/Features/region/regionSlice";
import { setData } from "@app/GlobalRedux/Features/data/dataSlice";

const RegionsCard = ({ region }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const officeData = useSelector((state) => state.data.value);

  const getRegionData = async ({ region }) => {
    try {
      const response = await axios.get(
        `https://nconnect-nu.vercel.app/api/userId/${region}`
        // `http://localhost:3000/api/userId/${region}`
      );
      response.data.map((info) => {
        dispatch(setData(info));
      });
      console.log(response.data);
      // console.log(officeData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-20 //outline //outline-black">
      <button
        className=" w-full h-full  bg-green-400 p-5 rounded-lg text-slate-50 font-semibold"
        onClick={() => {
          getRegionData(region);
          router.push(`/pages/userId/explore/${region.toLowerCase()}/`);
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

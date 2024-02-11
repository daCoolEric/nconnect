"use client";
import React from "react";

import DistrictsCard from "@components/DistrictsCard";
import { districtDB } from "@utils/districts.js";
import { useSelector } from "react-redux";

function Region() {
  const region = useSelector((state) => state.districts.value);
  const district = useSelector((state) => state.districts.value);

  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <div
        className="grid grid-cols-1 gap-6 //outline //outline-black w-full place-items-center"

        // style={{ height: "100%" }}
      >
        <div
          className="w-11/12 text-2xl flex justify-center items-center text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Select an Office
        </div>
        <div
          className="w-10/12 text-xl flex justify-center items-center text-red-600 font-medium //outline //outline-black "
          // style={{ color: "#339B20" }}
        >
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="10"
            className="w-full"
          >
            Do not refresh this page
          </marquee>
        </div>
        <div className="w-10/12 m-auto">
          <div className="grid grid-cols-2 gap-4">
            {districtDB[region].map((district) =>
              district.district !== "SELECT YOUR DISTRICT" ? (
                <DistrictsCard key={district.id} district={district.district} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Region;

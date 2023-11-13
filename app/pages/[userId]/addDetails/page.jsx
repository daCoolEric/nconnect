"use client";
import React from "react";
import Button from "@components/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DistrictsSelector from "@components/DistrictsSelector";
import Input from "@components/Input";
import RankSelector from "@components/RankSelector";
import RegionsSelector from "@components/RegionsSelector";

function page() {
  const specificRegion = useSelector((state) => state.districts.value);

  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div className="grid grid-cols-1 gap-4 //outline //outline-black">
        <div className="w-10/12 m-auto text-2xl text-green-600 font-medium ">
          Add Details
        </div>
        <div className="w-10/12 h-14 m-auto">
          <Input placeholder="Enter your firstname" type="text" />
        </div>
        <div className="w-10/12 h-14 m-auto">
          <Input placeholder="Enter your lastname" type="text" />
        </div>
        <div className="w-10/12 h-14 m-auto">
          <RankSelector name="ranks" />
        </div>
        <div className="w-10/12 h-14 m-auto">
          <RegionsSelector name="regions" />
        </div>
        <div className="w-10/12 h-14 m-auto">
          <DistrictsSelector name={specificRegion} />
        </div>
        <div className="w-10/12 h-14 m-auto">
          <Input placeholder="Enter your email" type="email" />
        </div>
        <div className="w-10/12 h-14 m-auto">
          <Input placeholder="Enter your contact" type="text" />
        </div>
        <div
          className="w-10/12 h-16 m-auto flex justify-center items-center"
          onClick={() => {
            validate_NIA_Staff();
          }}
        >
          <Button name="Add Details" />
        </div>
      </div>
    </div>
  );
}

export default page;

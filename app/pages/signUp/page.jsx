"use client";
import React from "react";
import Link from "next/link";
import Input from "@components/Input";
import Button from "@components/Button";
import { useSelector } from "react-redux";
import Select from "@components/RegionsSelector";
import DistrictsSelector from "@components/DistrictsSelector";
import RankSelector from "@components/RankSelector";
import RegionsSelector from "@components/RegionsSelector";

function SignUp() {
  const specificRegion = useSelector((state) => state.districts.value);
  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div
        className="grid grid-cols-1 gap-4 //outline //outline-black"
        // style={{ height: "100%" }}
      >
        <div
          className="w-11/12 m-auto text-2xl text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Staff Only
        </div>
        <div className="w-11/12 h-14 m-auto //outline //outline-black ">
          <Input
            placeholder="Enter your PIN (eg. GHA-000000000-0 )"
            type="text"
          />
        </div>
        <div className="w-11/12 h-14 m-auto">
          <Input placeholder="Enter your password" type="password" />
        </div>
        <div className="w-11/12 h-14 m-auto">
          <Input placeholder="Confirm your password" type="password" />
        </div>
        <div className="w-11/12 h-14 m-auto">
          <RankSelector name="ranks" />
        </div>
        <div className="w-11/12 h-14 m-auto">
          <RegionsSelector name="regions" />
        </div>
        <div className="w-11/12 h-14 m-auto">
          <DistrictsSelector name={specificRegion} />
        </div>
        <div className="w-11/12 h-14 m-auto">
          <Input placeholder="Enter your email" type="password" />
        </div>
        <div className="w-11/12 h-14 m-auto">
          <Input placeholder="Enter your contact" type="password" />
        </div>
        <div className="w-11/12 h-16 m-auto flex justify-center items-center">
          <Button name="Sign Up" />
        </div>
        <div className="w-11/12 h-14 m-auto text-xl text-green-600">
          Already have an account?{" "}
          <span className="text-blue-500">
            <Link href="/pages/signIn">Sign In</Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

"use client";
import React, { useState } from "react";
import { regionDB } from "@utils/categories";
import { ranksDB } from "@utils/ranks";
import { districtDB } from "@utils/districts";
import { useDispatch, useSelector } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";

function Select({ name }) {
  //useSelector gets the state from store
  const region = useSelector((state) => state.districts.value); // Access the counter state
  // const [visible, setVisible] = useState("hidden");
  const dispatch = useDispatch();
  const districts = districtDB[region];
  const [value, setValue] = useState("b");
  function logValue() {
    console.log(value);
  }
  return (
    <div
      className="w-full h-full flex justify-center items-center rounded-3xl "
      style={{ backgroundColor: "#CAFDDE" }}
    >
      <select
        value={value}
        onChange={(e) => {
          dispatch(setDistricts(e.target.value));
          setValue(e.target.value);
        }}
        className="bg-transparent focus:outline-none ml-4 mr-4 w-full"
      >
        {name === "regions"
          ? regionDB.map((region) => (
              <option value={region.region}>{region.region}</option>
            ))
          : name === "ranks"
          ? ranksDB.map((rank) => (
              <option value={rank.rank}>{rank.rank}</option>
            ))
          : name === region
          ? districts.map((district) => (
              <option value={district.district}>{district.district}</option>
            ))
          : null}
      </select>
    </div>
  );
}

export default Select;

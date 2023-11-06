"use client";
import React, { useState } from "react";
import { districtDB } from "@utils/districts";
import { useDispatch, useSelector } from "react-redux";

function DistrictsSelector({ name }) {
  //useSelector gets the state from store
  const region = useSelector((state) => state.districts.value); // Access the counter state
  // const [visible, setVisible] = useState("hidden");
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
          setValue(e.target.value);
        }}
        className="bg-transparent focus:outline-none ml-4 mr-4 w-full"
      >
        {name === region
          ? districts.map((district) => (
              <option value={district.district}>{district.district}</option>
            ))
          : null}
      </select>
    </div>
  );
}
export default DistrictsSelector;

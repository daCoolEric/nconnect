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
    <div className="mt-2" style={{ backgroundColor: "#FFFFFF" }}>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="block w-full rounded-md border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
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

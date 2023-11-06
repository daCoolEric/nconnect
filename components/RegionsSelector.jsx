"use client";
import React, { useState } from "react";
import { regionDB } from "@utils/categories";

import { useDispatch } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";

function RegionsSelector({ name }) {
  const dispatch = useDispatch();

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
          : null}
      </select>
    </div>
  );
}

export default RegionsSelector;

"use client";
import React, { useState } from "react";
import { ranksDB } from "@utils/ranks";

function RankSelector({ name }) {
  const [value, setValue] = useState("b");
  function logValue() {
    console.log(value);
  }
  return (
    <div className="mt-2 " style={{ backgroundColor: "#FFFFFF" }}>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="block w-full rounded-md border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
      >
        {name === "ranks"
          ? ranksDB.map((rank) => (
              <option value={rank.rank}>{rank.rank}</option>
            ))
          : null}
      </select>
    </div>
  );
}

export default RankSelector;

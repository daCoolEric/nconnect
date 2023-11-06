"use client";
import React, { useState } from "react";
import { ranksDB } from "@utils/ranks";

function RankSelector({ name }) {
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

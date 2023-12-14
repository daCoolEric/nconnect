import React from "react";
import Image from "next/image";

function Search() {
  return (
    <div
      className="//outline //outline-black w-11/12 h-3/6 flex justify-center flex-row items-center bg-white rounded-3xl"
      style={{ border: "2px solid #6dab3c" }}
    >
      <div className="w-5/6 h-full flex items-center">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full m-5 focus:outline-none"
        />
      </div>
      <div className="w-1/6 h-full flex justify-center items-center">
        <Image
          src="/assets/icons/search.svg"
          width={30}
          height={30}
          alt="Search Icon"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default Search;

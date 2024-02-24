"use client";
import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function StaffMembersCardSkeleton({ number }) {
  return Array(number)
    .fill(0)
    .map((el, index) => (
      <div
        key={index}
        className="w-full h-20 flex justify-center items-center //outline //outline-green-500  "
      >
        <div className="w-11/12 h-full">
          <div className=" flex items-center gap-x-3 pl-3 w-full h-full //outline //outline-red-500 bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-md ">
            <Skeleton circle={true} width={50} height={50} />
            <div className="//outline //outline-red-500 flex flex-col items-start">
              <div className="w-full">
                <Skeleton width={250} />
              </div>
              <div className="w-full">
                <Skeleton width={250} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
}

export default StaffMembersCardSkeleton;

"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function StaffCardSkeleton() {
  return (
    <div className="w-full h-max //outline //outline-black">
      <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div className="flex flex-1 flex-col p-8">
          <Skeleton
            circle={true}
            width={250}
            height={250}
            className="mx-auto h-64 w-64 flex-shrink-0 rounded-full"
          />

          <div className="mt-3 ">
            <Skeleton height={40} />
          </div>
          <div className="mt-2 ">
            <Skeleton height={40} />
          </div>
          <div className="mt-2 ">
            <Skeleton height={40} />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default StaffCardSkeleton;

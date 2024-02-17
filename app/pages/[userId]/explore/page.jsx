"use client";
import React, { useEffect } from "react";
import { regionDB } from "@utils/regions";
import RegionsCard from "@components/RegionsCard";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { GUEST } from "@utils/guest";

function Regions() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });

  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <div
        className="grid grid-cols-1 gap-6 //outline //outline-black w-full"
        // style={{ height: "100%" }}
      >
        {console.log(session)}
        {session?.data || uuidv4() ? (
          <>
            <div
              className="w-11/12 text-2xl flex justify-center items-center text-green-600 font-medium "
              // style={{ color: "#339B20" }}
            >
              Select a region
            </div>
            <div className="w-10/12 m-auto">
              <div className="grid grid-cols-2 gap-4 h-fit">
                {regionDB.map((region) =>
                  region.region !== "SELECT YOUR REGION" ? (
                    <RegionsCard key={region.id} region={region.region} />
                  ) : null
                )}
              </div>
            </div>
          </>
        ) : null}

        {/* <CardSkeleton amount={10} /> */}
      </div>
    </div>
  );
}
Regions.requireAuth = true;

export default Regions;

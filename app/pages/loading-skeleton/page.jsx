import StaffMembersCardSkeleton from "@components/StaffMembersCardSkeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingSkeleton() {
  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <StaffMembersCardSkeleton number={5} />
    </div>
  );
}

export default LoadingSkeleton;

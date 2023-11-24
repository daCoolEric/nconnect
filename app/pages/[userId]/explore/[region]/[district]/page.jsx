import React from "react";
import Link from "next/link";
function District() {
  return (
    <div className="h-3/4 w-screen">
      {/* Specific District
      <Link href="/pages/userId/explore/">All Regions</Link>
      <Link href="/pages/userId/explore/region/">All Districts</Link>
      <Link href="/pages/userId/explore/region/district/staff-members">
        Staff members
      </Link>
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/signUp">Sign Up</Link> */}
      <div
        className="outline outline-blue-700 w-screen h-1/2 "
        style={{
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      >
        Office Image
      </div>
      <div className="outline outline-blue-700 w-screen h-1/2">
        <div className="outline outline-red-700 w-11/12 m-auto h-1/2">
          Office Info
        </div>
        <div className="outline outline-yellow-600 w-11/12 m-auto h-1/2">
          More often
        </div>
        <div className="outline outline-yellow-600 w-11/12 m-auto h-1/2">
          More often
        </div>
      </div>
    </div>
  );
}

export default District;

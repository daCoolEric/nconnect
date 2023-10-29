import React from "react";
import Link from "next/link";
function StaffMembers() {
  return (
    <div className="h-3/4 w-screen">
      Staff Members
      <Link href="/pages/userId/explore/">All Regions</Link>
      <Link href="/pages/userId/explore/region/">All Districts</Link>
      <Link href="/pages/userId/explore/region/district/staff-members">
        Staff members
      </Link>
      <Link href="/pages/userId/explore/region/district/staff-members/staffId">
        Selected Staff
      </Link>
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/signUp">Sign Up</Link>
    </div>
  );
}

export default StaffMembers;

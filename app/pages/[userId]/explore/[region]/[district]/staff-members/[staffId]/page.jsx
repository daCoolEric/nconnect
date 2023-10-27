import React from "react";
import Link from "next/link";
function IndividualStaff() {
  return (
    <div>
      Individual Staff
      <Link href="/pages/userId/explore/">All Regions</Link>
      <Link href="/pages/userId/explore/region/">All Districts</Link>
      <Link href="/pages/userId/explore/region/district/staff-members">
        Staff members
      </Link>
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/signUp">Sign Up</Link>
    </div>
  );
}

export default IndividualStaff;

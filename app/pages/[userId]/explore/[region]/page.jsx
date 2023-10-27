import React from "react";
import Link from "next/link";
function Region() {
  return (
    <div>
      List of Districts
      <Link href="/pages/123/explore">Explore</Link>
      <Link href="/pages/userId/explore/">All Regions</Link>
      <Link href="/pages/userId/explore/region/district">
        Selected District
      </Link>
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/signUp">Sign Up</Link>
    </div>
  );
}

export default Region;

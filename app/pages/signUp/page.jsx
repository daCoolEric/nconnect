import React from "react";
import Link from "next/link";
function SignUp() {
  return (
    <div className="h-3/4 w-screen">
      SignUp Page
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/userId/explore/">All Regions</Link>
    </div>
  );
}

export default SignUp;

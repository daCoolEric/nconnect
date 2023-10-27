import React from "react";
import Link from "next/link";
function SignUp() {
  return (
    <div>
      SignUp Page
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/userId/explore/">All Regions</Link>
    </div>
  );
}

export default SignUp;

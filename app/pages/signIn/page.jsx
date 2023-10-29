import React from "react";
import Link from "next/link";
function SignIn() {
  return (
    <div className="h-3/4 w-screen  outline outline-black">
      SignIn Page
      <Link href="/pages/signUp">Sign Up</Link>
      <Link href="/pages/123/explore">Explore</Link>
      <Link href="/">Landing Page</Link>
    </div>
  );
}

export default SignIn;

"use client";
import Link from "next/link";

const LandingPage = () => {
  return (
    // Mobile view
    <>
      <div className="h-screen w-full bg-[url('/public/assets/images/background.png')]">
        <div className="h-1/4 outline">NConnect</div>
        <div className="h-3/4 outline outline-black">
          <Link href="/pages/signIn">Sign In</Link>
        </div>
      </div>

      {/* Desktop View */}
    </>
  );
};

export default LandingPage;

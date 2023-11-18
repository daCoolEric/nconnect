"use client";
import Link from "next/link";

const LandingPage = () => {
  return (
    // Mobile view
    <>
      <div className=" relative h-screen w-full bg-[url('/assets/images/background-image.jpg')] ">
        <div className=" absolute inset-0 bg-green-60"></div>
        <div className="h-1/4 outline">NConnect</div>
        {/* <div className="h-3/4 outline outline-black"> */}
        <div className="mb-1">
          <p className=" text-6xl font-semibold text-slate-50 grid justify-items-center opacity-100">
            Search, Locate <br /> & Contact any <br /> NIA office near <br />
            you
          </p>
        </div>
        <div className="grid justify-items-center">
          <button className="bg-slate-50 w-5/6 mb-5 text-green-600 block p-3 text-2xl font-medium rounded-lg z-0">
            <Link href="/pages/userId/explore/">Explore</Link>
          </button>{" "}
          <br />
          <button className="bg-green-600 w-5/6 text-slate-50 block p-3  text-2xl font-medium rounded-lg z-0">
            <Link href="/pages/signIn">Sign In</Link>
          </button>
        </div>
      </div>

      {/* Desktop View */}
    </>
  );
};

export default LandingPage;

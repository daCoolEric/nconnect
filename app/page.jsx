"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  return (
    // Mobile view
    <>
      <div className=" relative h-screen w-screen bg-[url('/assets/images/background-image.jpg')] ">
        <div className=" absolute z-10 bg-green-700 opacity-95 w-screen h-screen outline outline-red-500"></div>
        <div className="absolute z-20 w-screen h-screen">
          <div className="h-1/4 //outline flex justify-center items-center">
            <Image
              src="/assets/images/logo.png"
              width={250}
              height={250}
              alt="NConnect Logo"
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* <div className="h-3/4 outline outline-black"> */}
          <div className="mb-1 h-3/4">
            <div className="h-1/2 flex justify-center items-center">
              <div className=" text-5xl font-semibold text-slate-50 w-10/12 flex justify-center items-center //outline //outline-red-500">
                Search, Locate & Contact any NIA office near you.
              </div>
            </div>
            <div className="h-1/2 flex justify-center items-center //outline">
              <div className="w-full h-3/4 grid justify-items-center //outline //outline-red-500 ">
                <div className="h-16 w-11/12">
                  <div className="w-full h-full mt-2 flex justify-center bg-white rounded-lg hover:bg-slate-200 py-1 ">
                    <button
                      type="button"
                      className="text-green-400 text-2xl font-medium w-full"
                      onClick={() => {
                        router.push("/pages/userId/explore");
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
                <div className="h-16 w-11/12">
                  <button
                    className="w-full h-full flex justify-center items-center bg-green-400 rounded-lg hover:bg-green-300 py-1 text-white text-2xl font-medium "
                    onClick={() => {
                      router.push("/pages/signIn");
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
    </>
  );
};

export default LandingPage;

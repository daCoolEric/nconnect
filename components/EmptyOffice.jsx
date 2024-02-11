import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { resetData } from "@app/GlobalRedux/Features/data/dataSlice";
import { resetOffice } from "@app/GlobalRedux/Features/office/office";
import { resetOfficeData } from "@app/GlobalRedux/Features/officeData/officeDataSlice";

import { useRouter } from "next/router";

function EmptyOffice() {
  //   const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-5/6 flex flex-col justify-center items-center">
        <div
          className="w-10/12 text-xl flex justify-center items-center text-red-600 font-medium //outline //outline-black "
          // style={{ color: "#339B20" }}
        >
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="10"
            className="w-full"
          >
            Do not refresh this page
          </marquee>
        </div>
        <div className="w-full h-2/6 flex justify-center items-center //outline //outline-lime-500">
          <Image
            src="/assets/images/emptyOffice.png"
            width={250}
            height={250}
            alt="Empty Office Image"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-full h-2/6 flex flex-col justify-center items-center //outline //outline-lime-500">
          <div className="w-fit pr-5 pl-5">
            <h1>Looks like there is no office at the moment.</h1>
          </div>
          <div className="w-fit pr-5 pl-5">
            <h2>
              Contact your Regional Registration Officer / District Registration
              Officer to create an office.
            </h2>
          </div>
        </div>

        <div className="w-full h-2/6 flex justify-center items-center //outline //outline-lime-500">
          <div className="w-full  flex justify-between items-center //outline //outline-lime-500">
            <div className="w-1/3 pl-5 //outline //outline-lime-500">
              <button
                onClick={() => {
                  dispatch(resetOfficeData());
                  dispatch(resetData());
                  dispatch(resetOffice());
                }}
                className="w-full"
              >
                <Link
                  href={`/pages/${session?.data?.user?.id}/explore/`}
                  className="w-full"
                >
                  <p className="text-2xl text-blue-600">Explore</p>
                </Link>
              </button>
            </div>
            {console.log(session)}
            {session?.data?.user?.role !== "staff" ? (
              <Link
                className="w-1/3 flex justify-center items-center //outline //outline-red-500"
                href={`/pages/${session?.data?.user?.id}/createOffice`}
              >
                <Image
                  src="/assets/icons/add.png"
                  width={70}
                  height={70}
                  alt="Create Office Icon"
                  style={{ objectFit: "contain" }}
                />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyOffice;

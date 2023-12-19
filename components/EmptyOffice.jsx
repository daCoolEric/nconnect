import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { resetData } from "@app/GlobalRedux/Features/data/dataSlice";
import { resetOffice } from "@app/GlobalRedux/Features/office/office";
import { resetOfficeData } from "@app/GlobalRedux/Features/officeData/officeDataSlice";

import { useRouter } from "next/router";

function EmptyOffice() {
  //   const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-5/6 flex flex-col justify-center items-center">
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
                <Link href="/pages/userId/explore/" className="w-full">
                  <p className="text-2xl text-blue-600">Explore</p>
                </Link>
              </button>
            </div>

            <Link
              className="w-1/3 flex justify-center items-center //outline //outline-red-500"
              href={"/pages/userId/region/district/createOffice"}
            >
              <Image
                src="/assets/icons/add.png"
                width={70}
                height={70}
                alt="Create Office Icon"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyOffice;

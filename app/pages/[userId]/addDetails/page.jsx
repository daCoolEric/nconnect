"use client";
import React from "react";
import Button from "@components/Button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import DistrictsSelector from "@components/DistrictsSelector";
import Input from "@components/Input";
import RankSelector from "@components/RankSelector";
import RegionsSelector from "@components/RegionsSelector";

import Image from "next/image";

function page() {
  const specificRegion = useSelector((state) => state.districts.value);

  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div className="flex h-fit flex-1 flex-col justify-start px-6 py-3 lg:px-8 //outline //outline-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-black">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
            Add more information
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-blue-700">
          <form className="space-y-6" action="#" method="POST">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center //outline //outline-red-500 w-2/6 gap-x-3 relative">
                <Image
                  src="/assets/images/profilePic.png"
                  width={100}
                  height={100}
                  alt="Profile Picture"
                  style={{ objectFit: "contain" }}
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 absolute bottom-1 right-1 "
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Forenames
              </label>
              <Input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                placeholder="Enter your forenames (ex. Eric Kodzo )"
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Surname
              </label>
              <Input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                placeholder="Enter your surname (ex. Ayi )"
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Rank
              </label>
              <RankSelector name="ranks" />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Region
              </label>
              <RegionsSelector name="regions" />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                District
              </label>
              <DistrictsSelector name={specificRegion} />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Contact
              </label>
              <Input
                id="contact"
                name="contact"
                type="contact"
                autoComplete="contact"
                placeholder="Enter your phone number (ex. 0500000000 )"
              />
            </div>
            <div className="h-16 //outline //outline-black">
              <div
                onClick={() => {
                  validate_NIA_Staff();
                }}
                className="h-full mt-3 //outline //outline-black"
              >
                <Button type="submit" name="Add details" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;

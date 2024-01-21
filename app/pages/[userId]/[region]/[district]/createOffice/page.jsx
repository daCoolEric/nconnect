"use client";
import React, { useState } from "react";
import Button from "@components/Button";
import { useParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import DistrictsSelector from "@components/DistrictsSelector";
import Input from "@components/Input";

import Image from "next/image";
import axios from "axios";
import { setLocation } from "@app/GlobalRedux/Features/createOffice/locationSlice";
import { setStaffCapacity } from "@app/GlobalRedux/Features/createOffice/staffCapacitySlice";
import { setDistrictName } from "@app/GlobalRedux/Features/createOffice/districtNameSlice";
import { setAddress } from "@app/GlobalRedux/Features/createOffice/addressSlice";
import { setOfficeContact } from "@app/GlobalRedux/Features/createOffice/officeContactSlice";
import { closeLoaderModal } from "@app/GlobalRedux/Features/loader/loaderSlice";

function page() {
  const params = useParams();
  const dispatch = useDispatch();
  // states
  const location = useSelector((state) => state.location.value);
  const staffCapacity = useSelector((state) => state.staffCapacity.value);
  const districtname = useSelector((state) => state.districtName.value);
  const contact = useSelector((state) => state.officeContact.value);
  const address = useSelector((state) => state.address.value);

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  const createOffice = async () => {
    try {
      console.log({
        districtname,
        location,
        address,
        staffCapacity,
        contact,
      });
      const response = await axios.post(
        // `http://localhost:3000/api/userId/ashanti`,
        `https://nconnect-nu.vercel.app/api/userId/ashanti`,
        {
          districtname: districtname.toLowerCase(),
          location,
          address,
          staffCapacity,
          contact,
        }
      );

      if (response.status === 200) {
        dispatch(closeLoaderModal("hidden"));
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const specificRegion = useSelector((state) => state.districts.value);

  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div className="flex h-fit flex-1 flex-col justify-start px-4  lg:px-8 //outline //outline-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-black">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
            Create your Office
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-blue-700">
          <form className="space-y-6" action="#" method="POST">
            <div className="flex justify-center items-center //outline //outline-green-500 w-full h-56 ">
              <div className="flex justify-center items-center //outline //outline-red-500 w-full h-full gap-x-3 relative">
                <Image
                  src="/assets/images/officePlaceholder.png"
                  width={400}
                  height={400}
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
                District
              </label>
              <DistrictsSelector
                name={specificRegion}
                onChange={(e) => {
                  dispatch(setDistrictName(e.target.value));
                }}
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Staff Capacity
              </label>
              <Input
                id="text"
                name="text"
                type="text"
                onChange={(e) => {
                  dispatch(setStaffCapacity(e.target.value));
                }}
                autoComplete="text"
                placeholder="Enter the number of staff (ex. 5 )"
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Location
              </label>
              <Input
                id="text"
                name="text"
                type="text"
                onChange={(e) => {
                  dispatch(setLocation(e.target.value));
                }}
                autoComplete="text"
                placeholder="Enter office location"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Address
              </label>
              <Input
                id="text"
                name="text"
                type="text"
                onChange={(e) => {
                  dispatch(setAddress(e.target.value));
                }}
                autoComplete="text"
                placeholder="Enter office digital address"
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
                onChange={(e) => {
                  dispatch(setOfficeContact(e.target.value));
                }}
                autoComplete="contact"
                placeholder="Enter office contact number (ex. 0500000000 )"
              />
            </div>
            <div className="h-16 //outline //outline-black">
              <div
                onClick={() => {
                  createOffice();
                }}
                className="h-full mt-3 //outline //outline-black"
              >
                <Button id="createOffice" type="submit" name="Create Office" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;

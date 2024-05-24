"use client";
import React, { useState } from "react";
// import Button from "@components/Button";
// import { useParams } from "next/navigation";
import { regionDB } from "@utils/regions";
import { districtDB } from "@utils/districts.js";

import { useDispatch, useSelector } from "react-redux";

import Input from "@components/Input";

import Image from "next/image";
import axios from "axios";
import { redirect } from 'next/navigation'
// import { closeLoaderModal } from "@app/GlobalRedux/Features/loader/loaderSlice";
import { openCropModal } from "@app/GlobalRedux/Features/cropModal/cropModalSlice";
// import { setImageToCrop } from "@app/GlobalRedux/Features/cropModal/imageToBeCroppedSlice";
import { setBanner } from "@app/GlobalRedux/Features/cropModal/bannerSlice";
import { setBannerPreview } from "@app/GlobalRedux/Features/cropModal/bannerPreviewSlice";
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";

function CreateOffice() {

  const router = useRouter(); 

  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });

  // const params = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // states
  const defaultBanner = "/assets/images/officePlaceholder.png";

  const bannerPreview = useSelector((state) => state.bannerPreview.value);
  const banner = useSelector((state) => state.banner.value);

  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [districtname, setDistrictName] = useState("SELECT YOUR RANK");
  const [region, setRegion] = useState("SELECT YOUR REGION");
  const [staffCapacity, setStaffCapacity] = useState("");
  const [contact, setContact] = useState("");
  const [officeCreated, setOfficeCreated] = useState(false);

 

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.set("region", region);
    formData.set("districtname", districtname);
    formData.set("location", location);
    formData.set("address", address);
    formData.set("staffCapacity", staffCapacity);
    formData.set("contact", contact);
    formData.set("banner", banner);

    try {
      console.log({
        region,
        districtname,
        location,
        address,
        staffCapacity,
        contact,
        banner,
      });
      const response = await axios.post(
        //`http://localhost:3000/api/userId/${region.toLowerCase()}/create_office`,
        `https://nconnect-peid.vercel.app/api/userId/${region.toLowerCase()}/create_office`,

        {
          region: region.toLowerCase(),
          districtname: districtname.toLowerCase(),
          location,
          address,
          staffCapacity,
          contact,
          banner,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Office Created Successfully");
      if (response.status === 200) {
        setOfficeCreated(true);
        router.push(
          `/pages/${
            session?.data?.user?.id 
          }/explore/`)
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const editBanner = () => {
    dispatch(openCropModal("visible"));
  };

  // let reader = new FileReader();
  // reader.readAsDataURL(banner);
  // reader.onloadend = function () {
  //   var base64data = reader.result;
  //   console.log(base64data);
  // };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        dispatch(setBannerPreview(reader.result));
      }
    };
    dispatch(setBanner(e.target.files[0]));
    // dispatch(setBanner(URL.createObjectURL(e.target.files[0])));
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div className="flex h-fit flex-1 flex-col justify-start px-4  lg:px-8 //outline //outline-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-black">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
            Create your Office
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-blue-700">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={submitHandler}
          >
            <div className="flex justify-center items-center //outline //outline-green-500 w-full h-56 ">
              <div className="flex justify-center items-center //outline //outline-red-500 w-full h-full overflow-hidden gap-x-3 relative">
                <Image
                  src={bannerPreview}
                  width={640}
                  height={427}
                  alt="Profile Picture"
                  style={{ objectFit: "contain" }}
                />

                {bannerPreview !== defaultBanner && (
                  <button
                    type="button"
                    className="rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 absolute top-1 right-1 "
                    onClick={editBanner}
                  >
                    <Image
                      src="/assets/icons/edit.png"
                      width={30}
                      height={30}
                      alt="Profile Picture"
                      style={{ objectFit: "contain" }}
                    />
                  </button>
                )}

                <button
                  type="button"
                  className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 absolute bottom-1 right-1 "
                >
                  <label
                    htmlFor="formFile"
                    className="block text-lg font-medium leading-6 text-black-600"
                  >
                    +
                  </label>

                  <input
                    className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-6 hidden"
                    type="file"
                    id="formFile"
                    onChange={onChange}
                    hidden
                  />
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Region
              </label>
              <div className="mt-2" style={{ backgroundColor: "#FFFFFF" }}>
                <select
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                  }}
                  className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                >
                  {regionDB.map((region) => (
                    <option value={region.region}>{region.region}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                District
              </label>
              <div className="mt-2" style={{ backgroundColor: "#FFFFFF" }}>
                <select
                  value={districtname}
                  onChange={(e) => {
                    setDistrictName(e.target.value);
                  }}
                  className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                >
                  {region !== "SELECT YOUR REGION"
                    ? districtDB[region].map((district) => (
                        <option value={district.district}>
                          {district.district}
                        </option>
                      ))
                    : null}
                </select>
              </div>
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
                  setStaffCapacity(e.target.value);
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
                  setLocation(e.target.value);
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
                  setAddress(e.target.value);
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
                  setContact(e.target.value);
                }}
                autoComplete="contact"
                placeholder="Enter office contact number (ex. 0500000000 )"
              />
            </div>
            <div className="h-16 //outline //outline-black">
              <div
                className="w-full h-full mt-2 flex justify-center items-center bg-green-400 rounded-lg hover:bg-green-300 py-1"
                style={{ backgroundColor: "#6dab3c" }}
              >
                <button
                  type="submit"
                  className="my-2 px-4 py-2 text-center w-full inline-block text-2xl text-white border border-transparent "
                >
                  {loading && !officeCreated
                    ? "Creating Office"
                    : "Create Office"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
CreateOffice.requireAuth = true;
export default CreateOffice;
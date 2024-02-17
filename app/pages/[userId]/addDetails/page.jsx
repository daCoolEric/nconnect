"use client";
import React from "react";
import { ranksDB } from "@utils/ranks";
import { regionDB } from "@utils/regions";
import { districtDB } from "@utils/districts.js";
import Button from "@components/Button";

import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";

import Input from "@components/Input";

import Image from "next/image";
import SignIn from "@app/pages/signIn/page";
import axios from "axios";
import { useState } from "react";

function AddDetails() {
  const specificRegion = useSelector((state) => state.districts.value);
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "/assets/images/profilePic.png"
  );

  const [forenames, setFornames] = useState("");
  const [surname, setSurname] = useState("");
  const [rank, setRank] = useState("SELECT YOUR RANK");
  const [region, setRegion] = useState("SELECT YOUR REGION");
  const [district, setDistrict] = useState("SELECT YOUR DISTRICT");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      forenames: forenames,
      surname: surname,
      rank: rank,
      region: region,
      district: district,
      email: email,
      contact: contact,
      image: avatar,
    };

    const formData = new FormData();
    formData.set("forenames", forenames);
    formData.set("surname", surname);
    formData.set("rank", rank);
    formData.set("region", region);
    formData.set("district", district);
    formData.set("email", email);
    formData.set("contact", contact);
    formData.set("image", avatar);
    try {
      const imageUploadResponse = await axios.post(
        "http://localhost:3000/api/userId/ashanti/subin/update_profile",
        //"https://nconnect-nu.vercel.app/api/userId/ashanti/subin/update_profile",
        {
          forenames: forenames,
          surname: surname,
          rank: rank,
          region: region,
          district: district,
          email: email,
          contact: contact,
          image: avatar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Image uploaded successfully");
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };

    setAvatar(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div className="flex h-fit flex-1 flex-col justify-center items-center px-6 py-3 lg:px-8 //outline //outline-black">
        {console.log(session)}
        {session?.data ? (
          <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-black">
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
                Add more information
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-blue-700">
              <form
                className="space-y-6"
                action="#"
                method="POST"
                onSubmit={submitHandler}
              >
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center   //outline //outline-red-500 w-2/6 gap-x-3 relative">
                    <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4">
                      <img
                        className="w-28 h-28 rounded-full"
                        src={avatarPreview}
                      />
                    </div>

                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 absolute bottom-1 right-1 "
                    >
                      <label
                        htmlFor="formFile"
                        className="block text-sm font-medium leading-6 text-black-600"
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
                    Forenames
                  </label>
                  <Input
                    id="text"
                    name="text"
                    type="text"
                    autoComplete="text"
                    onChange={(e) => setFornames(e.target.value)}
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
                    onChange={(e) => setSurname(e.target.value)}
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
                  <div className="mt-2 " style={{ backgroundColor: "#FFFFFF" }}>
                    <select
                      value={rank}
                      onChange={(e) => {
                        // e.target.value !== "SELECT YOUR RANK"
                        setRank(e.target.value);
                      }}
                      className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                    >
                      {ranksDB.map((rank) => (
                        <option value={rank.rank}>{rank.rank}</option>
                      ))}
                    </select>
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
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
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
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-green-600"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setContact(e.target.value)}
                    autoComplete="contact"
                    placeholder="Enter your phone number (ex. 0500000000 )"
                  />
                </div>
                <div className="h-16 //outline //outline-black">
                  <div className="h-full mt-3 //outline //outline-black">
                    <button
                      type="submit"
                      className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                      // disabled={loading ? true : false}
                    >
                      {loading ? "Updating..." : "Update"}
                    </button>
                    {/* <Button
                        id="addDetails"
                        type="submit"
                        name="Add details"
                      /> */}
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}

export default AddDetails;

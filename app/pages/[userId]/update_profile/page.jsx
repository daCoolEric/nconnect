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

import { setBannerPreview } from "@app/GlobalRedux/Features/cropModal/bannerPreviewSlice";
import { setAvatarPreview } from "@app/GlobalRedux/Features/cropModal/avatarPreviewSlice";
import { openCropProfileModal } from "@app/GlobalRedux/Features/cropModal/cropProfileModalSlice";
import { useRouter } from 'next/navigation'
// import { setAvatar } from "@app/GlobalRedux/Features/cropModal/avatarSlice";

function updateUser() {
  const { update } = useSession()

  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const officeData = useSelector((state) => state.officeData.value);
  const staffData = useSelector((state)=> state.staffData.value);
  const officeIds = useSelector((state) => state.officeIds.value);
  const avatarPreview = useSelector((state) => state.avatarPreview.value);

  const defaultAvatar = "/assets/images/profilePic.png";

  const [districtname, setDistrictName] = useState(officeData.districtname);
  const [region, setRegion] = useState(officeData.region);
  const [forenames, setFornames] = useState(staffData.forenames);
  const [surname, setSurname] = useState(staffData.surname);
  const [rank, setRank] = useState(staffData.rank);
  const [previousAvatar, setPreviousAvatar] = useState(staffData.photoUrl);
  const [newAvatar, setNewAvatar] = useState(null);

  const [email, setEmail] = useState(staffData.email);
  const [contact, setContact] = useState(staffData.contact);
  const [loading, setLoading] = useState(false);
  const [profileId, setProfileId] =useState(staffData.id);
  
  const [userID, setUserID] = useState(staffData.staffId);
  let districtId = staffData[`${region}Id`];

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      forenames: forenames,
      surname: surname,
      rank: rank,
      region: region,
      district: districtname,
      email: email,
      contact: contact,
      oldImage: staffData.photoUrl,
      image: newAvatar, 
      profileId: profileId, 
      districtId: districtId,
      staffId: userID,
    };
    // console.log(staffData.photoUrl);

   
    const formData = new FormData();

    formData.set("forenames", forenames);
    formData.set("surname", surname);
    formData.set("rank", rank);
    formData.set("region", region);
    formData.set("district", districtname);
    formData.set("email", email);
    formData.set("contact", contact);
    formData.set("oldImage", previousAvatar);
    formData.set("image", newAvatar);
    formData.set("profileId", profileId);
    formData.set("districtId", districtId);
    formData.set("staffId", userID);
    formData.set("role", session.data.user?.role);
   

    try {
      const responseFromProfileUpdate = await axios.put(
        // `http://localhost:3000/api/${session.data.user?.id}/region/update_profile/`,
        `https://nconnect-peid.vercel.app/api/${session.data.user?.id}/region/update_profile`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
          
      if (responseFromProfileUpdate?.status === 200 ) {
     
        update({ photoUrl: previousAvatar })
        alert("Staff Details updated successfully");
      console.log(
        responseFromProfileUpdate
       
      );
        router.push(`/pages/${
         session?.data?.user?.id
       }/explore/${region.toLowerCase()}/${districtname.toLowerCase()}/staff-members`)
       }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };
  const editProfile = () => {
    dispatch(openCropProfileModal("visible"));
  };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        dispatch(setAvatarPreview(reader.result));
      }
    };

    setNewAvatar(e.target.files[0]);
    setPreviousAvatar(URL.createObjectURL(e.target.files[0]));
    // dispatch(setAvatar(URL.createObjectURL(e.target.files[0])));
    reader.readAsDataURL(e.target.files[0]);
  };

  
  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div className="flex h-fit flex-1 flex-col justify-center items-center px-6 py-3 lg:px-8 //outline //outline-black">
        {console.log(session)}
        
        {/* {console.log(staffData)} */}
        {session?.data ? (
          <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-black">
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
                Update your information
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm h-fit //outline //outline-blue-700">
              <form
                className="space-y-6"
                action="#"
                method="PUT"
                onSubmit={submitHandler}
              >
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center   //outline //outline-green-500 w-full gap-x-3 relative">
                    <div className="flex justify-center items-center   //outline //outline-red-500 w-full gap-x-3 relative">
                      {previousAvatar !== defaultAvatar && (
                        <button
                          type="button"
                          className="rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 absolute top-1 right-1 "
                          onClick={editProfile}
                        >
                          <Image
                            src="/assets/icons/edit.png"
                            width={30}
                            height={30}
                            alt="Edit Profile Picture"
                            style={{ objectFit: "contain" }}
                          />
                        </button>
                      )}
                      <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4">
                        <img
                          className="w-28 h-28 rounded-full"
                          src={previousAvatar}
                        />
                      </div>

                      <button
                        type="button"
                        className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 absolute bottom-1 right-1 "
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
                    value={forenames}
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
                    value={surname}
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
                    disabled={true}
                      value={rank}
                      // onChange={(e) => {
                      //   // e.target.value !== "SELECT YOUR RANK"
                      //   setRank(e.target.value);
                      // }}
                      className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                    >
                       <option value={rank}>{rank}</option>
                      
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
                  disabled={true}
                  className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                >
                  <option value={region}>{region.toUpperCase()}</option>
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
                  disabled={true}
                  className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                >
                  <option value={districtname}>
                    {districtname.toUpperCase()}
                  </option>
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
                    value={email}
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
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    autoComplete="contact"
                    placeholder="Enter your phone number (ex. 0500000000 )"
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
                      {loading ? "Updating..." : "Update"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : null 
        // (
        //   <SignIn />
        // )
        }
      </div>
    </div>
  );
}

export default updateUser;

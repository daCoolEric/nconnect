"use client";
import React, { useState } from "react";
import MenuList from "./MenuList";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "@app/GlobalRedux/Features/menu/menuSlice";
import { useSession } from "next-auth/react";

function Modal() {
  //useSelector gets the state from store
  const menuState = useSelector((state) => state.menu.value); // Access the counter state
  const region = useSelector((state) => state.region.value);
  const district = useSelector((state) => state.districts.value);
  // const [visible, setVisible] = useState("hidden");
  const dispatch = useDispatch();

  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });

  const userMenuList = [
    {
      id: 1,
      name: "Explore",
      path: `/pages/${session?.data?.user?.id}/explore/`,
    },
    {
      id: 2,
      name: "Sign-In",
      path: `/pages/signIn/`,
    },
    {
      id: 3,
      name: "Sign-Up",
      path: `/pages/signUp/`,
    },
    {
      id: 4,
      name: "Add Details",
      path: `/pages/${session?.data?.user?.id}/addDetails`,
    },
    {
      id: 5,
      name: "Profile",
      path: `/pages/${
        session?.data?.user?.id
      }/explore/${region.toLowerCase()}/${district.toLowerCase()}/staff-members/staffProfileId`,
    },
    {
      id: 6,
      name: "Log Out",
      path: `/pages/signIn/`,
    },
    {
      id: 7,
      name: "Forgot Password",
      path: `/pages/forgotPassword/`,
    },
    {
      id: 8,
      name: "Staff members",
      path: `/pages/${
        session?.data?.user?.id
      }/explore/${region.toLowerCase()}/${district.toLowerCase()}/staff-members`,
    },
    {
      id: 9,
      name: "Specific Office",
      path: `/pages/${
        session?.data?.user?.id || "guest2024"
      }/explore/region/district`,
    },
    {
      id: 10,
      name: "Create Office",
      path: `/pages/${session?.data?.user?.id}/createOffice`,
    },
    {
      id: 11,
      name: "Loading Skeleton",
      path: "/pages/loading-skeleton",
    },
  ];

  const guestMenuList = [
    {
      id: 1,
      name: "Explore",
      path: `/pages/${uuidv4()}/explore/`,
    },
    {
      id: 2,
      name: "Sign-In",
      path: `/pages/signIn/`,
    },
    {
      id: 3,
      name: "Sign-Up",
      path: `/pages/signUp/`,
    },
    {
      id: 4,
      name: "Log Out",
      path: `/pages/signIn/`,
    },
  ];

  return (
    <div
      className="w-screen h-screen bg-black/60 absolute z-10"
      style={{ visibility: menuState }}
      onClick={() => dispatch(closeMenu("hidden"))}
    >
      <div className="w-8/12 h-full bg-white">
        <div className="w-full h-2/3 //outline //outline-red-500 flex flex-col justify-evenly">
          {session?.data?.user
            ? userMenuList.map((item) => {
                return (
                  <MenuList key={item.id} name={item.name} page={item.path} />
                );
              })
            : guestMenuList.map((item) => {
                return (
                  <MenuList key={item.id} name={item.name} page={item.path} />
                );
              })}
        </div>
      </div>
    </div>
  );
}
Modal.requireAuth = true;

export default Modal;

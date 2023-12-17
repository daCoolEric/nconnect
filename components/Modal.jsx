"use client";
import React, { useState } from "react";
import MenuList from "./MenuList";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "@app/GlobalRedux/Features/menu/menuSlice";

const menuList = [
  {
    id: 1,
    name: "Explore",
    path: `/pages/userId/explore/`,
  },
  {
    id: 2,
    name: "Sign-In",
    path: "/pages/signIn/",
  },
  {
    id: 3,
    name: "Sign-Up",
    path: "/pages/signUp/",
  },
  {
    id: 4,
    name: "Add Details",
    path: "/pages/userId/addDetails",
  },
  {
    id: 5,
    name: "Profile",
    path: `/pages/userId/explore/region/district/staff-members/staffId`,
  },
  {
    id: 6,
    name: "Log Out",
    path: "/",
  },
  {
    id: 7,
    name: "Forgot Password",
    path: "/pages/forgotPassword/",
  },
  {
    id: 8,
    name: "Staff members",
    path: "/pages/userId/explore/region/district/staff-members",
  },
  {
    id: 9,
    name: "Specific Office",
    path: "/pages/userId/explore/region/district",
  },
  {
    id: 10,
    name: "Create Office",
    path: "/pages/userId/region/createOffice",
  },
];

function Modal() {
  //useSelector gets the state from store
  const menuState = useSelector((state) => state.menu.value); // Access the counter state
  // const [visible, setVisible] = useState("hidden");
  const dispatch = useDispatch();
  return (
    <div
      className="w-screen h-screen bg-black/60 absolute z-10"
      style={{ visibility: menuState }}
      onClick={() => dispatch(closeMenu("hidden"))}
    >
      <div className="w-8/12 h-full bg-white">
        <div className="w-full h-2/3 //outline //outline-red-500 flex flex-col justify-evenly">
          {menuList.map((item) => {
            return <MenuList key={item.id} name={item.name} page={item.path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;

"use client";
import React, { useState } from "react";
import MenuList from "./MenuList";

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
    name: "Profile",
    path: `/pages/userId/explore/region/district/staff-members/staffId`,
  },
  {
    id: 5,
    name: "Log Out",
    path: "/",
  },
];

function Modal() {
  const [visible, setVisible] = useState("hidden");
  return (
    <div
      className="w-screen h-screen bg-black/60 absolute z-10"
      style={{ visibility: visible }}
    >
      <div className="w-8/12 h-full bg-white">
        <div className="w-full h-2/3 outline outline-red-500 flex flex-col justify-evenly">
          {menuList.map((item) => {
            return <MenuList key={item.id} name={item.name} page={item.path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;

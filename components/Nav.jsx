"use client";
import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { openMenu, closeMenu } from "@app/GlobalRedux/Features/menu/menuSlice";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";
import LoadingModal from "./LoadingModal";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-1/4  //outline bg-gradient-to-b from-green-500 to-white //outline-black ">
      <UpdateModal />
      <DeleteModal />
      <LoadingModal />
      <Modal />
      <div className="w-full h-1/2 //outline //outline-black">
        <div className="w-1/6 h-10/12 //outline //outline-blue-500 flex justify-center items-center pt-2 pb-2">
          <Image
            src="/assets/icons/menu.svg"
            width={50}
            height={50}
            alt="Navigation Icon"
            style={{ objectFit: "contain" }}
            onClick={() => dispatch(openMenu("visible"))}
          />
        </div>
      </div>
      <div className="flex justify-center w-full h-1/2 //outline //outline-black">
        <Search />
      </div>
    </div>
  );
};

export default Nav;

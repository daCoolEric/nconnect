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
import { useSession } from "next-auth/react";
import { GUEST } from "@utils/guest";

const Nav = () => {
  const dispatch = useDispatch();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });

  return (
    <div
      className="w-full h-1/4  //outline //bg-gradient-to-b //from-green-500 //to-white //outline-black "
      style={{ backgroundColor: "linear-gradient(to left top, blue, red)" }}
    >
      <UpdateModal />
      <DeleteModal />
      <LoadingModal />
      <Modal />
      <div className="w-full flex justify-between h-1/2 //outline //outline-black">
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
        <div className="w-4/6 h-10/12 //outline //outline-blue-500 flex justify-center items-center pt-2 pb-2">
          <div className="w-full h-full flex justify-between items-center //outline //outline-red-500">
            <div className="flex flex-col items-end ml-11">
              <div>{session.data?.user?.pin || GUEST.id}</div>
              <div>{session.data?.user?.role || GUEST.role}</div>
            </div>
            <div className="mr-4">
              <Image
                src="/assets/images/profilePic.png"
                width={50}
                height={50}
                alt="Navigation Icon"
                style={{ objectFit: "contain" }}
                //   onClick={() => dispatch(openMenu("visible"))}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-1/2 //outline //outline-black">
        <Search />
      </div>
    </div>
  );
};

export default Nav;

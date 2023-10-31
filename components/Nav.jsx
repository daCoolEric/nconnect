import React from "react";
import Modal from "./Modal";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="w-full h-1/4  outline bg-gradient-to-b from-green-500 to-white outline-black h-1/4 ">
      <Modal />
      <div className="w-full h-1/2 outline outline-black">
        <div className="w-1/6 h-10/12 outline outline-blue-500 flex justify-center items-center pt-2 pb-2">
          <Image
            src="/assets/icons/menu.svg"
            width={50}
            height={50}
            alt="Navigation Icon"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div>Search Bar</div>
    </div>
  );
};

export default Nav;

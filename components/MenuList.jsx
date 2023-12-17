import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { resetData } from "@app/GlobalRedux/Features/data/dataSlice";
import { resetOffice } from "@app/GlobalRedux/Features/office/office";
import { resetOfficeData } from "@app/GlobalRedux/Features/officeData/officeDataSlice";

function MenuList({ name, page }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-1/5 //outline //outline-black flex justify-center items-center">
      <button
        onClick={() => {
          dispatch(resetOfficeData());
          dispatch(resetData());
          dispatch(resetOffice());
        }}
      >
        <Link href={page}>{name}</Link>
      </button>
    </div>
  );
}

export default MenuList;

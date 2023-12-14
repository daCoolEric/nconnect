"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import OfficeInfo from "@components/OfficeInfo";
import { officeIcons } from "@utils/officeIcons";
import { Gallery } from "@utils/gallery";
import EmptyOffice from "@components/EmptyOffice";

function District() {
  return (
    <div className="h-3/4 w-screen">
      <EmptyOffice />
    </div>
  );
}

export default District;

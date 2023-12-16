"use client";
import React from "react";
import EmptyOffice from "@components/EmptyOffice";
import { useSelector } from "react-redux";
import Office from "@components/Office";

function District() {
  const officeAvailable = useSelector((state) => state.office.value);
  return (
    <div className="h-3/4 w-screen">
      {officeAvailable ? <Office /> : <EmptyOffice />}
    </div>
  );
}

export default District;

"use client";
import React from "react";
import EmptyOffice from "@components/EmptyOffice";
import { useSelector } from "react-redux";
import Office from "@components/Office";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function District() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  const officeAvailable = useSelector((state) => state.office.value);
  return (
    <div className="h-3/4 w-screen">
      {officeAvailable ? (
        <Office />
      ) : session.data?.user ? (
        <EmptyOffice />
      ) : (
        redirect(`/pages/signIn/`)
      )}
    </div>
  );
}

export default District;

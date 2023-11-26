"use client";
import React, { Suspense } from "react";
import Button from "@components/Button";
import Input from "@components/Input";
import Link from "next/link";
import Loading from "@app/loading";

function ForgotPassword() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-screen h-3/4  //outline //outline-black">
        <div
          className=" flex justify-evenly flex-col items-center //outline //outline-black"
          style={{ height: "90%" }}
        >
          <div
            className="w-10/12 text-2xl text-green-600 font-medium "
            // style={{ color: "#339B20" }}
          >
            Forgot your password?
          </div>
          <div
            className="w-10/12 text-2xl text-green-600 font-medium "
            // style={{ color: "#339B20" }}
          >
            Please enter your email below to reset your password.
          </div>
          <div className="w-10/12 h-14 " style={{ height: "13%" }}>
            <Input placeholder="Enter your email" type="email" />
          </div>
          <div className="w-10/12 h-16 flex justify-center items-center">
            <Button name="Reset Password" />
          </div>
          <div className="w-10/12 text-xl text-green-600">
            Remembered your password?{" "}
            <span className="text-blue-500">
              <Link href="/pages/signIn">Sign In</Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default ForgotPassword;

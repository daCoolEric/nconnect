"use client";
import React from "react";
import Link from "next/link";
import Input from "@components/Input";
import Button from "@components/Button";

function SignIn() {
  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <div
        className=" flex justify-evenly flex-col items-center //outline //outline-black"
        style={{ height: "90%" }}
      >
        <div
          className="w-11/12 text-2xl flex justify-center items-center text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Sign In
        </div>
        <div className="w-10/12 " style={{ height: "13%" }}>
          <Input
            placeholder="Enter your PIN (eg. GHA-000000000-0 )"
            type="text"
          />
        </div>
        <div className="w-10/12" style={{ height: "13%" }}>
          <Input placeholder="Enter your password" type="password" />
        </div>
        <div className="w-10/12 text-xl text-green-600">
          <Link href="/pages/forgotPassword">Forgot password?</Link>
        </div>
        <div className="w-10/12 h-16  flex justify-center items-center">
          <Button name="Sign In" />
        </div>
        <div className="w-10/12 text-xl text-green-600">
          Don't have an account?{" "}
          <span className="text-blue-500">
            <Link href="/pages/signUp">Sign Up</Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

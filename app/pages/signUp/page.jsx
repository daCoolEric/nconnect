"use client";
import React from "react";
import Link from "next/link";
import Input from "@components/Input";
import Button from "@components/Button";
import { useDispatch, useSelector } from "react-redux";

import { NIA_Staff } from "@utils/users";
import { useState } from "react";

function SignUp() {
  //useSelector gets the state from store
  const userNameState = useSelector((state) => state.userName.value); // Access the counter state
  // const [visible, setVisible] = useState("hidden");

  const { userName, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const { confirmPassword, setConfirmPassword } = useState("");

  const validate_NIA_Staff = () => {
    if (userNameState !== NIA_Staff.pin) {
      return alert(userNameState);
    } else {
      alert("You are a staff");
    }
  };
  return (
    <div className="w-screen h-3/4 flex justify-center items-center //outline //outline-black">
      <div
        className="grid grid-cols-1 gap-6 //outline //outline-black w-full"
        // style={{ height: "100%" }}
      >
        <div
          className="w-10/12 h-14 m-auto text-2xl flex justify-center items-center text-green-600 font-medium //outline //outline-black "
          // style={{ color: "#339B20" }}
        >
          Sign Up
        </div>
        <div className="w-10/12 h-14 m-auto //outline //outline-black ">
          <Input placeholder="Enter your PIN (GHA-000000000-0)" type="text" />
        </div>
        <div className="w-10/12 h-14 m-auto">
          <Input placeholder="Enter your password" type="password" />
        </div>
        <div className="w-10/12 h-14 m-auto //outline //outline-black">
          <Input placeholder="Confirm your password" type="password" />
        </div>

        <div
          className="w-10/12 h-16 m-auto flex justify-center items-center"
          onClick={() => {
            validate_NIA_Staff();
          }}
        >
          <Button name="Sign Up" />
        </div>
        <div className="w-10/12 h-14 m-auto text-xl text-green-600">
          Already have an account?{" "}
          <span className="text-blue-500">
            <Link href="/pages/signIn">Sign In</Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Input from "@components/Input";
import Button from "@components/Button";
import { useDispatch, useSelector } from "react-redux";

import { NIA_Staff } from "@utils/users";
import { useState } from "react";
import RankSelector from "@components/RankSelector";

import { setLoading } from "@app/GlobalRedux/Features/loading/loadingSlice";
import {
  setEmail,
  setUserName,
} from "@app/GlobalRedux/Features/signup/emailSlice";
import { setPassword } from "@app/GlobalRedux/Features/signup/passwordSlice";
import { setConfirmPassword } from "@app/GlobalRedux/Features/signup/confirmPasswordSlice";
import { useRouter } from "next/navigation";
import Regions from "../[userId]/explore/page";
import RoleSelector from "@components/RoleSelector";
import { setPin } from "@app/GlobalRedux/Features/signup/pinSlice";

function SignUp() {
  //useSelector gets the state from store
  const userNameState = useSelector((state) => state.userName.value);

  const router = useRouter();

  const validate_NIA_Staff = () => {
    if (!NIA_Staff[userNameState]) {
      alert("Your are not a staff");
    }
  };

  const dispatch = useDispatch();
  // const  = useSelector((state) => state.username.value);

  return (
    <div className="w-screen h-3/4 flex flex-col justify-center items-center //outline //outline-black">
      <div className="flex min-h-full flex-1 flex-col justify-start w-full px-6 py-3 lg:px-8 //outline //outline-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm //outline //outline-black">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600 w-full //outline //outline-red-500"
              >
                Pin
              </label>
              <Input
                id="text"
                name="text"
                type="text"
                onChange={(e) => dispatch(setPin(e.target.value))}
                autoComplete="text"
                placeholder="Enter your pin (ex. GHA-712580702-6 )"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={(e) => dispatch(setEmail(e.target.value))}
                autoComplete="email"
                placeholder="Enter your email (ex. ayieric7@gmail.com )"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={(e) => dispatch(setPassword(e.target.value))}
                autoComplete="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                placeholder="Confirm your password"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Role
              </label>
              <RoleSelector name="role" />
            </div>

            <div className="h-16">
              <Button id="signUp" type="button" name="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

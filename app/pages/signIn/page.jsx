"use client";
import React from "react";
import Link from "next/link";
import Input from "@components/Input";
import Button from "@components/Button";

function SignIn() {
  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <div className="flex min-h-full flex-1 flex-col justify-start px-6 py-3 lg:px-8 //outline //outline-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm //outline //outline-black">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-green-600"
              >
                Pin
              </label>
              <Input
                id="text"
                name="text"
                type="text"
                autoComplete="text"
                placeholder="Enter your pin (ex. GHA-712580702-6 )"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-green-600"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/pages/forgotPassword/"
                    className="font-semibold text-red-600 hover:text-red-400"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="h-16">
              <Button id="signIn" type="submit" name="Sign In" />
            </div>
            <div>
              <div className="w-10/12 text-xl text-green-600">
                Don't have an account?{" "}
                <span className="text-blue-500">
                  <Link href="/pages/signUp">Sign Up</Link>{" "}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

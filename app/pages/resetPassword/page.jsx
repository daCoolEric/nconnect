"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@components/Button";
import Input from "@components/Input";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";

function ResetPassword() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });

  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userEmail = useSelector((state) => state.staffEmail.value);
  const userId = session?.data?.user?.id || "";

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      userEmail: userEmail,
      userId: userId,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    console.log(data);

    if (newPassword === confirmPassword) {
      const formData = new FormData();

      formData.set("userEmail", userEmail);
      formData.set("userId", userId);
      formData.set("newPassword", newPassword);

      try {
        const responseFromPasswordUpdate = await axios.put(
          //`http://localhost:3000/api/resetPassword`,
          "https://nconnect-peid.vercel.app/api/resetPassword",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (responseFromPasswordUpdate?.status === 200) {
          alert("User Password updated successfully");
          console.log(responseFromPasswordUpdate);
          router.push("/pages/signIn");
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
      }

      // console.log(formData);
    } else {
      alert("Both Passwords are not the same");
    }
  };

  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <form
        className=" flex justify-evenly flex-col items-center //outline //outline-black"
        style={{ height: "90%" }}
        action="#"
        method="PUT"
        onSubmit={submitHandler}
      >
        <div
          className="w-10/12 text-2xl text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Enter your new password
        </div>
        <div className="w-10/12 h-14 " style={{ height: "13%" }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-green-600"
          >
            New Password
          </label>
          <div className="mt-2 ">
            <input
              id="new-password"
              name="new-password"
              type="password"
              value={newPassword}
              autoComplete="password"
              required
              placeholder="Enter your new password"
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full rounded-md border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-10/12 h-14 " style={{ height: "13%" }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-green-600"
          >
            Confirm Password
          </label>
          <div className="mt-2 ">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              value={confirmPassword}
              autoComplete="password"
              required
              placeholder="Enter your new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full rounded-md border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-10/12 h-16 flex justify-center items-center">
          {/* <Button name="Reset Password" /> */}
          <div
            className="w-full h-full mt-2 flex justify-center bg-green-400 rounded-lg hover:bg-green-300 py-1"
            style={{ backgroundColor: "#6dab3c" }}
          >
            <button
              type="submit"
              className="w-full text-white text-2xl font-medium focus:outline-none disabled:opacity-25
      
      "
              // disabled={currentUser}
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;

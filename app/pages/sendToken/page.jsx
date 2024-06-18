"use client";
import { setStaffEmail } from "@app/GlobalRedux/Features/staff/staffEmailSlice";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SendToken() {
  const dispatch = useDispatch();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      userEmail: email,
    };
    console.log(data);

    const formData = new FormData();

    formData.set("userEmail", email);

    // Response Declaration
    let responseFromUpdatedToken;
    let responseFromCreatedToken;

    try {
      const responseFromFoundToken = await axios.get(
        // `http://localhost:3000/api/emails?userEmail=${email}`
        `https://nconnect-peid.vercel.app/api/emails?userEmail=${email}`
      );
      console.log(responseFromFoundToken);
      if (responseFromFoundToken.status === 200) {
        responseFromCreatedToken = await axios.put(
          // `http://localhost:3000/api/emails?userEmail=${email}`,
          `https://nconnect-peid.vercel.app/api/emails?userEmail=${email}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch(setStaffEmail(email));
      } else {
        responseFromUpdatedToken = await axios.post(
          //`http://localhost:3000/api/emails?userEmail=${email}`,
          `https://nconnect-peid.vercel.app/api/emails?userEmail=${email}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch(setStaffEmail(email));
      }

      if (
        responseFromCreatedToken?.status === 200 ||
        responseFromUpdatedToken?.status === 200
      ) {
        alert("Verification Token sent successfully");
        console.log(responseFromCreatedToken || responseFromUpdatedToken);
        router.push("/pages/verifyToken");
      }

      // alert("Verification Token sent successfully");

      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    // console.log(formData);
  };

  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <form
        className=" flex justify-evenly flex-col items-center //outline //outline-black"
        style={{ height: "90%" }}
        action="#"
        method="POST"
        onSubmit={submitHandler}
      >
        <div
          className="w-10/12 text-2xl text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Hello Cherished Staff, Forgot your password?
        </div>
        <div
          className="w-10/12 text-2xl text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Send Token to your email
        </div>
        <div className="w-10/12 h-14 " style={{ height: "13%" }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-green-600"
          >
            Email
          </label>
          <div className="mt-2 ">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              autoComplete="email"
              required
              placeholder="Enter your email (ex. ayi.eric@nia.gov.gh )"
              onChange={(e) => setEmail(e.target.value)}
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
            >
              {loading ? "Sending Token..." : "Send Token"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendToken;

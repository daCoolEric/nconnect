"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "@components/Button";
import Input from "@components/Input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function VerifyToken() {
  const staffEmail = useSelector((state) => state.staffEmail.value);
  const router = useRouter();
  const [counter, setCounter] = React.useState(59);
  const [otp, setOtp] = useState("");
  const [run, setRun] = useState(true);
  const [otpFromServer, setOtpFromServer] = useState("");

  console.log(staffEmail);

  const getVerificationCode = async () => {
    let responseFromFoundToken;
    if (counter === 58) {
      try {
        responseFromFoundToken = await axios.get(
          //`http://localhost:3000/api/emails?userEmail=${staffEmail}`
          `https://nconnect-peid.vercel.app/api/emails?userEmail=${staffEmail}`
        );
        setOtpFromServer(responseFromFoundToken.data);
      } catch (error) {
        console.log(error);
      }
      console.log(responseFromFoundToken.data);
    }
  };
  // getVerificationCode();

  const handleToken = () => {
    console.log(otp);
    console.log(otpFromServer);

    if (counter > 0 && otp == otpFromServer) {
      alert("User sucessfully verified");
      router.push("/pages/resetPassword");
    } else {
      alert("Token has expired!!!");
      setOtpFromServer("");
    }
  };

  // const [counterColor, setCounterColor] = React.useState("green");

  React.useEffect(() => {
    getVerificationCode();
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  // if (counter < 30) {
  //   setCounterColor("red");
  // }

  return (
    <div className="w-screen h-3/4  //outline //outline-black">
      <div
        className=" flex justify-evenly flex-col items-center //outline //outline-black"
        style={{ height: "90%" }}
      >
        <div
          className="w-10/12 text-2xl text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Check your email for your token
        </div>
        <div
          className="w-10/12 text-2xl text-green-600 font-medium "
          // style={{ color: "#339B20" }}
        >
          Enter your token to verify
        </div>
        <div
          className="w-10/12 h-14 flex justify-center items-center mt-5 mb-5 "
          //   style={{ height: "60" }}
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span style={{ width: "25px" }}></span>}
            renderInput={(props) => <input {...props} />}
            className="w-16 h-16 border-2 rounded bg-transparent outline-none text-center font-semibold text-3xl border-green-600 focus:border-green-600 focus:text-gray-700 text-gray-400 transition spin-button-none "
            inputStyle={{
              border: "1px solid transparent",
              borderRadius: "4px",
              borderWidth: "2px",
              borderColor: "rgb(22, 168, 74)",
              backgroundColor: "transparent",
              focus: {
                borderColor: "rgb(22, 168, 74)",
              },
              width: "64px",
              height: "64px",
              fontSize: "30px",
              color: "rgb(156, 163, 175)",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              outline: "none",
              border: "2px solid #05DEBA",
              borderRadius: "8px",
            }}
          />
        </div>
        <div className="w-10/12 h-16 flex justify-center items-center">
          {/* <Button name="Reset Password" /> */}
          <div
            className="w-full h-full mt-2 flex justify-center bg-green-400 rounded-lg hover:bg-green-300 py-1"
            style={{ backgroundColor: "#6dab3c" }}
          >
            <button
              type="button"
              className="w-full text-white text-2xl font-medium focus:outline-none disabled:opacity-25
        
        "
              // disabled={currentUser}
              onClick={handleToken}
            >
              Verify Token
            </button>
          </div>
        </div>

        <div className="w-10/12 mt-4 text-2xl text-gray-600">
          Expires in{" "}
          <span
            className="text-red-600 font-bold"
            // style={{
            //   color: counterColor,
            // }}
          >
            00:{counter < 10 ? `0${counter}` : counter}
          </span>
        </div>

        <div className="w-10/12 mt-4 text-2xl text-blue-700">
          <Link href="/pages/sendToken">Resend Verification Code</Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default VerifyToken;

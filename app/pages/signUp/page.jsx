"use client";
import React, { useState } from "react";
import Input from "@components/Input";
import { useDispatch, useSelector } from "react-redux";
import { regionDB } from "@utils/regions";
import { districtDB } from "@utils/districts.js";
import { NIA_Staff } from "@utils/users";
import { useRouter } from "next/navigation";
import RoleSelector from "@components/RoleSelector";
import axios from "axios";



function SignUp() {
  const router = useRouter();
 
  const [loading, setLoading] = useState(false);
 
  const role = useSelector((state) => state.role.value);

  const [ pin, setPin] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");
  const [ region, setRegion] = useState("SELECT YOUR REGION");
  const [ districtname, setDistrictname] = useState("");


  const validate_NIA_Staff = () => {
    if (!NIA_Staff[userNameState]) {
      alert("Your are not a staff");
    }
  };

  const dispatch = useDispatch();


  async function handleSignup(e) {
     e.preventDefault();
  
    if(password !== confirmPassword) {
      alert("Both passwords are not the same!!!");
    }

      setLoading(true);
      const formData = new FormData();
      formData.set("pin", pin);
      formData.set("email", email);
      formData.set("password", password);
      formData.set("role", role);
      formData.set("region", region);
      formData.set("districtname", districtname);

      const data = {
        pin: pin,
        email: email,
        password: password,
        role: role,
        region: region,
        districtname: districtname
      }

      console.log(data);
      try {
         const response = await axios.post(
        "https://nconnect-peid.vercel.app/api/signUp", data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
       
      );
      
      // const response = await axios.post("http://localhost:3000/api/signUp",
      // data,
      // {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // }
      // );
      console.log(response);
        alert("User succesfully created!!!");
        if (response) {
          router.push(`/pages/signIn`);
        }
        setLoading(false);
      } catch {
        alert("Error!, Failed to create user");
      }

    
    
  }

  return (
    <div className="w-screen h-3/4 flex flex-col justify-center items-center //outline //outline-black">
      <div className="flex min-h-full flex-1 flex-col justify-start w-full px-6 py-3 lg:px-8 //outline //outline-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm //outline //outline-black">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-green-600">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form
                className="space-y-6"
                action="#"
                method="POST"
                onSubmit={handleSignup}
          >
         
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
                onChange={(e) => setPin(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
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
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
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
            <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium leading-6 text-green-600"
                  >
                    Region
                  </label>
                  <div className="mt-2" style={{ backgroundColor: "#FFFFFF" }}>
                    <select
                      value={region}
                      onChange={(e) => {
                        setRegion(e.target.value);
                      }}
                      className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                    >
                      {regionDB.map((region) => (
                        <option value={region.region}>{region.region}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium leading-6 text-green-600"
                  >
                    District
                  </label>
                  <div className="mt-2" style={{ backgroundColor: "#FFFFFF" }}>
                    <select
                      value={districtname}
                      onChange={(e) => {
                        setDistrictname(e.target.value);
                      }}
                      className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
                    >
                      {region !== "SELECT YOUR REGION"
                        ? districtDB[region].map((district) => (
                            <option value={district.district}>
                              {district.district}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                </div>

            <div className="h-16 //outline //outline-black">
              <div
                className="w-full h-full mt-2 flex justify-center items-center bg-green-400 rounded-lg hover:bg-green-300 py-1"
                style={{ backgroundColor: "#6dab3c" }}
              >
                <button
                  type="submit"
                  // onClick={() => handleSignup()}
                  className="my-2 px-4 py-2 text-center w-full inline-block text-2xl text-white border border-transparent "
                >
                  {loading ? "Creating User..." : "Sign Up"}
                </button>
              </div>
            </div>
         
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

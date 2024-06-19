"use client";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
// import Input from "../../../components/Input";
// import { setStaffEmail } from "../../GlobalRedux/Features/staff/staffEmailSlice";

import Input from "@components/Input";
import { setStaffEmail } from "@app/GlobalRedux/Features/staff/staffEmailSlice";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleLogin() {
    setLoading(true);

    if (password === "nconnect2024") {
      dispatch(setStaffEmail(email));
      router.push("/pages/resetPassword");
    } else {
      try {
        await signIn("credentials", {
          email,
          password,
          callbackUrl: `https://www.niaconnect.com/pages/userId/explore`,
          //callbackUrl: "http://localhost:3000/pages/userId/explore",
        });
        console.log(email, password);
        setLoading(false);
      } catch {
        console.log("Error!");
        // console.log((email, password));
      }
    }
  }

  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <div className="flex min-h-full flex-1 flex-col justify-start px-6 py-3 lg:px-8 //outline //outline-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm //outline //outline-black">
          <h2
            className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight"
            style={{ color: "#6dab3c" }}
          >
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div className="space-y-6">
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
                  placeholder="Enter your email (ex. ayieric7@gmail.com)"
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
                  autoComplete="current-password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-sm">
                <a
                  href="/pages/sendToken/"
                  className="font-semibold text-red-600 hover:text-red-400"
                >
                  Forgot password?
                </a>
              </div>

              <div className="h-16 //outline //outline-black">
                <div
                  className="w-full h-full mt-2 flex justify-center items-center bg-green-400 rounded-lg hover:bg-green-300 py-1"
                  style={{ backgroundColor: "#6dab3c" }}
                >
                  <button
                    type="button"
                    onClick={() => handleLogin()}
                    className="my-2 px-4 py-2 text-center w-full inline-block text-2xl text-white border border-transparent "
                  >
                    {loading ? "Logging User..." : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

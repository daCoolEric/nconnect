"use client";
import Input from "@components/Input";
import Button from "@components/Button";
import { setEmail } from "@app/GlobalRedux/Features/signup/emailSlice";
import { setPassword } from "@app/GlobalRedux/Features/signup/passwordSlice";
import { useDispatch } from "react-redux";

function SignIn() {
  const dispatch = useDispatch();

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
                onChange={(e) => dispatch(setPassword(e.target.value))}
                autoComplete="current-password"
                placeholder="Enter your password"
              />
            </div>
            <div className="text-sm">
              <a
                href="/pages/forgotPassword/"
                className="font-semibold text-red-600 hover:text-red-400"
              >
                Forgot password?
              </a>
            </div>

            <div className="h-16">
              <Button id="signIn" type="button" name="Sign In" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

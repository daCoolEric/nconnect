"use client";
import { setButtonType } from "@app/GlobalRedux/Features/button/buttonSlice";
import { redirect } from "next/navigation";

import {
  closeLoaderModal,
  openLoaderModal,
  setLoaderPrompt,
} from "@app/GlobalRedux/Features/loader/loaderSlice";
import { setLoading } from "@app/GlobalRedux/Features/loading/loadingSlice";
import { openUpdateModal } from "@app/GlobalRedux/Features/update/updateSlice";
// import { signUp, logout, login, useAuth } from "@utils/database";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@utils/database.js";
import { signIn, useSession } from "next-auth/react";

function Button({ name, type, id }) {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.value);
  const pin = useSelector((state) => state.pin.value);
  const email = useSelector((state) => state.email.value);
  const password = useSelector((state) => state.password.value);
  const confirm_password = useSelector((state) => state.confirm_password.value);
  const role = useSelector((state) => state.role.value);

  // functions
  async function handleSignup() {
    setLoading(true);
    try {
      await createUser(pin, email, password, role);
      alert("User succesfully created!!!");
      dispatch(closeLoaderModal("hidden"));
    } catch {
      alert("Error!, Failed to create user");
      dispatch(closeLoaderModal("hidden"));
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      // await login(username, password);
      await signIn("credentials", {
        email,
        password,
        // callbackUrl: "https://nconnect-nu.vercel.app/pages/userId/explore",
        callbackUrl: `http://localhost:3000/pages/${session?.data?.user?.id}/explore`,
      });
      // await connectToDatabase();
      // await loginUser(email, password);
      console.log(session);
      console.log(email, password);
      dispatch(closeLoaderModal("hidden"));
    } catch {
      alert("Error!");
      console.log((email, password));
      dispatch(closeLoaderModal("hidden"));
    }
    setLoading(false);
  }

  // const handleLogout = async () => {
  //   setLoading(true);
  //   try {
  //     await logout();
  //     dispatch(closeLoaderModal("hidden"));
  //     // alert("User logged out");
  //   } catch {
  //     alert("Error!");
  //     dispatch(closeLoaderModal("hidden"));
  //   }
  //   setLoading(false);
  // };

  return (
    <div
      className="w-full h-full mt-2 flex justify-center bg-green-400 rounded-lg hover:bg-green-300 py-1"
      style={{ backgroundColor: "#6dab3c" }}
    >
      <button
        type={type}
        className="w-full text-white text-2xl font-medium focus:outline-none disabled:opacity-25
      
      "
        // disabled={currentUser}
        onClick={() => {
          if (id === "update") {
            dispatch(openUpdateModal("visible"));
            dispatch(setButtonType(id));
          } else if (id === "signIn") {
            handleLogin();
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Signing User In"));
          } else if (id === "signUp") {
            handleSignup();
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Creating User Account"));
          } else if (id === "logout") {
            // handleLogout();
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Signing User Out"));
          } else if (id === "addDetails") {
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Adding User Details"));
          } else if (id === "createOffice") {
            dispatch(openLoaderModal("visible"));
            dispatch(setButtonType(id));
            dispatch(setLoaderPrompt("Creating an Office"));
          }
        }}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;

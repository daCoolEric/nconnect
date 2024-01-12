"use client";

import axios from "axios";

export default async function signInWithCredendials(email, password) {
  try {
    const response = await axios.post("http://localhost:3000/api/login", {
      email,
      password,
    });
    console.log(response);
  } catch (error) {}

  axios.post;
  return <div>signInWithCredendials</div>;
}

import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  } finally {
  }
};

export const createUser = async (pin, email, password, role) => {
  try {
    // const response = await axios.post(
    //   "https://nconnect-nu.vercel.app/api/signUp",
    //   {
    //     pin,
    //     email,
    //     password,
    //     role,
    //   }
    // );
    const response = await axios.post("http://localhost:3000/api/signUp", {
      pin,
      email,
      password,
      role,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

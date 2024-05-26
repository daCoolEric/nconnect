import { connectToDatabase } from "@utils/database.js";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req) => {
  const formData = await req.formData();

  const pin = formData.get("pin");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const region = formData.get("region");
  const districtname = formData.get("districtname");
  try {
    
    if (pin === "" || email === ""  || password === ""|| role === "" || region === "" || districtname === "")
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // await connectToDatabase();
    await prisma.$connect();

    const user = await prisma.users.create({
      data: {
        pin,
        email,
        hashedPassword,
        role,
        region,
        districtname
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

import { connectToDatabase } from "@utils/database.js";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@prisma";

export const POST = async (req) => {
  try {
    const { pin, email, password, role } = await req.json();
    if (!pin || !email || !password || !role)
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

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@prisma";

export const POST = async (req) => {
  try {
    if (!email || !password) {
      throw new Error("Invalid login details");
    }
    await prisma.$connect();
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !user?.hashedPassword) {
      throw new Error("Invalid credentials");
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      user.hashedPassword
    );

    if (!isCorrectPassword) {
      throw new Error("Invalid credentials");
    }

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

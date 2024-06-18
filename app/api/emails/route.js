import VerifyToken from "@app/emails/verifyToken";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { prisma } from "@prisma";

const resend = new Resend(process.env.RESEND_API_KEY);
const date = new Date();
let tokenCreatedAt = date.valueOf();
let verificationCode = Math.floor(Math.random() * 9000) + 1000;

//Checking if token exists
export const GET = async (req, { params }) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams).get("userEmail");
  // let desiredToken;

  try {
    //check if there already exist a verification code
    const verificationCodeExist = await prisma.verificationtoken.findUnique({
      where: {
        email: searchParams,
      },
    });
    console.log(searchParams);
    // verificationCodeExist.map((token) => {
    //   if (token.email === searchParams) {
    //     desiredToken = token;
    //   }
    // });
    console.log(verificationCodeExist);
    // console.log(desiredToken);
    // return new Response("User email exists", {
    //   status: 200,
    // });
    // console.log(searchParams.get("userEmail"));
    if (verificationCodeExist === null) {
      return new Response("No user email found", {
        status: 201,
      });
    } else {
      return new Response(verificationCodeExist.token, {
        status: 200,
      });
    }
  } catch (error) {
    console.log(error);
    return new Response("No User Email found", { status: 500 });
  }
};

export const POST = async (req, { params }) => {
  const url = new URL(req.url);
  const receipientEmail = new URLSearchParams(url.searchParams).get(
    "userEmail"
  );
  let data = {
    email: receipientEmail,
    token: verificationCode,
    createdAt: tokenCreatedAt,
  };
  console.log(data);
  try {
    const createdVerificationCode = await prisma.verificationtoken.create({
      data: data,
    });
    console.log(verificationCode);
    if (createdVerificationCode.email) {
      const emailSent = await resend.emails.send({
        from: "support@niaconnect.com",
        to: receipientEmail,
        subject: "Get your Verification Token",
        react: <VerifyToken verificationCode={verificationCode} />,
      });
      console.log(emailSent);
    }

    return new Response("Token successfully created and sent", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create and send token", { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const url = new URL(req.url);
  const receipientEmail = new URLSearchParams(url.searchParams).get(
    "userEmail"
  );
  let data = {
    email: receipientEmail,
    token: verificationCode,
    createdAt: tokenCreatedAt,
  };
  console.log(tokenCreatedAt);
  try {
    const updatedVerificationCode = await prisma.verificationtoken.update({
      where: {
        email: receipientEmail,
      },
      data: data,
    });
    console.log(updatedVerificationCode);
    if (updatedVerificationCode.email) {
      const emailSent = await resend.emails.send({
        from: "support@niaconnect.com",
        to: receipientEmail,
        subject: "Get your Verification Token",
        react: <VerifyToken verificationCode={verificationCode} />,
      });
      console.log(emailSent);
    }

    return new Response("Token successfully updated and sent", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update and send token", { status: 500 });
  }
};

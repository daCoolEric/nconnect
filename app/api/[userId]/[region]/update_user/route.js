// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";

import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// PUT REQUEST FOR UPDATING A PROFILE
export const PUT = async (req, { params }) => {

  const formData = await req.formData();

  const photoUrl = formData.get("photoUrl");

  const staffId =  formData.get("staffId");

  console.log({ staffId, photoUrl });


const userDetails = {
    photoUrl: photoUrl
}

  try {
    await prisma.$connect();

    const updatedUser = await prisma.users.update({
      where: {
        id: staffId,
      },
      data: userDetails,
    });

    console.log(updatedUser);
    return new Response("User successfully updated", {
      status: 200,
    });
  
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user", { status: 500 });
  }
};

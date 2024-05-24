// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import path from "path";
import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "@backend/utils/cloudinary";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// // POST REQUEST FOR ADDING USER DETAILS
// export const POST = async (req, { params }) => {
//   const districtId = params.district;
//   const staffId = params.staffId;
//   const formData = await req.formData();

//   const file = formData.get("image");
//   const forenames = formData.get("forenames");
//   const surname = formData.get("surname");
//   const rank = formData.get("rank");
//   const region = formData.get("region");
//   const districtname = formData.get("district");
//   const email = formData.get("email");
//   const contact = formData.get("contact");
//   const order = Date.now();
//   console.log({ districtId, staffId });

//   const userDetails = {
//     forenames,
//     surname,
//     rank,
//     region,
//     districtname,
//     email,
//     contact,
//     order,
//     staffId,
//   };
//   userDetails[`${region.toLowerCase()}Id`] = districtId;

//   const fileBuffer = await file.arrayBuffer();
//   if (!file) {
//     return NextResponse.json({ error: "No files received." }, { status: 400 });
//   }

//   let mime = file.type;
//   let encoding = "base64";
//   let buffer = Buffer.from(fileBuffer).toString("base64");
//   let fileUri = "data:" + mime + ";" + encoding + "," + buffer;

//   //   const buffer = Buffer.from(await file.arrayBuffer());
//   const filename = Date.now() + file.name.replaceAll(" ", "_");
//   const filePath = path.join(
//     process.cwd(),
//     "public/assets/uploads/" + filename
//   );
//   // console.log(filename);
//   // console.log(buffer);

//   try {
//     const result = await uploadToCloudinary(fileUri, "nconnect/profile_photos");
//     let imageUrl = result.secure_url;
//     userDetails.photoUrl = imageUrl;
//     // console.log(userDetails);
//     await prisma.profile.create({
//       data: userDetails,
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         userDetails: userDetails,
//         message: "User Details Added",
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log("Error occured ", error);
//     return NextResponse.json({ Message: "Failed", status: 500 });
//   }
// };



// PUT REQUEST FOR UPDATING A PROFILE
export const PUT = async (req, { params }) => {
 
 
 

  const formData = await req.formData();

 
  const image = formData.get("image");
  const oldImage = formData.get("oldImage");
  const region = formData.get("region").toUpperCase();
  const districtname = formData.get("district");
  const forenames = formData.get("forenames");
  const surname = formData.get("surname");
  const rank = formData.get("rank");
  const contact = formData.get("contact");
  const email = formData.get("email");
  const profileId = formData.get("profileId");
  const districtId = formData.get("districtId");
  const staffId =  formData.get("staffId");
   
  const order = Date.now();

  console.log({ districtId, staffId, profileId });

  const userDetails = {
    forenames,
    surname,
    rank,
    region,
    districtname :districtname.toUpperCase(),
    email,
    contact,
    order,
    staffId,
   
  };

  userDetails[`${region.toLowerCase()}Id`] = districtId;

  let oldImageId = oldImage.split("/").pop().split(".")[0];
  console.log(oldImageId);
  const fileBuffer = await image.arrayBuffer();
  if (!image) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  let mime = image.type;
  let encoding = "base64";
  let buffer = Buffer.from(fileBuffer).toString("base64");
  let fileUri = "data:" + mime + ";" + encoding + "," + buffer;

  deleteFromCloudinary(
    `nconnect/profile_photos/${oldImageId}`
  );

  try {
    await prisma.$connect();

    const result = await uploadToCloudinary(
      fileUri,
      `nconnect/profile_photos`,
      oldImageId
    );
    let imageUrl = result.secure_url;
    userDetails.photoUrl = imageUrl;

    const updateUser = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: userDetails,
    });

    console.log(updateUser);
    return new Response("User successfully updated", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user", { status: 500 });
  }
};

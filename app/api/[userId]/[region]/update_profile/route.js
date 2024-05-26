// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";
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

  const profileDetails = {
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

  profileDetails[`${region.toLowerCase()}Id`] = districtId;

  try {
    await prisma.$connect();

    if (image) {
      let oldImageId = oldImage.split("/").pop().split(".")[0];
      console.log(oldImageId);
    
      const fileBuffer = await image.arrayBuffer();
      let mime = image.type;
    let encoding = "base64";
    let buffer = Buffer.from(fileBuffer).toString("base64");
    let fileUri = "data:" + mime + ";" + encoding + "," + buffer;
  
    deleteFromCloudinary(
      `nconnect/profile_photos/${oldImageId}`
    );

    const result = await uploadToCloudinary(
      fileUri,
      `nconnect/profile_photos`,
      oldImageId
    );

    let imageUrl = result.secure_url;
    profileDetails.photoUrl = imageUrl;
    
      
    }else{
      profileDetails.photoUrl = oldImage;
    }
    const updatedProfile = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: profileDetails,
    });

    const updatedUser = await prisma.users.update({
      where: {
        id: staffId,
      },
      data: {photoUrl: updatedProfile?.photoUrl},
    });

    console.log(updatedProfile);
    return new Response(updatedUser, {
      status: 200
    });
  
  } catch (error) {
    console.log(error);
    return new Response("Failed to update profile", { status: 500 });
  }
};

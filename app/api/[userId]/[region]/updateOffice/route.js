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

// UPDATE REQUEST FOR UPDATING OFFICE DETAILS
export const PUT = async (req, { params }) => {
  const formData = await req.formData();

  const banner = formData.get("banner");
  const region = formData.get("region");
  const districtname = formData.get("districtname");
  const location = formData.get("location");
  const address = formData.get("address");
  const staffCapacity = formData.get("staffCapacity");
  const contact = formData.get("contact");
  const districtId = formData.get("districtId");
  const oldBanner = formData.get("oldBanner");

  const officeDetails = {
    districtId,
    districtname,
    location,
    address,
    staffCapacity,
    contact,
    banner,
    region,
    oldBanner,
  };
  let oldBannerId = oldBanner.split("/").pop().split(".")[0];
  console.log(oldBannerId);
  const fileBuffer = await banner.arrayBuffer();
  if (!banner) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  let mime = banner.type;
  let encoding = "base64";
  let buffer = Buffer.from(fileBuffer).toString("base64");
  let fileUri = "data:" + mime + ";" + encoding + "," + buffer;

  deleteFromCloudinary(
    `nconnect/${region.toLowerCase()}/${districtname.toLowerCase()}/${oldBannerId}`
  );

  try {
    await prisma.$connect();

    const result = await uploadToCloudinary(
      fileUri,
      `nconnect/${region.toLowerCase()}/${districtname.toLowerCase()}`,
      oldBannerId
    );
    let imageUrl = result.secure_url;

    const Ashanti = await prisma.ashanti.update({
      where: {
        id: districtId,
      },
      data: {
        districtname,
        location,
        address,
        staffCapacity,
        contact,
        banner: imageUrl,
        region,
      },
    });

    console.log(Ashanti);
    return new Response("Office successfully updated", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update the office", { status: 500 });
  }
};

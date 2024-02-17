import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { uploadToCloudinary, uploads } from "@backend/utils/cloudinary";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req, { params }) => {
  const districtId = params.district;
  const staffId = params.staffId;
  const formData = await req.formData();

  const file = formData.get("image");
  const forenames = formData.get("forenames");
  const surname = formData.get("surname");
  const rank = formData.get("rank");
  const region = formData.get("region");
  const districtname = formData.get("district");
  const email = formData.get("email");
  const contact = formData.get("contact");
  const order = Date.now();
  console.log({ districtId, staffId });

  const userDetails = {
    forenames,
    surname,
    rank,
    region,
    districtname,
    email,
    contact,
    order,
    staffId,
  };
  userDetails[`${region.toLowerCase()}Id`] = districtId;

  const fileBuffer = await file.arrayBuffer();
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  let mime = file.type;
  let encoding = "base64";
  let buffer = Buffer.from(fileBuffer).toString("base64");
  let fileUri = "data:" + mime + ";" + encoding + "," + buffer;

  //   const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  const filePath = path.join(
    process.cwd(),
    "public/assets/uploads/" + filename
  );
  // console.log(filename);
  // console.log(buffer);

  try {
    const result = await uploadToCloudinary(fileUri, "nconnect/profile_photos");
    let imageUrl = result.secure_url;
    userDetails.photoUrl = imageUrl;
    // console.log(userDetails);
    await prisma.profile.create({
      data: userDetails,
    });

    return NextResponse.json(
      {
        success: true,
        userDetails: userDetails,
        message: "User Details Added",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

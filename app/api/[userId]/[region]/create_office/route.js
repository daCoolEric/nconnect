import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import {uploadToCloudinary,
} from "@backend/utils/cloudinary";


const prisma = new PrismaClient();

// POST REQUEST FOR CREATING AN OFFICE
export const POST = async (req, { params }) => {
    const formData = await req.formData();
  
    const banner = formData.get("banner");
    const region = formData.get("region");
    const districtname = formData.get("districtname");
    const location = formData.get("location");
    const address = formData.get("address");
    const staffCapacity = formData.get("staffCapacity");
    const contact = formData.get("contact");
  
    const officeDetails = {
      region,
      districtname,
      location,
      address,
      staffCapacity,
      contact,
      banner,
    };
    console.log(officeDetails);
    // console.log(banner);
    const fileBuffer = await banner.arrayBuffer();
    if (!banner) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }
  
    let mime = banner.type;
    let encoding = "base64";
    let buffer = Buffer.from(fileBuffer).toString("base64");
    let fileUri = "data:" + mime + ";" + encoding + "," + buffer;
  
    try {
      // console.log(
      //   `region: ${region.toLowerCase()}`,
      //   `district: ${districtname.toLowerCase()} `
      // );
      const result = await uploadToCloudinary(
        fileUri,
        `nconnect/${region.toLowerCase()}/${districtname.toLowerCase()}`
      );
      let imageUrl = result.secure_url;
      officeDetails.banner = imageUrl;
  
      await prisma[region.toLowerCase()].create({
        data: officeDetails,
      });
  
      return NextResponse.json(
        { success: true, officeDetails: officeDetails },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
      return new Response("Failed to create an office", { status: 500 });
      // return new Response(req.body, { status: 500 });
    }
  };
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { uploadToCloudinary, uploads } from "@backend/utils/cloudinary";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("image");
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
  console.log(filename);
  console.log(buffer);

  try {
    // const uploadToCloudinary = () => {
    //     return new Promise((resolve, reject) => {

    //         var result = cloudinary.uploader.upload(fileUri, {
    //           invalidate: true
    //         })
    //           .then((result) => {
    //             console.log(result);
    //             resolve(result);
    //           })
    //           .catch((error) => {
    //             console.log(error);
    //             reject(error);
    //           });
    //     });
    //   };

    //   const result = await uploadToCloudinary();

    //   let imageUrl = result.secure_url;

    //   return NextResponse.json(
    //     { success: true, imageUrl: imageUrl },
    //     { status: 200 }
    const result = await uploadToCloudinary(fileUri, "nconnect/profile_photos");

    let imageUrl = result.secure_url;

    return NextResponse.json(
      { success: true, imageUrl: imageUrl },
      { status: 200 }
    );

    // await writeFile(filePath, buffer);
    // console.log(filePath);

    // const uploader = (path) => uploads(path, "nconnect/profile_photos");

    // uploader(filePath);

    // newUserData.avatar = avatarResponse;
    // return NextResponse.json({ formData, Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

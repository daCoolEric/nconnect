import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { uploads } from "@backend/utils/cloudinary";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("image");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  const filePath = path.join(
    process.cwd(),
    "public/assets/uploads/" + filename
  );
  console.log(filename);
  console.log(buffer);
  try {
    await writeFile(filePath, buffer);
    console.log(filePath);

    const uploader = (path) => uploads(path, "nconnect/profile_photos");

    uploader(filePath);

    // newUserData.avatar = avatarResponse;
    return NextResponse.json({ formData, Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

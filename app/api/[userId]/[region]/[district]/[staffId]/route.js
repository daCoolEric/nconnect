// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const ashantis = await prisma.ashanti.findMany();
//   console.log(ashantis);
// }

// GET REQUEST FOR ALL DISTRICT OFFICES IN A SPECIFIC REGION
export const GET = async (req, { params }) => {
  const staffId = params.staffId;

  try {
    await prisma.$connect();
    const staffProfile = await prisma.profile.findUnique({
      where: {
        id: staffId,
      },
    });
    console.log(staffId);

    let result = [];

    console.log(staffProfile);
    return new Response(JSON.stringify(staffProfile), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all district offices", {
      status: 500,
    });
  }
};

// POST REQUEST FOR CREATING A PROFILE
export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("image");
  const forenames = formData.get("forenames");
  const surname = formData.get("surname");
  const rank = formData.get("rank");
  const region = formData.get("region");
  const districtname = formData.get("district");
  const email = formData.get("email");
  const contact = formData.get("contact");
  const order = 3;
  const districtId = "65ace172306ebe94c19911fa";
  const staffId = "65acc96b306ebe94c19911eb";

  const userDetails = {
    forenames,
    surname,
    rank,
    ashantiId: districtId,
    region,
    districtname,
    email,
    contact,
    order,
    staffId,
  };

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
    await prisma.profile.create({
      data: userDetails,
    });

    return NextResponse.json(
      { success: true, imageUrl: imageUrl, userDetails: userDetails },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

// PUT REQUEST FOR UPDATING A PROFILE
export const PUT = async (req) => {
  const {
    profileId,
    userId,
    districtId,
    forename,
    surname,
    rank,
    email,
    contact,
    photoUrl,
  } = await req.json();

  const data = {
    profileId,
    userId,
    districtId,
    forename,
    surname,
    rank,
    email,
    contact,
    photoUrl,
  };
  console.log(data);
  try {
    await prisma.$connect();
    const profile = await prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        forename,
        surname,
        rank,
        email,
        contact,
        photoUrl,
        staff: { connect: { id: userId } },
        Ashanti: { connect: { id: districtId } },
      },
    });

    console.log(profile);
    return new Response("User details successfully updated", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user details", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

// DELETE REQUEST FOR DELETING A PROFILE
export const DELETE = async (req) => {
  const { profileId } = await req.json();

  console.log(profileId);
  try {
    await prisma.$connect();
    const profile = await prisma.profile.delete({
      where: {
        id: profileId,
      },
    });

    console.log(profile);
    return new Response("User details successfully deleted", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to delete user details", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

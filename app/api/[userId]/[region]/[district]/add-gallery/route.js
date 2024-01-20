// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET REQUEST FOR ALL DISTRICT OFFICES IN A SPECIFIC REGION
export const GET = async (req, res) => {
  try {
    await prisma.$connect();
    const office_Gallery = await prisma.office_Gallery.findMany({});

    let result = [];

    console.log(office_Gallery);
    return new Response(JSON.stringify(office_Gallery), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch gallery for this office", {
      status: 500,
    });
  }
};

// POST REQUEST FOR CREATING AN OFFICE
export const POST = async (req) => {
  const { districtId, imageUrl } = await req.json();

  const data = {
    districtId,
    imageUrl,
  };
  console.log(data);
  try {
    await prisma.$connect();
    const Office_Gallery = await prisma.office_Gallery.create({
      data: {
        imageUrl,
        Ashanti: { connect: { id: districtId } },
      },
    });

    console.log(Office_Gallery);
    return new Response("Office Gallery successfully added", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add gallery to the office", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

// UPDATE REQUEST FOR UPDATING OFFICE DETAILS
export const PUT = async (req) => {
  const { galleryId, imageUrl, districtId } = await req.json();

  const data = {
    galleryId,
    imageUrl,
    districtId,
  };
  console.log(data);
  try {
    await prisma.$connect();
    const updatedImage = await prisma.office_Gallery.update({
      where: {
        id: galleryId,
      },
      data: {
        imageUrl,
        Ashanti: { connect: { id: districtId } },
      },
    });

    console.log(updatedImage);
    return new Response("Image successfully updated", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update image", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

// DELETE REQUEST FOR REMOVING AN OFFICE
export const DELETE = async (req) => {
  const { galleryId } = await req.json();

  const data = {
    galleryId,
  };
  console.log(data);
  try {
    await prisma.$connect();
    const deletedImage = await prisma.office_Gallery.delete({
      where: {
        id: galleryId,
      },
    });

    console.log(deletedImage);
    return new Response("Image successfully removed", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to delete image", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

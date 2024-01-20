// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET REQUEST FOR ALL DISTRICT OFFICES IN A SPECIFIC REGION
export const GET = async (req, res) => {
  try {
    await prisma.$connect();
    const districts = await prisma.ashanti.findMany({});

    let result = [];

    console.log(districts);
    return new Response(JSON.stringify(districts), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all district offices", {
      status: 500,
    });
  }
};

// POST REQUEST FOR CREATING AN OFFICE
export const POST = async (req) => {
  const { districtname, location, address, staffCapacity, contact } =
    await req.json();

  const data = {
    districtname,
    location,
    address,
    staffCapacity,
    contact,
  };
  console.log(data);
  try {
    await prisma.$connect();
    const Ashanti = await prisma.ashanti.create({
      data: {
        districtname,
        location,
        address,
        staffCapacity,
        contact,
      },
    });

    console.log(Ashanti);
    return new Response("Office successfully created", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create an office", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

// UPDATE REQUEST FOR UPDATING OFFICE DETAILS
export const PUT = async (req) => {
  const {
    districtId,
    districtname,
    location,
    address,
    staffCapacity,
    contact,
  } = await req.json();

  const data = {
    districtId,
    districtname,
    location,
    address,
    staffCapacity,
    contact,
  };
  console.log(data);
  try {
    await prisma.$connect();
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
      },
    });

    console.log(Ashanti);
    return new Response("Office successfully updated", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update the office", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

// DELETE REQUEST FOR REMOVING AN OFFICE
export const DELETE = async (req) => {
  const { districtId } = await req.json();

  const data = {
    districtId,
  };
  console.log(data);
  try {
    await prisma.$connect();
    const Ashanti = await prisma.ashanti.delete({
      where: {
        id: districtId,
      },
    });

    console.log(Ashanti);
    return new Response("Office successfully removed", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to delete the office", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};

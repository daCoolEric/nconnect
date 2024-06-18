// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET REQUEST FOR ALL DISTRICT OFFICES IN A SPECIFIC REGION
export const GET = async (req, { params }) => {
  const region = params.region.split(" ").join("");
  const district = params.district.split(" ").join("");

 console.log(region);
 console.log(district);

 

  try {
    await prisma.$connect();
    const office = await prisma[region].findUnique({
      where: {
        districtname: district,
      },
    });

    console.log(office);
    return new Response(JSON.stringify(office), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to get the desire district office", {
      status: 500,
    });
  }
};


//UPDATE REQUEST FOR UPDATING OFFICE DETAILS
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

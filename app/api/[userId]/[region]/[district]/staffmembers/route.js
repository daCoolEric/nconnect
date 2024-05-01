// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//GET REQUEST FOR ALL STAFF MEMBERS IN A SPECIFIC REGION
export const GET = async (req, { params }) => {
  const districtOffice = params.district;
  try {
    await prisma.$connect();
    const profile = await prisma.profile.findMany({
      where: {
        districtname: districtOffice.toUpperCase(),
      },
    });

    console.log(profile);
    return new Response(JSON.stringify(profile), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all district offices", {
      status: 500,
    });
  }
};

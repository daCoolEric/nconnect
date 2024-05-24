import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



//GET REQUEST FOR A SPECIFIC STAFF MEMBER
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
      return new Response("Failed to get specific staff members details", {
        status: 500,
      });
    }
  };
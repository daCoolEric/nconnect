// import prisma from "@prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET REQUEST FOR ALL DISTRICT OFFICES IN A SPECIFIC REGION
export const GET = async (req, { params }) => {
  const region = params.region;
  const district = params.district;

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

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const ashantis = await prisma.ashanti.findMany();
//   console.log(ashantis);
// }

// POST REQUEST FOR CREATING A PROFILE
// export const POST = async (req) => {
//   const {
//     userId,
//     districtId,
//     forename,
//     surname,
//     rank,
//     email,
//     contact,
//     photoUrl,
//   } = await req.json();

//   const data = {
//     userId,
//     districtId,
//     forename,
//     surname,
//     rank,
//     email,
//     contact,
//     photoUrl,
//   };
//   console.log(data);
//   try {
//     await prisma.$connect();
//     const profile = await prisma.profile.create({
//       data: {
//         forename,
//         surname,
//         rank,
//         email,
//         contact,
//         photoUrl,
//         staff: { connect: { id: userId } },
//         Ashanti: { connect: { id: districtId } },
//       },
//     });

//     console.log(profile);
//     return new Response("User details successfully added", {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response("Failed to update user details", { status: 500 });
//     // return new Response(req.body, { status: 500 });
//   }
// };

// PUT REQUEST FOR UPDATING A PROFILE
// export const PUT = async (req) => {
//   const {
//     profileId,
//     userId,
//     districtId,
//     forename,
//     surname,
//     rank,
//     email,
//     contact,
//     photoUrl,
//   } = await req.json();

//   const data = {
//     profileId,
//     userId,
//     districtId,
//     forename,
//     surname,
//     rank,
//     email,
//     contact,
//     photoUrl,
//   };
//   console.log(data);
//   try {
//     await prisma.$connect();
//     const profile = await prisma.profile.update({
//       where: {
//         id: profileId,
//       },
//       data: {
//         forename,
//         surname,
//         rank,
//         email,
//         contact,
//         photoUrl,
//         staff: { connect: { id: userId } },
//         Ashanti: { connect: { id: districtId } },
//       },
//     });

//     console.log(profile);
//     return new Response("User details successfully updated", {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response("Failed to update user details", { status: 500 });
//     // return new Response(req.body, { status: 500 });
//   }
// };

// DELETE REQUEST FOR DELETING A PROFILE
// export const DELETE = async (req) => {
//   const { profileId } = await req.json();

//   console.log(profileId);
//   try {
//     await prisma.$connect();
//     const profile = await prisma.profile.delete({
//       where: {
//         id: profileId,
//       },
//     });

//     console.log(profile);
//     return new Response("User details successfully deleted", {
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return new Response("Failed to delete user details", { status: 500 });
//     // return new Response(req.body, { status: 500 });
//   }
// };

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

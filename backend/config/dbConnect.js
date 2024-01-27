import prisma from "@prisma";

export const dbConnect = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  } finally {
  }
};

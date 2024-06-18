// import prisma from "@prisma";
import { prisma } from "@prisma";
import bcrypt from "bcrypt";

// PUT REQUEST FOR RESETTING USER PASSWORD
export const PUT = async (req, { params }) => {
  const formData = await req.formData();
  let userEmail = formData.get("userEmail");
  let userId = formData.get("userId");
  const newPassword = formData.get("newPassword");

  //const order = Date.now();

  console.log({ userEmail, userId, newPassword });
  let query = {};
  if (userEmail === "") {
    query.id = userId;
  } else {
    query.email = userEmail;
  }

  console.log(query);

  try {
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const updatedUser = await prisma.users.update({
      where: query,
      data: { hashedPassword: hashedPassword },
    });

    console.log(updatedUser);
    return new Response(updatedUser, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update profile", { status: 500 });
  }
};

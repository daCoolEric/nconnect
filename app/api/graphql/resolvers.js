import db from "./_db.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    // async Users() {
    //   return await prisma.ashanti.findMany({});
    // },
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    users: async () => await prisma.users.findMany(),
    getDistricts: async () => await prisma.ashanti.findMany(),
    getProfiles: async () => await prisma.profile.findMany(),
    getGallery: async () => await prisma.office_Gallery.findMany(),
  },
  Mutation: {
    createUser: async () =>
      await prisma.users.create({
        data: {
          pin,
          email,
          hashedPassword,
          role,
        },
      }),
    addUserDetails: {},
    createOffice: async () =>
      await prisma.ashanti.create({
        data: {
          districtname,
          location,
          address,
          staffCapacity,
          contact,
        },
      }),
    updateOffice: async () =>
      await prisma.ashanti.update({
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
      }),
    removeOffice: async () =>
      await prisma.ashanti.delete({
        where: {
          id: districtId,
        },
      }),
  },
};

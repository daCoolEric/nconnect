// import { auth } from "@utils/database";
// import { signInWithEmailAndPassword } from "firebase/auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const prisma = new PrismaClient();

const handler = NextAuth({
  // adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/pages/signIn",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.users.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }
        if (isCorrectPassword) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        // console.log(user);
        // return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, session }) {
      console.log("jwt callback", { token, user, session });

      // pass in user Id and user role to the token
      if (user) {
        return {
          ...token,
          id: user.id,
          pin: user?.pin,
          role: user?.role,
          photoUrl: user?.photoUrl,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("session callback", { session, token, user });

      return {
        ...session,
        user: {
          ...session.user,
          id: token?.id,
          pin: token?.pin,
          role: token?.role,
          photoUrl: token?.photoUrl,
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };

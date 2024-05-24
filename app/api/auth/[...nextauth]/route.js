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
    async jwt({ token, user,account, session }) {
      

      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
       
    }

    // // Decrypting JWT to check if expired
    // var tokenParsed = JSON.parse(Buffer.from(token?.idToken.split('.')[1], 'base64').toString());
    // const dateNowInSeconds = new Date().getTime() / 1000
    // if (dateNowInSeconds > tokenParsed.exp) {
    //      throw Error("expired token");
    // }
   //pass in user Id and user role to the token
      if (user) {
        
        return {
          ...token,
          id: user.id,
          pin: user?.pin,
          role: user?.role,
          photoUrl: user?.photoUrl,
       
        };
      }
      console.log("jwt callback", { token, user, session });
   
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
  session: {
  // Choose how you want to save the user session.
  // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
  // If you use an `adapter` however, we default it to `"database"` instead.
  // You can still force a JWT session by explicitly defining `"jwt"`.
  // When using `"database"`, the session cookie will only contain a `sessionToken` value,
  // which is used to look up the session in the database.
  strategy: "jwt",

  // Seconds - How long until an idle session expires and is no longer valid.
  maxAge: 1 * 30 * 60, // 30 days

  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
  // updateAge: 24 * 60 * 60, // 24 hours

  // The session token is usually either a random UUID or string, however if you
  // need a more customized session token string, you can define your own generate function.
  generateSessionToken: () => {
    return randomUUID?.() ?? randomBytes(32).toString("hex")
  }
},
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };

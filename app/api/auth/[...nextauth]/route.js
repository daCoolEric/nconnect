import { auth } from "@utils/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  //   pages: {
  //     signIn: "/pages/signIn",
  //   },
  //   providers: [
  //     CredentialsProvider({
  //       // The name to display on the sign in form (e.g. 'Sign in with...')
  //       name: "Credentials",
  //       credentials: {
  //         // username: { label: "Username", type: "text", placeholder: "jsmith" },
  //         // password: { label: "Password", type: "password" },
  //       },
  //       async authorize(credentials, req) {
  //         return await signInWithEmailAndPassword(
  //           auth,
  //           credentials.email || "",
  //           credentials.password || ""
  //         )
  //           .then((userCredential) => {
  //             if (userCredential.user) {
  //               return userCredential.user;
  //             }
  //             return null;
  //           })
  //           .catch((error) => console.log(error));
  //       },
  //       secret: process.env.NEXTAUTH_SECRET,
  //     }),
  //   ],
});

export { handler as GET, handler as POST };

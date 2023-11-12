// import { auth } from "@utils/database";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   pages: {
//     signIn: "/pages/signIn",
//   },
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         return await signInWithEmailAndPassword(
//           auth,
//           credentials.username || "",
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
//     }),
//   ],
// });

// export { handler as GET, handler as POST };

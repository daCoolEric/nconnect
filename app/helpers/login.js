import { signIn } from "next-auth/react";

export async function handleLogin({ session }) {
  try {
    // await login(username, password);
    await signIn("credentials", {
      email,
      password,
      // callbackUrl: "https://nconnect-nu.vercel.app/pages/userId/explore",
      callbackUrl: `http://localhost:3000/pages/${session?.data?.user?.id}/explore`,
    });
    // await connectToDatabase();
    // await loginUser(email, password);
    console.log(session);
    console.log(email, password);
  } catch {
    alert("Error!");
    console.log((email, password));
  }
}

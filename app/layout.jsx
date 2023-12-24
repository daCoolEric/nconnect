"use client";
import "@styles/globals.css";
import { Providers } from "./GlobalRedux/provider";
import { SessionProvider } from "next-auth/react";

const metadata = {
  title: "NConnect",
  description: "Locate & Contact any NIA office near you",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* import the custom provider component */}

        <main className="main">
          {" "}
          <SessionProvider>
            <Providers>{children}</Providers>
          </SessionProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

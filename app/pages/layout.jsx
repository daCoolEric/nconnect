import "@styles/globals.css";
import Nav from "@components/Nav";
import { Suspense } from "react";
import Loading from "@app/loading";
// import Provider from "@app/sessionProvider";

export const metadata = {
  title: "NConnect",
  description: "Locate & Contact any NIA office near you",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

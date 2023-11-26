import "@styles/globals.css";
import Nav from "@components/Nav";

import { SkeletonTheme } from "react-loading-skeleton";
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
          <SkeletonTheme baseColor="#d9d9d9">{children}</SkeletonTheme>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

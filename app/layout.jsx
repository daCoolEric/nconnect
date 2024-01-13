"use client";
import "@styles/globals.css";

import Provider from "./sessionProvider";
import { ReduxProvider } from "./GlobalRedux/provider";

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
          <ReduxProvider>
            <Provider>{children}</Provider>
          </ReduxProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

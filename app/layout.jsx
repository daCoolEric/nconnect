import "@styles/globals.css";
import { Providers } from "./GlobalRedux/provider";

export const metadata = {
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
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

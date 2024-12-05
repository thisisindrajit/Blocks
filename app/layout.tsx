import type { Metadata } from "next";
import { FC } from "react";
import CConvexClientProvider from "@/providers/CConvexClientProvider";
import { APP_DESCRIPTION, APP_NAME } from "@/constants/common";
import CBackground from "@/components/CBackground";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>
> = ({ children, modal }) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@300,400,500,600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body>
        <CConvexClientProvider>
          <CBackground className="m-auto 2xl:max-w-[1920px] p-4 lg:p-6 flex flex-col gap-12">
            {children}
            {modal}
          </CBackground>
          <div id="modal-root" />
          <Toaster
            theme="light"
            richColors={true}
            expand={true}
            closeButton={true}
            toastOptions={{
              style: {
                fontFamily: `"Clash Grotesk", sans-serif`,
              },
            }}
          />
        </CConvexClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

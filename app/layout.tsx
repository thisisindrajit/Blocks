import type { Metadata } from "next";
import "./globals.css";
import CBackground from "@/components/CBackground";
import { FC } from "react";

// TODO: Change these to constants
export const metadata: Metadata = {
  title: "Blocks",
  description: "Turning curiosity into clarity.",
};

const RootLayout: FC<Readonly<{
  children: React.ReactNode;
}>> =({
  children,
}) => {
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
      <body className={`m-auto xl:max-w-[1440px] 2xl:max-w-[1920px]`}>
        <CBackground className="p-4 lg:p-6 flex flex-col gap-12">{children}</CBackground>
      </body>
    </html>
  );
}

export default RootLayout;
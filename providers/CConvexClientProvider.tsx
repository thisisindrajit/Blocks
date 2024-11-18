"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import React, { FC, ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import dynamic from "next/dynamic";

const DynamicConvexProviderWithClerk = dynamic(
  () => import("convex/react-clerk").then((mod) => mod.ConvexProviderWithClerk),
  { ssr: false }
);

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const ConvexClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={{
        layout: {
          logoImageUrl: "/logo.svg",
          socialButtonsPlacement: "top",
        },
      }}
      dynamic
    >
      <DynamicConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </DynamicConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
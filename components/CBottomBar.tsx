"use client";

import React, { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOTTOM_NAV_ITEMS } from "@/constants/common";

const CBottomBar: FC<{
  className?: string;
}> = ({ className }) => {
  const bottomNavItems = BOTTOM_NAV_ITEMS;
  const pathName = usePathname();

  return (
    <div
      className={cn(
        "bottom-bar flex items-center justify-center gap-1 max-w-fit inset-x-0 mx-auto z-[50] bg-background/75 backdrop-blur-xl border border-foreground/50 text-foreground font-medium p-1 transition-all fixed bottom-6 opacity-1 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]",
        className
      )}
    >
      {bottomNavItems.map(
        (
          navItem: { index: number; link: string; name: string },
          index: number
        ) => {
          const linkClassName =
            pathName === navItem.link
              ? "bg-teal-300/10 text-teal-300"
              : "hover:bg-foreground/10";

          return (
            <Link
              key={index}
              href={navItem.link}
              className={cn("transition-all p-3", linkClassName)}
            >
              {navItem.name}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default CBottomBar;

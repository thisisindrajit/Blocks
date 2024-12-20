"use client";

import React, { FC } from "react";
import { cn } from "@/utilities/commonUtilities";
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
        "bottom-bar flex items-center justify-center gap-1 max-w-fit inset-x-0 mx-auto z-50 bg-background/75 backdrop-blur-xl border border-foreground text-foreground font-medium p-1 transition-all fixed bottom-4 lg:bottom-6 text-sm md:text-base opacity-1 shadow-[0_30px_40px_rgba(0,_0,_0,_0.7)]",
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
              ? "bg-teal-300/20 text-teal-300"
              : "hover:bg-foreground/20";

          return (
            <Link
              key={index}
              href={navItem.link}
              className={cn("transition-all py-3 px-6", linkClassName)}
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

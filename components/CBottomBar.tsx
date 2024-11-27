"use client";

import React, { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import useScroll from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import { BOTTOM_NAV_ITEMS } from "@/constants/common";

const CBottomBar: FC<{
  className?: string;
}> = ({ className }) => {
  //   const { scrollDirection } = useScroll();
  const bottomNavItems = BOTTOM_NAV_ITEMS;
  const pathName = usePathname();

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (scrollDirection === "down") {
  //         document
  //           .querySelector(".bottom-bar")
  //           ?.classList.remove("opacity-0", "-translate-y-10");
  //         document
  //           .querySelector(".bottom-bar")
  //           ?.classList.add("opacity-1", "translate-y-0");
  //       } else {
  //         document
  //           .querySelector(".bottom-bar")
  //           ?.classList.remove("opacity-1", "-translate-y-10");
  //         document
  //           .querySelector(".bottom-bar")
  //           ?.classList.add("opacity-0", "-translate-y-10");
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [scrollDirection]);

  return (
    <div
      className={cn(
        "bottom-bar flex items-center justify-center gap-1 max-w-fit inset-x-0 mx-auto z-[50] bg-background/75 backdrop-blur-xl border border-foreground/50 text-foreground drop-shadow-xl font-medium p-1 transition-all fixed bottom-6 opacity-1",
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

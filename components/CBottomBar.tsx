"use client";

import React, { FC } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CBottomBar: FC<{
  activeIndex: number;
  className?: string;
}> = ({ activeIndex, className }) => {
  // const { scrollYProgress } = useScroll();
  // const [visible, setVisible] = useState(true);
  const navItems = [
    {
      name: "New and trending",
      link: "/user/dashboard",
    },
    {
      name: "Saved blocks",
      link: "/user/saved",
    },
  ];

  //   useMotionValueEvent(scrollYProgress, "change", (current) => {
  //     // Check if current is not undefined and is a number
  //     if (typeof current === "number") {
  //       const direction = current! - scrollYProgress.getPrevious()!;

  //       if (current == 1 && scrollYProgress.getPrevious() == 0) {
  //         setVisible(true);
  //       } else {
  //         if (direction < 0) {
  //           setVisible(true);
  //         } else {
  //           setVisible(false);
  //         }
  //       }
  //     }
  //   });

  return (
    // <AnimatePresence mode="wait">
    //   <motion.div
    //     initial={{
    //       opacity: 1,
    //       y: -50,
    //     }}
    //     animate={{
    //       y: visible ? 0 : -50,
    //       opacity: visible ? 1 : 0,
    //     }}
    //     transition={{
    //       duration: 0.25,
    //     }}
    //     className={cn(
    //       "flex items-center justify-center gap-1 max-w-fit fixed bottom-6 inset-x-0 mx-auto z-[50] bg-background/75 backdrop-blur-xl border border-foreground/50 text-foreground drop-shadow-xl font-medium p-1",
    //       className
    //     )}
    //   >
    <div
      className={cn(
        "flex items-center justify-center gap-1 max-w-fit fixed bottom-6 inset-x-0 mx-auto z-[50] bg-background/75 backdrop-blur-xl border border-foreground/50 text-foreground drop-shadow-xl font-medium p-1",
        className
      )}
    >
      {navItems.map(
        (navItem: { link: string; name: string }, index: number) => {
          const linkClassName =
            index === activeIndex
              ? "bg-teal-300/10 text-teal-300"
              : "hover:bg-foreground/10";

          return (
            <Link
              key={index}
              href={navItem.link}
              className={cn("transition-all p-3", linkClassName)}
            >
              <span className="block">{navItem.name}</span>
            </Link>
          );
        }
      )}
      {/* </motion.div>
    </AnimatePresence> */}
    </div>
  );
};

export default CBottomBar;

"use client";

import { FC, useLayoutEffect, useRef } from "react";

const CBlock: FC<{ title: string; height: string; color: string }> = ({
  title,
  height,
  color,
}) => {
  const blockRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const block = blockRef.current;

    block?.addEventListener("mouseenter", () => {
      block.style.borderColor = `hsla(${color}, 1)`;
    });

    block?.addEventListener("mouseleave", () => {
      block.style.borderColor = `transparent`;
    });

    return () => {
      block?.removeEventListener("mouseenter", () => {
        block.style.borderColor = `hsla(${color}, 1)`;
      });
      block?.removeEventListener("mouseleave", () => {
        block.style.borderColor = `transparent`;
      });
    };
  }, [color]);

  return (
    <div
      ref={blockRef}
      className={`min-w-full ${height} flex p-3 font-medium text-3xl/10 border-2 border-transparent transition-all cursor-pointer`}
      style={{
        backgroundColor: `hsla(${color}, 0.1)`,
        color: `hsla(${color}, 1)`,
      }}
    >
      {title}
    </div>
  );
};

export default CBlock;

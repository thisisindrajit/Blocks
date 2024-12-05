"use client";

import { type ElementRef, FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utilities/commonUtilities";

const CModal: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      // Make scrollbar invisible
      document.body.style.overflow = "hidden";
      dialogRef.current?.showModal();
    }

    // On unmounting the model, set overflow of body to auto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className={cn("modal", className)}>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default CModal;

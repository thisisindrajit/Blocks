"use client";

import { type ElementRef, FC, ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

const CModal: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      // Make scrollbar invisible
      document.body.style.overflow = "hidden";
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    // Make scrollbar visible
    document.body.style.overflow = "auto";
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss}>Close</button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default CModal;

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

    // On unmounting the model, set overflow of body to auto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onDismiss = () => {
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

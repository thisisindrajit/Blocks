"use client";

import {
  type ElementRef,
  FC,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CModal: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
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
  };

  return createPortal(
    <div className="modal-backdrop">
      <dialog
        ref={dialogRef}
        className={cn("modal", className)}
        // onClose={onDismiss}
      >
        <Button className="w-fit" onClick={onDismiss}>
          Go back
        </Button>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default CModal;

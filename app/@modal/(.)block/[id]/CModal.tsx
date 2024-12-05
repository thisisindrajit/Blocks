"use client";

import {
  // type ElementRef,
  FC,
  Fragment,
  ReactNode,
  useEffect,
  // useRef,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utilities/commonUtilities";

const CModal: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  // const dialogRef = useRef<ElementRef<"dialog">>(null);

  // useEffect(() => {
  //   if (!dialogRef.current?.open) {
  //     // Make scrollbar invisible
  //     document.body.style.overflow = "hidden";
  //     dialogRef.current?.showModal();
  //   }

  //   // On unmounting the modal, set overflow of body to auto
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  // return createPortal(
  //   <div className="modal-backdrop">
  //     <dialog ref={dialogRef} className={cn("modal", className)}>
  //       {children}
  //     </dialog>
  //   </div>,
  //   document.getElementById("modal-root")!
  // );

  useEffect(() => {
    // Make scrollbar invisible
    document.body.style.overflow = "hidden";

    // On unmounting the modal, set overflow of body to auto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <Fragment>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-background/75 z-[75] flex items-center justify-center">
        <div
          id="modal"
          className={cn(
            "w-[98dvw] h-[98dvh] bg-background/75 backdrop-blur-xl text-foreground flex flex-col gap-4 border border-foreground/25 2xl:max-w-[1920px] overflow-auto p-4 lg:p-5",
            className
          )}
        >
          {children}
        </div>
      </div>
    </Fragment>,
    document.getElementById("modal-root")!
  );
};

export default CModal;

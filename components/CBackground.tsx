"use client";

import { useEffect, useRef } from "react";

export default function CBackground({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        src="https://l4bxrlmpiym4asoe.public.blob.vercel-storage.com/bg-dark.webm"
        id="bg-video"
        autoPlay
        muted
        loop
        playsInline
      />
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function CBackground({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="p-4">
      <video
        ref={videoRef}
        src="https://l4bxrlmpiym4asoe.public.blob.vercel-storage.com/bg-vid.webm"
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
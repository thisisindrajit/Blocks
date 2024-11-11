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
      <video src="./bg-vid.mp4" ref={videoRef} id="bg-video" autoPlay muted loop />
      {children}
    </div>
  );
}

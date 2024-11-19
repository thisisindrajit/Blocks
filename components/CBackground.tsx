"use client";

import { FC, useEffect, useRef } from "react";

const CBackground: FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        // TODO: Update the video source
        src=""
        id="bg-video"
        autoPlay
        muted
        loop
        playsInline
      />
      {children}
    </div>
  );
};

export default CBackground;

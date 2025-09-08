"use client";
import React, { useState, ReactNode, use, Suspense } from "react";

interface VideoBackgroundWrapperProps {
  videoPath: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number;
  fallbackImage?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  showVideoOnMobile?: boolean;
}

const VideoBackgroundWrapper: React.FC<VideoBackgroundWrapperProps> = ({
  videoPath,
  children,
  className = "",
  overlayOpacity = 0.3,
  fallbackImage,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  showVideoOnMobile = false,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldShowVideo = !isMobile || showVideoOnMobile;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {fallbackImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {shouldShowVideo && !videoError && (
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <Suspense>
            <video
              autoPlay={autoPlay}
              muted={muted}
              loop={loop}
              playsInline={playsInline}
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
              preload="metadata"
            >
              <source src={videoPath} type="video/mp4" />
              <source
                src={videoPath.replace(".mp4", ".webm")}
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </Suspense>
        </div>
      )}

      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}

      <div className="relative z-20 w-full h-full">{children}</div>
    </div>
  );
};

export default VideoBackgroundWrapper;

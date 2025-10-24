import React, { RefObject, useEffect, useRef, useState } from "react";

export const useVideoControls = ({
  videoRef,
}: {
  videoRef: RefObject<HTMLVideoElement | null>;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [videoState, setVideoState] = useState<
    "notstarted" | "playing" | "paused" | "ended"
  >("notstarted");

  // Set up video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setVideoState("playing");
    };

    const handlePause = () => {
      setIsPlaying(false);
      setVideoState("paused");
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setVideoState("ended");
    };

    const handleLoadedMetadata = () => {
      if (video.currentTime === 0 && video.paused) {
        setVideoState("notstarted");
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const handleTogglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused || video.ended) {
        // Reset video if it has ended
        if (video.ended) {
          video.currentTime = 0;
        }
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Error toggling video playback:", error);
    }
  };

  // Determine if button should be visible
  const showButton =
    videoState === "notstarted" ||
    videoState === "ended" ||
    videoState === "paused" ||
    isVideoHovered;

  return {
    showButton,
    handleTogglePlay,
    videoRef,
    isPlaying,
    setIsPlaying,
    videoState,
    setVideoState,
    setIsVideoHovered,
    isVideoHovered,
  };
};

"use client";
import { useVideoControls } from "@/hooks/use-video-controls";
import { IconMinus } from "@tabler/icons-react";
import { useRef } from "react";

export const TestimonialVideo = ({
  studentName,
  videoUrl,
}: {
  studentName: string;
  videoUrl: string;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {
    isPlaying,
    showButton,
    handleTogglePlay,
    videoState,
    setIsVideoHovered,
  } = useVideoControls({ videoRef });

  return (
    <div
      className="group relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsVideoHovered(true)}
      onMouseLeave={() => setIsVideoHovered(false)}
      onClick={handleTogglePlay}
    >
      <video width="600" height="300" className="rounded-lg" ref={videoRef}>
        <source src={videoUrl} />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <button
        type="button"
        aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         bg-white rounded-full p-4 z-30 transition-opacity duration-300
                         ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={(e) => {
          e.stopPropagation(); // Prevent double-triggering from parent div
          handleTogglePlay();
        }}
      >
        {isPlaying ? (
          <IconMinus className="h-8 w-8 text-black" />
        ) : videoState === "ended" ? (
          // Replay icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ) : (
          // Play icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.308v7.384a1 1 0 001.234.97l6.518-3.759a1 1 0 000-1.732z"
            />
          </svg>
        )}
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
        <h3 className="text-white font-semibold text-sm md:text-2xl tracking-wide">
          {studentName}
        </h3>
      </div>
    </div>
  );
};

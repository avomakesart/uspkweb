"use client";
import { Container } from "@/components/container";
import { IconMinus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const VideoCTA = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [videoState, setVideoState] = useState<
    "notstarted" | "playing" | "paused" | "ended"
  >("notstarted");
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <section className="bg-brand-yellow-foreground py-10 px-6">
      <Container variant="beige" className="flex justify-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center gap-8 mx-auto">
            <h2 className="text-brand-blue font-bold text-5xl">
              Aprende{" "}
              <span className="text-brand-yellow-dark">inglés en línea</span>{" "}
              para la vida real
            </h2>
            <p className="text-center max-w-2xl">
              Un método diseñado para profesionales ocupados: aprende desde
              cualquier lugar, a tu ritmo y con resultados visibles en poco
              tiempo.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/cbe67f60-1747-4f5b-b5f3-605588150b00.svg"
              alt="decorator"
              width={3000}
              height={1200}
              className="absolute -left-[15rem] -top-[11rem] z-10"
            />
          </div>
         <div
            className="bg-black rounded-[6rem] w-auto relative h-130 z-20 cursor-pointer"
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
            onClick={handleTogglePlay}
          >
            <video 
              ref={videoRef}
              className="w-full h-full rounded-[6rem] object-cover"
            >
              <source
                src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/videos/bald-man.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

      <button
              type="button"
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         bg-white rounded-full p-4 z-30 transition-opacity duration-300
                         ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent double-triggering from parent div
                handleTogglePlay();
              }}
            >
              {isPlaying ? (
                <IconMinus className="h-8 w-8 text-black" />
              ) : videoState === 'ended' ? (
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
          </div>
        </div>
      </Container>
    </section>
  );
};

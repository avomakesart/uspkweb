"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState } from "react";
import { TestimonialVideo } from "./sections/about/testimonial-video";

export interface VideoItem {
  id: number;
  name: string;
  thumbnail?: string;
  videoUrl: string;
}

export function VideoGridSlider({ videoData }: { videoData: VideoItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useState(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  });

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
        align: "start",
        slidesToScroll: 1,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent className="-ml-4 md:-ml-6">
        {videoData.map((video) => (
          <CarouselItem key={video.id} className="pl-4 md:pl-6 basis-1/3">
            <TestimonialVideo
              studentName={video.name}
              videoUrl={video.videoUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {videoData.length > 3 && (
        <>
          <CarouselPrevious className="h-12 w-12 md:h-16 md:w-16 -left-4 md:-left-20 bg-white/90 hover:bg-white shadow-xl border-0" />
          <CarouselNext className="h-12 w-12 md:h-16 md:w-16 -right-4 md:-right-20 bg-white/90 hover:bg-white shadow-xl border-0" />
          <div className="flex justify-center gap-2 mt-8">
            {videoData.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-slate-700"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </Carousel>
  );
}

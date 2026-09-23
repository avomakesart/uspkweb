import { HomeHero } from "@/components/sections";
import { FactsSection } from "@/components/sections/home/facts";
import { InfoCTA } from "@/components/sections/home/info-cta";
import { InitialCTA } from "@/components/sections/home/initial-cta";
import { LearnCTA } from "@/components/sections/home/learn-cta";
import { MediaCTA } from "@/components/sections/home/media-cta";
import { TestimonialsCTA } from "@/components/sections/home/testimonials-cta";
import { VideoCTA } from "@/components/sections/home/video-cta";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function Home() {
  return (
    <>
      <HomeHero />
      <InitialCTA />
      <MediaCTA />
      <LearnCTA />
      <InfoCTA />
      <VideoCTA />
      <TestimonialsCTA />
      <FactsSection />
    </>
  );
}

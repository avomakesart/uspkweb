"use client";
import { CommandMenu } from "@/components/command-menu";
import { Button } from "@/components/ui/button";
import { TYPEFORM_ENGLISH_TEST_URL } from "@/lib/constants";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="flex flex-col px-6 lg:px-0 items-start">
      <div className="flex flex-col lg:flex-row items-center gap-4 max-w-8xl relative justify-between mt-20 z-10 mx-auto">
        <div className="lg:max-w-xl lg:ml-24">
          <div className="flex items-start flex-col gap-6">
            <h1 className="text-6xl font-semibold">
              Inglés para quienes exigen{" "}
              <span className="text-brand-yellow-dark">resultados</span>,{" "}
              <span className="text-brand-yellow-dark">no promesas</span>
            </h1>
            <p className="font-medium">
              Más que clases, un método hecho para ti.
            </p>
            <Button
              variant="brand"
              size="lg"
              shape="rounded"
              className="text-foreground"
              asChild
              onClick={() =>
                sendGTMEvent({
                  event: "cta_click",
                  cta_label: "test_your_english_level",
                })
              }
            >
              <Link href={TYPEFORM_ENGLISH_TEST_URL}>
                Evalúa tu nivel gratis
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex gap-8 items-end max-w-full">
          <div className="flex w-full items-center gap-4">
            <Image
              src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/home-hero-main.png"
              alt="home hero"
              width={1000}
              height={2000}
            />
          </div>
        </div>
      </div>
      <div className="bg-brand-blue h-96 w-full absolute left-0 top-176 md:top-210 lg:top-130 z-0" />
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-between w-full z-10 max-w-7xl mx-auto mt-8 px-6 lg:px-0 ">
        <CommandMenu
          onTrack={() =>
            sendGTMEvent({ event: "cta_click", cta_label: "home_search_bar" })
          }
        />
        <div className="flex lg:mr-14">
          <h2 className="font-medium text-3xl text-background text-center">
            Tenemos más de 30 años de experiencia.
          </h2>
        </div>
      </div>
    </div>
  );
}

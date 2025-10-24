"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";

export function AcademyContent() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const layoutContainer = window.document.getElementById("app-container");
      layoutContainer?.classList.add("background-academy");
    }

    return () => {};
  }, []);
  
  return (
    <div className="flex justify-center items-center flex-col gap-5 py-40 px-6">
      <div className="w-46">
      <Image
        src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/logos/ua-white.png"
        className="object-cover"
        alt="Academy"
        height={50}
        width={200}
      />
      </div>
      <h1 className="text-4xl text-center font-sans font-bold text-white">
        Lo que viene cambiará tu manera de aprender inglés
      </h1>
      <p className="text-2xl text-white font-medium">Disponible en octubre</p>
      <Button variant="brand" shape="rounded" size="lg" className="text-black">
        Quiero enterarme primero
      </Button>
    </div>
  );
}

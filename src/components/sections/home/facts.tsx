"use client";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { FACEBOOK_PAGE_URL, GOOGLE_REVIEWS_URL } from "@/lib/constants";
import Link from "next/link";

export const FactsSection = () => {
  return (
    <Container variant="beige" className="py-14">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-around gap-8">
        <div className="bg-brand-blue p-12 rounded-2xl max-w-xl text-white">
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl">
              Contamos con la
              <br />
              confianza de más de <br />
              <span className="text-brand-yellow-dark">
                5,000 estudiantes
              </span>{" "}
              <br />
              felices
            </h3>
            <p>
              Nuestro compromiso es simple: que alcances tus metas en inglés de
              forma rápida y efectiva.
              <br />
              <br />
              Durante más de tres décadas, hemos acompañado a estudiantes de
              todos los niveles —profesionistas, empresarios, académicos y
              viajeros— para que dominen el idioma y lo integren a su vida
              diaria.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-18">
          <div className="w-48 h-74 rounded-t-full bg-brand-gray-blue">
            <div className="flex h-full flex-col items-center gap-3 pt-10">
              <h4 className="text-6xl font-sans font-bold text-white">96%</h4>
              <p className="text-white font-semibold text-center px-3">
                De aprobación en Facebook.
              </p>
              <div className="relative w-full">
                <img
                  src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/50f950df-ef8e-45fd-8972-67b27f830829.svg"
                  alt="Google reviews"
                  className="max-w-full absolute inset-0 -top-20"
                />
              </div>
              <Button
                variant="brand"
                size="sm"
                className="mt-auto mb-6 text-foreground"
                asChild
              >
                <Link href={FACEBOOK_PAGE_URL}>Quiero verificarlo</Link>
              </Button>
            </div>
          </div>
          <div className="w-48 h-74 rounded-t-full bg-brand-light-blue">
            <div className="flex h-full flex-col items-center gap-3 pt-10">
              <h4 className="text-6xl font-sans font-bold text-white">4.9</h4>
              <p className="text-white font-semibold text-center px-3">
                Más de 70 reviews en Google.{" "}
              </p>
              <div className="relative w-full">
                <img
                  src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/658d32c5-49c7-4a0b-b1f4-2dc7fa804703.svg"
                  alt="Google reviews"
                  className="max-w-full absolute inset-0 -top-20"
                />
              </div>
              <Button
                variant="brand"
                size="sm"
                className="mt-auto mb-6 text-foreground"
                asChild
              >
                <Link href={GOOGLE_REVIEWS_URL}>Quiero verificarlo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

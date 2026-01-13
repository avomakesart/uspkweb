"use client";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { GOOGLE_REVIEWS_URL } from "@/lib/constants";
import { sendGTMEvent } from "@next/third-parties/google";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const TestimonialsCTA = () => {
  return (
    <section className="py-10 px-6 lg:px-0 bg-brand-yellow-foreground">
      <Container variant="beige">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-bold text-5xl text-brand-blue">
            Lo que opinan{" "}
            <span className="text-brand-yellow-dark">nuestros alumnos</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col gap-6 max-w-xl">
              <div className="bg-[#f2f2f2] px-6 py-4 flex-col rounded-3xl text-lg">
                <p>
                  Muy recomendable! yo he tomado clases virtuales por varios
                  meses y la calidad es excelente. Felicito a mi profesora Devin
                  porque es excelente en sus clases: te motiva muchísimo,
                  profesional, preocupada porque realmente se comprendan los
                  temas, se apliquen y te ayuda en cualquier duda. Excelente
                  opción si quieres praticar tu conversación.
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-bold">Rocío, México City</span>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((item, key) => (
                      <span key={item + key}>
                        <IconStarFilled
                          className="text-brand-yellow-dark"
                          key={item}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-[#f2f2f2] px-6 py-4 flex-col gap-4 rounded-3xl text-lg">
                <p>
                  Inicie está nueva aventura con el mejor equipo!!! Todos es muy
                  bueno, las clases muy dinámicas y los profesores te ayudan
                  super bien día a día! Me encantó el método de trabajo desde el
                  servicio que me dieron al inicio, las clases pruebas y toda la
                  disponibilidad y atención!!
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-bold">Karla, Guadalajara</span>
                  <div className="flex flex-col items-center gap-2">
                    <Button
                      variant="link"
                      className="p-0 underline"
                      onClick={() =>
                        sendGTMEvent({
                          event: "cta_click",
                          cta_label: "google_reviews",
                        })
                      }
                      asChild
                    >
                      <Link href={GOOGLE_REVIEWS_URL}>Leer más</Link>
                    </Button>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map((item, key) => (
                        <span key={item + key}>
                          <IconStarFilled className="text-brand-yellow-dark" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex z-30 flex-col justify-center items-center mx-auto">
              <Image
                src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/pictures-decoration.png"
                alt="Pictures decoration"
                width={1000}
                height={2000}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

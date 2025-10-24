import { Container } from "@/components/container";
import Image from "next/image";
import { EarthIcon } from "./earth-icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WHATSAPP_CONTACT_URL } from "@/lib/constants";

export const InitialCTA = () => {
  return (
    <section className="bg-brand-blue pt-40 pb-20 px-6 lg:px-0 w-full relative">
      <Container>
        <div className="flex flex-col gap-4 items-center px-4 md:px-0 lg:items-start  justify-between">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <h2 className="text-5xl font-bold text-white text-left lg:max-w-xl">
              Encontramos una{" "}
              <span className="text-brand-yellow-dark">solución adaptada</span>{" "}
              a tus necesidades.
            </h2>
            <p className="text-white max-w-xl">
              Brindamos servicios completos de capacitación en inglés
              personalizados para atender las necesidades de empresas y gente
              que desean optimizar sus habilidades de comunicación y competencia
              en el idioma inglés.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row  lg:gap-24 w-full justify-around items-center">
            <div className="lg:mr-12">
            <Image src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/world-icon-img.png" alt="world icon" width={400} height={200} />
            </div>
            <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row items-center gap-6">
              <span className="font-bold text-xl text-center text-white">
                ¿Estás listo para hablar inglés?
              </span>
              <Button variant="brand" shape="rounded" asChild>
                <Link
                  href={`${WHATSAPP_CONTACT_URL}?text=${encodeURI("Estoy Listo Para hablar Ingles")}`}
                >
                  Habla con nosotros
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

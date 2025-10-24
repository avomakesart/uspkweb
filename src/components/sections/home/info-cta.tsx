import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACT_URL } from "@/lib/constants";
import { IconInfoCircle } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export const InfoCTA = () => {
  return (
    <section className="bg-brand-blue pb-20 px-6 lg:px-0 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-start lg:flex-row lg:items-center justify-between gap-8 lg:gap-20">
          <div className="border border-white rounded-xl p-4  lg:max-w-175">
            <div className="flex items-start gap-6 text-white">
              <IconInfoCircle className="size-25" />
              <div className="flex flex-col items-start gap-4">
                <span className="font-bold">
                  ¿Sabías que la mayoría de quienes hablan inglés no nacieron
                  con él?
                </span>
                <span>
                  No necesitas vivir en un país de habla inglesa para hablarlo
                  con seguridad. Nuestro método, diseñado para adultos
                  profesionales, acelera tu progreso con clases personalizadas,
                  materiales relevantes para tu carrera y prácticas reales de
                  conversación.
                </span>
              </div>
            </div>
          </div>
          <Button
            className="text-black z-10"
            variant="brand"
            size="lg"
            shape="rounded"
            asChild
          >
            <Link
              href={`${WHATSAPP_CONTACT_URL}?text=${encodeURI("Quiero obtener mi plan de estudio")}`}
            >
              Obtén tu plan hoy
            </Link>
          </Button>
        </div>
      </Container>
      <Image
        src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/0bcbef5c-ce00-4297-88d1-16e5939f558e.svg"
        alt="Globe"
        width={400}
        height={400}
        className="absolute -top-4 -right-38"
      />
    </section>
  );
};

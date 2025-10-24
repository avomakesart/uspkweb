import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  TYPEFORM_ENGLISH_TEST_URL,
  WHATSAPP_CONTACT_URL,
} from "@/lib/constants";
import {
  IconBrandWhatsapp,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes dudas sobre nuestros cursos o quieres saber cuál es el ideal para ti? Escríbenos y un asesor se pondrá en contacto contigo para ayudarte a elegir la mejor opción.",
  keywords: [
    "Contacto",
    "Academia de inglés",
    "Cursos de inglés",
    "Asesoría personalizada",
    "Inglés con resultados",
    "Habla inglés",
    "Aprender inglés",
    "Soporte al estudiante",
  ],
};

export default async function ContactPage() {
  return (
    <>
      <section className="relative">
        <Container variant="beige" className="mt-20 pb-10">
          <div className="flex items-start gap-8 px-4 lg:px-0 justify-between">
            <div className="flex items-start gap-8 flex-col max-w-2xl">
              <h1 className="text-5xl font-bold">
                Da{" "}
                <span className="text-brand-yellow-dark">el primer paso</span>{" "}
                hacia el inglés que necesitas hoy
              </h1>
              <p className="text-xl">
                ¿Tienes dudas sobre nuestros cursos o quieres saber cuál es el
                ideal para ti? Escríbenos y un asesor se pondrá en contacto
                contigo para ayudarte a elegir la mejor opción.{" "}
              </p>
            </div>
          </div>
        </Container>
        <div className="bg-brand-blue w-full py-10">
          <Container className="relative">
            <div className="flex items-center flex-col lg:flex-row justify-between w-full gap-10">
              <div className="flex flex-col lg:px-0 px-4 w-full items-start gap-10">
                <h4 className="text-2xl font-semibold text-white">
                  Estamos listos para acompañarte en tu camino hacia el inglés.
                </h4>

                <div className="flex flex-col items-start gap-5">
                  <div className="flex items-center gap-3">
                    <span className="bg-white rounded-full p-1">
                      <IconPhoneFilled />
                    </span>
                    <a
                      href="tel:+523323207866"
                      className="text-white text-lg hover:underline"
                    >
                      +52 33 2320 7866
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-white rounded-full p-1">
                      <IconMailFilled />
                    </span>
                    <a
                      href="mailto:hello@uspk.com.mx"
                      className="text-white text-lg hover:underline"
                    >
                      hello@uspk.com.mx
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-white">
                    ¿Prefieres hablar con nosotros directamente? Escríbenos:
                  </p>
                  <Link href={WHATSAPP_CONTACT_URL} className="flex">
                    <span className="bg-green-500 rounded-sm p-1">
                      <IconBrandWhatsapp className="text-white" />
                    </span>
                  </Link>
                </div>

                <div className="border border-white mx-auto rounded-lg p-8">
                  <div className="flex flex-col items-center gap-6">
                    <p className="font-bold text-xl text-white">
                      Evalúa tu nivel en minutos y descubre por dónde empezar.
                    </p>
                    <Button
                      variant="brand"
                      shape="rounded"
                      className="text-black"
                      asChild
                    >
                      <Link href={TYPEFORM_ENGLISH_TEST_URL}>
                        Haz tu test gratuito
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="h-110! mx-8 hidden lg:flex"
              />
              <div className="w-full px-6 lg:-mt-80 lg:pl-45">
                <ContactForm />
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="cta-banner">
        <div className="relative w-full">
          <h3 className="absolute top-18 left-10 text-3xl text-white font-bold z-20 max-w-sm">
            El inglés que necesitas, con el apoyo que mereces.
          </h3>
          <Image
            src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/parallax2.png"
            alt="People working together"
            width={1920}
            height={1080}
            className="w-full h-72 md:h-80 lg:h-130 object-[center] object-cover z-40"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center" />
        </div>
      </section>
    </>
  );
}

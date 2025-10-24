import { Container } from "@/components/container";
import { GroupVideo } from "@/components/sections/about/group-video";
import { SpeakerVideo } from "@/components/sections/about/speaker-video";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { VideoGridSlider, VideoItem } from "@/components/video-grid-slider";
import { WHATSAPP_CONTACT_URL } from "@/lib/constants";
import { IconThumbUp, IconUsersGroup } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Descubre Üspk English: más de 30 años de experiencia enseñando inglés con un método único que prioriza la conversación y resultados reales. Conoce nuestra misión, visión y los principios que nos guían para empoderarte en tu aprendizaje del inglés.",
  keywords: [
    "Sobre nosotros",
    "Quiénes somos",
    "Misión Üspk English",
    "Visión Üspk English",
    "Método de enseñanza de inglés",
    "Experiencia educativa",
    "Aprender inglés con Üspk",
    "Inglés con resultados",
    "Academia de inglés",
    "Profesores de inglés",
  ],
};

const principleList = [
  {
    title: "Excelencia Educativa",
    icon: IconThumbUp,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/thumbs-up-icon.png",
    description:
      "Compromiso con ofrecer una enseñanza de alta calidad que permita a los estudiantes alcanzar sus metas lingüísticas.",
  },
  {
    title: "Personalización",
    icon: IconThumbUp,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/hand-directions-icon.png",
    description:
      "Enfoque en adaptar la enseñanza a las necesidades y ritmos individuales de cada estudiante, asegurando un aprendizaje efectivo y personalizado.",
  },
  {
    title: "Innovación",
    icon: IconThumbUp,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/idea-icon.png",
    description:
      "Uso de métodos y tecnologías de vanguardia para facilitar un aprendizaje moderno y relevante.",
  },
  {
    title: "Pasión por la Enseñanza",
    icon: IconThumbUp,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/lovebrain-icon.png",
    description:
      "Dedicación y entusiasmo por guiar a los estudiantes en su camino hacia el dominio del inglés.",
  },
  {
    title: "Compromiso con la Comunidad",
    icon: IconThumbUp,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/people-group-icon.png",
    description:
      "Fomento del crecimiento tanto de estudiantes como de colaboradores y socios, contribuyendo al desarrollo de la comunidad.",
  },
  {
    title: "Integridad",
    icon: IconThumbUp,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/puzzle-icon.png",
    description:
      "Mantener altos estándares éticos y morales en todas las interacciones y procesos, asegurando confianza y respeto mutuo.",
  },
];

const attributes = [
  {
    icon: IconUsersGroup,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/conversational-focus.png",
    title: "Enfoque Conversacional",
    description:
      "Desde la primera clase, hablas inglés con confianza y fluidez natural.",
  },
  {
    icon: IconUsersGroup,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/gamification.png",
    title: "Gamificación con Propósito",
    description: "Aprende jugando mientras alcanzas metas reales.",
  },
  {
    icon: IconUsersGroup,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/reduced-grammar.png",
    title: "Gramática Reducida",
    description: "Solo lo necesario para comunicarte sin trabas ni estrés.",
  },
  {
    icon: IconUsersGroup,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/practice-platform.png",
    title: "Plataforma de Prácticas+",
    description:
      "Refuerza tu inglés en cualquier momento con ejercicios divertidos e interactivos.",
  },
  {
    icon: IconUsersGroup,
    iconImage:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/flex.png",
    title: "Modalidad Flexible",
    description: "Estudia online o en tu empresa, adaptado a tu ritmo de vida.",
  },
];

const testimonialVideoData: VideoItem[] = [
  {
    id: 1,
    name: "Isis Castañeda",
    videoUrl:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/videos/user-1-testimonial.mp4",
  },
  {
    id: 2,
    name: "Mary Gómez",
    videoUrl:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/videos/user-2-testimonial.mp4",
  },
  {
    id: 3,
    name: "Rocío Castillo",
    videoUrl:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/videos/user-3-testimonial.mp4",
  },
];

export default function About() {
  return (
    <>
      <section className="pt-18 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige" className="z-20">
          <div className="flex flex-col xl:flex-row items-center">
            <div className="max-w-3xl justify-center flex flex-col gap-12">
              <h1 className="text-5xl text-brand-blue font-bold">
                Donde{" "}
                <span className="text-brand-yellow-dark">
                  la pasión por enseñar{" "}
                </span>
                se encuentra con la experiencia
              </h1>
              <div className="max-w-2xl flex flex-col items-start gap-6">
                <p className="text-xl">
                  En Üspk English creemos que el inglés no es solo un idioma, es
                  la llave que abre puertas. Con más de tres décadas de
                  experiencia y miles de estudiantes, hemos creado un método que
                  combina práctica real, personalización y resultados medibles.
                </p>
                <p className="text-xl">
                  Queremos que el inglés se convierta en tu herramienta más
                  poderosa para crecer, conectar y lograr lo que te propongas.
                </p>
                <Button
                  variant="brand"
                  shape="rounded"
                  className="text-black"
                  asChild
                >
                  <Link href={WHATSAPP_CONTACT_URL}>Inscríbete hoy</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-[6rem] w-full relative z-10 xl:block hidden">
              <Image
                src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/corporate-meeting.png"
                alt="English logo"
                width={600}
                height={600}
                objectFit="cover"
                objectPosition="center"
                className="rounded-[inherit] absolute -top-48 left-60"
              />
              <div className="bg-brand-gray-blue text-white px-8 z-40 absolute h-62 rounded-t-full w-50 right-0 left-133 -top-60">
                <div className="flex flex-col text-center items-center justify-center gap-2 mt-8">
                  <span className="font-bold text-lg">+ 5 mil alumnos</span>
                  <p className="text-xs">que aprendieron con nuestro método.</p>
                </div>
              </div>

              <div className="bg-brand-light-blue text-white px-8 z-40 absolute h-48 rounded-t-full w-50 right-0 left-132 -top-24">
                <div className="flex flex-col text-center items-center justify-center gap-2 mt-8">
                  <span className="font-bold text-lg">+ 30 años</span>
                  <p className="text-xs">de experiencia educativa.</p>
                </div>
              </div>
              <div className="bg-[#aac0df] text-white px-8 z-40 absolute h-53 rounded-t-full w-50 right-0 left-132 top-4">
                <div className="flex flex-col text-center items-center justify-center gap-2 mt-8">
                  <span className="font-bold text-lg">4.9</span>
                  <p className="text-black text-xs">
                    de calificación en Google.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="max-w-3xl mt-10 hidden xl:flex bg-black" />
        </Container>
      </section>

      <section className="pt-12 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container className="p-12 rounded-3xl">
          <div className="flex flex-col lg:flex-row text-white justify-between">
            <div className="flex flex-col gap-8 items-center">
              <h3 className="font-bold text-4xl">Misión</h3>
              <p className="text-xl font-medium">
                Empoderar a nuestros estudiantes para dominar el inglés y
                alcanzar sus metas profesionales y personales, combinando
                innovación, experiencia y pasión por enseñar.
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="mx-18 h-50! hidden lg:flex"
            />
            <Separator
              orientation="horizontal"
              className="my-18 flex lg:hidden"
            />
            <div className="flex flex-col gap-8 items-center">
              <h3 className="font-bold text-4xl">Visión</h3>
              <p className="text-xl font-medium">
                Ser líderes en la enseñanza del inglés a nivel nacional e
                internacional, reconocidos por nuestra excelencia, innovación y
                compromiso con las personas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="flex flex-col items-start gap-6">
            <h3 className="text-4xl font-bold text-brand-blue">
              Principios que{" "}
              <span className="text-brand-yellow">nos guían</span>
            </h3>
            <p>
              Nuestro compromiso con la excelencia y el aprendizaje real se basa
              en estos pilares.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {principleList.map((item) => (
              <Card key={item.title} className="bg-brand-blue text-white">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>{item.title}</CardTitle>
                  {item.iconImage && (
                    <Image
                      src={item.iconImage}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="h-18 w-18 mt-2"
                    />
                  )}
                </CardHeader>
                <CardContent>{item.description}</CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-4xl font-bold text-brand-blue">
              Nuestro Método:{" "}
              <span className="text-brand-yellow-dark">aprende hablando,</span>{" "}
              no memorizando
            </h3>
            <p>
              Un sistema diseñado para que hables inglés desde el primer día,
              con resultados visibles en semanas.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
            {attributes.map((attr) => (
              <div
                className="bg-brand-light-blue rounded-t-full max-w-xs"
                key={attr.title}
              >
                <div className="flex flex-col items-center text-center gap-4 p-6 text-white">
                  {attr.iconImage && (
                    <Image
                      src={attr.iconImage}
                      alt={attr.title}
                      width={100}
                      height={100}
                      className="w-18"
                    />
                  )}
                  <span className="font-semibold text-brand-yellow text-xl">
                    {attr.title}
                  </span>
                  <p>{attr.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="flex flex-col items-center lg:flex-row gap-8">
            <GroupVideo />
            <div className="flex flex-col max-w-xl gap-8">
              <h3 className="text-4xl font-bold text-brand-blue">
                Encuentra tu voz{" "}
                <span className="text-brand-yellow-dark">en inglés</span>
              </h3>
              <p>
                En Üspk creemos que aprender inglés no es memorizar reglas, sino
                usarlo para comunicarte desde el primer día. Nuestro método
                combina conversación real, actividades dinámicas y práctica
                constante para que hables con confianza en cualquier situación.
              </p>
              <p>
                Con{" "}
                <span className="font-bold">
                  Enfoque Conversacional, Gamificación con Propósito y Gramática
                  Reducida,
                </span>{" "}
                transformamos tus clases en experiencias vivas que se adaptan a
                tu ritmo y necesidades. Ya sea online, en tu empresa o en
                nuestras sesiones especiales, siempre encontrarás un espacio
                para hablar, reír, aprender y crecer.
              </p>
              <p>
                Porque no solo enseñamos inglés: te ayudamos a expresarte y ser
                tú mismo en otro idioma.
              </p>
              <div className="text-center">
                <Button
                  variant="brand"
                  shape="rounded"
                  className="text-black"
                  asChild
                >
                  <Link href={WHATSAPP_CONTACT_URL}>Empieza ya</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-4xl font-bold text-brand-blue">
              Ellos ya dieron el paso…
              <span className="text-brand-yellow-dark"> y tú, ¿cuándo?</span>
            </h3>
            <p className="font-medium">
              Descubre lo que opinan nuestros alumnos sobre aprender inglés con
              Üspk.
            </p>

            <VideoGridSlider videoData={testimonialVideoData} />
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="flex items-center flex-col lg:flex-row gap-8">
            <div className="flex flex-col max-w-xl gap-8">
              <h3 className="text-4xl font-bold text-brand-blue">
                <span className="text-brand-yellow-dark">
                  Conoce a los expertos
                </span>{" "}
                detrás de tu aprendizaje en inglés
              </h3>
              <p>
                En Üspk, nuestros tutores combinan experiencia, compromiso y un
                enfoque humano para guiarte hacia la fluidez en inglés.
              </p>
              <p>
                Cada uno de nuestros profesores está altamente capacitado y
                motivado por un objetivo claro: ayudarte a comunicarte con
                confianza en cualquier entorno profesional o personal. Su pasión
                por la enseñanza, sumada a un trato cercano y personalizado,
                crea un ambiente que impulsa tu progreso y mantiene tu
                motivación en cada clase.
              </p>
              <p>
                En este video, conocerás lo que los inspira a enseñar y cómo su
                experiencia puede marcar la diferencia en tu desarrollo.
              </p>
            </div>
            <SpeakerVideo />
          </div>
        </Container>
      </section>
    </>
  );
}

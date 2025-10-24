import { Container } from "@/components/container";
import { RegisterForm } from "@/components/register-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TYPEFORM_ENGLISH_TEST_URL,
  USPK_ACADEMY_URL,
  WHATSAPP_CONTACT_URL,
  WHATSAPP_CONTACT_URL_DIRECTOR,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { IconCircleCheckFilled, IconStarFilled } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Descubre nuestros servicios de inglés diseñados para profesionistas y empresas. Clases personalizadas, grupales y capacitación empresarial para impulsar tu carrera.",
  keywords: [
    "Servicios de inglés",
    "Clases de inglés para profesionistas",
    "Capacitación empresarial en inglés",
    "Cursos de inglés personalizados",
    "Inglés para negocios",
    "Academia de inglés en Guadalajara",
    "Inglés con resultados",
  ],
};

const servicesList = [
  {
    title: "Clases privadas 1 a 1",
    subtitle: "Aprende a tu ritmo, con un plan hecho solo para ti.",
    description:
      "Dedica de 30 a 60 minutos al día en clases online y en vivo, diseñadas para cumplir tus objetivos profesionales de forma rápida y efectiva.",
    image: "/images/services/business.jpg",
    buttonLabel: "Reserva tu primera clase",
    buttonLink: WHATSAPP_CONTACT_URL,
    imageSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/private-class.png",
  },
  {
    title: "Clases grupales (máx. 10 personas)",
    subtitle: "Aprende en comunidad, crece más rápido.",
    description:
      "Dos veces por semana, comparte experiencias, mejora tu inglés y mantén la motivación con un grupo reducido de estudiantes, en modalidad online o híbrida.",
    image: "/images/services/travel.jpg",
    buttonLabel: "Únete a un grupo",
    buttonLink: WHATSAPP_CONTACT_URL,
    imageSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/group-class.png",
  },
  {
    title: "Club de Conversación",
    subtitle: "Habla inglés con confianza, sin miedo.",
    description:
      "Práctica 100% conversacional en grupos reducidos, con temas preparados y guía de un maestro nativo. Ideal para niveles B1 y superiores.",
    image: "/images/services/studies.jpg",
    buttonLabel: "Reserva tu lugar",
    buttonLink: WHATSAPP_CONTACT_URL,
    imageSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/conversation-club.png",
  },
  {
    title: "Capacitación en Inglés para Empresas",
    subtitle: "Impulsa el inglés de tu equipo, impulsa tus resultados.",
    description:
      "Diseñamos programas a medida para mejorar las habilidades de comunicación de tu personal y potenciar el desempeño de tu empresa en el mercado global.",
    image: "/images/services/studies.jpg",
    buttonLabel: "Reserva tu primera clase",
    buttonLink: WHATSAPP_CONTACT_URL_DIRECTOR,
    imageSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/business-english.png",
  },
  {
    title: "Aprende a tu ritmo, sin horarios",
    subtitle: "Próximamente",
    description: "",
    image: "/images/services/studies.jpg",
    buttonLabel: "Reserva anticipadamente",
    buttonLink: USPK_ACADEMY_URL,
    isLast: true,
    imageSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/coming-soon-learn.png",
  },
];

const oportunitiesList = [
  { label: "Accede a mejores oportunidades laborales." },
  { label: "Conecta con líderes y profesionales de todo el mundo." },
  { label: "Abre puertas a formación y conocimiento internacional." },
  { label: "Gana seguridad en cada conversación." },
];

export default function ServicesPage() {
  const benefits = [
    {
      label: "Clases grupales 1 a 1.",
      iconImg:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/comms-icon.png",
    },
    {
      label: "Programas adaptables.",
      iconImg:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/settings-icon.png",
    },
    {
      label: "Curso de pronunciación gratis.",
      iconImg:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/conversation-icons.png",
    },
    {
      label: "Club de conversación.",
      iconImg:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/chats-icon.png",
    },
    {
      label: "Horarios flexibles.",
      iconImg:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/time-icon.png",
    },
    {
      label: "Clases online o híbridas.",
      iconImg:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/classes-icon.png",
    },
  ];

  const options = [
    { label: "Clases en vivo en línea." },
    { label: "Instructores nativos." },
    { label: "Curso de pronunciación." },
    { label: "Grupos reducidos." },
    { label: "Método funcional y conversacional." },
    { label: "Material digital en web y app." },
    { label: "Programa intensivo garantizado." },
  ];

  const englishPlans = [
    {
      label: "Más popular",
      planTitle: "Plan grupal intensivo",
      planImage:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/man-arms-blue-shirt.png",
      planDescription:
        "Diseñado para aprender y practicar inglés en un entorno dinámico y motivador.",
      options: [...options],
      price: 4349,
      currency: "MXN",
      frequency: "Por 3 meses",
      buttonLabel: "Quiero este plan",
      iconImage:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/group-icon.png",
      buttonLink: WHATSAPP_CONTACT_URL,
    },
    {
      label: "Recomendado",
      planTitle: "Plan 1 a 1 personalizado",
      planImage:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/woman-smiling.png",
      planDescription:
        "Diseñado para aprender y practicar inglés en un entorno dinámico y motivador.",
      options: [...options],
      price: 500,
      currency: "MXN",
      frequency: "Por hora",
      buttonLabel: "Quiero este plan",
      iconImage:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/conversation-icon.png",
      buttonLink: WHATSAPP_CONTACT_URL,
    },
    {
      label: "Complemento",
      planHeadline: "Potencia",
      planHeadlineHighlight: "tu aprendizaje",
      planTitle: "Club de Conversación",
      plantSubtitle: "(Para niveles B1 en adelante)",
      planImage:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/woman-online-class.png",
      planDescription:
        "Diseñado para aprender y practicar inglés en un entorno dinámico y motivador.",
      options: [...options],
      price: 2100,
      currency: "MXN",
      frequency: "Por 3 meses",
      buttonLabel: "Quiero este plan",
      iconImage:
        "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/computer-online-icon.png",
      buttonLink: WHATSAPP_CONTACT_URL,
    },
  ];

  return (
    <>
      <section className="pt-12 pb-16 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige" className="z-20">
          <div className="flex flex-col xl:flex-row items-center">
            <div className="max-w-3xl justify-center flex flex-col mx-auto gap-8">
              <h1 className="text-5xl text-brand-blue font-bold">
                Impulsa tu carrera con el inglés como{" "}
                <span className="text-brand-yellow-dark">
                  tu mejor herramienta
                </span>
              </h1>
              <div className="max-w-2xl flex flex-col items-start gap-6">
                <p className="text-xl">
                  En Üspk English ayudamos a profesionistas y empresarios a
                  comunicarse con confianza en cualquier contexto laboral.
                </p>
                <p className="text-xl">
                  Nuestros cursos personalizados te brindan el inglés que
                  necesitas para negociar, presentar, liderar y crecer en un
                  mundo global.
                </p>
              </div>
            </div>
            <Image
              src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/ef018a84-b052-4fe5-b757-fb3d8482d623.svg"
              alt="English logo"
              width={450}
              height={450}
              objectFit="cover"
              objectPosition="center"
              className="z-20"
            />
          </div>
          <Separator className="max-w-3xl hidden xl:flex bg-black" />
        </Container>
        <Image
          src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/cbe67f60-1747-4f5b-b5f3-605588150b00.svg"
          alt="Decorator"
          width={1000}
          height={900}
          className="absolute -right-120 -top-56 z-10 hidden xl:block"
        />
      </section>

      <section className="py-12 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="justify-center flex flex-col gap-5 items-center">
            <h2 className="text-center text-brand-blue text-4xl font-bold">
              Elige cómo quieres{" "}
              <span className="text-brand-yellow-dark">aprender inglés</span>
            </h2>
            <p className="text-lg">
              Modalidades flexibles y enfocadas en resultados, pensadas para
              profesionistas y empresas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 py-6">
            {servicesList.map((service) => (
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl h-112",
                  "bg-white/80 dark:bg-zinc-900/80",
                  "backdrop-blur-xl",
                  "border border-zinc-200/50 dark:border-zinc-800/50",
                  "shadow-xs",
                  "transition-all duration-300",
                  "hover:shadow-md",
                  "hover:border-zinc-300/50 dark:hover:border-zinc-700/50"
                )}
                key={service.title}
              >
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={cn(
                    "absolute inset-0",
                    "bg-linear-to-t from-black/90 via-black/40 to-transparent"
                  )}
                />

                <div className="absolute h-full top-2 left-0 right-0 p-5">
                  <div
                    className={cn(
                      "flex items-center justify-between px-2 gap-3",
                      {
                        "h-full justify-center text-center": service.isLast,
                      }
                    )}
                  >
                    <div className="space-y-1.5">
                      <span className="text-lg font-bold text-white dark:text-zinc-100 leading-snug tracking-tighter">
                        {service.title}
                      </span>
                      <div className={cn(!service.isLast && "mt-20")}>
                        <p className="text-white font-semibold">
                          {service.subtitle}
                        </p>
                        <p className="text-white dark:text-zinc-300 mt-6 tracking-tight">
                          {service.description}
                        </p>
                      </div>
                      <div className="absolute bottom-10 left-5 px-2 right-5">
                        <Button
                          variant="brand"
                          shape="rounded"
                          className="w-full text-black"
                          asChild
                        >
                          <Link href={service.buttonLink}>
                            {service.buttonLabel}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-brand-blue rounded-3xl h-full w-full p-10">
            <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
              <div className="flex flex-col items-start md:max-w-[34rem]">
                <h3 className="text-white text-4xl font-bold">
                  El inglés que{" "}
                  <span className="text-brand-yellow-dark">
                    impulsa tu carrera
                  </span>{" "}
                  y{" "}
                  <span className="text-brand-light-blue">
                    abre nuevas oportunidades
                  </span>
                </h3>
                <p className="text-white mt-10">
                  Hoy, dominar el inglés no es opcional: es la clave para crecer
                  profesionalmente, acceder a conocimientos de clase mundial y
                  conectar con personas en todo el planeta.
                </p>
                <p className="text-white mt-4">
                  En Üspk English te damos las herramientas para comunicarte con
                  confianza en cualquier entorno.
                </p>
              </div>
              <div className="flex flex-col items-center gap-10">
                <Card className="w-full lg:max-w-sm rounded-3xl bg-transparent border-white">
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      {oportunitiesList.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-4 w-full"
                        >
                          <span>
                            <IconCircleCheckFilled className="text-white size-7" />
                          </span>
                          <p className="text-white font-semibold">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Button
                  variant="brand"
                  size="lg"
                  shape="rounded"
                  className="text-black"
                  asChild
                >
                  <Link href={WHATSAPP_CONTACT_URL}>
                    Agendar mi asesoría gratis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-12 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <h3 className="text-brand-blue text-4xl font-bold">
              Capacitación en inglés para equipos de alto rendimiento
            </h3>
            <Separator
              orientation="vertical"
              className="bg-black h-20! space-x-4 hidden md:flex"
            />
            <Separator
              orientation="horizontal"
              className="bg-black md:hidden"
            />
            <h3 className="text-brand-blue text-4xl">
              Conoce nuestro producto destacado
            </h3>
          </div>
          <Card className="mt-8 bg-[#f2f2f2] z-20 relative p-3">
            <div className="flex flex-col md:flex-row items-center justify-around w-full gap-0">
              <div className="flex flex-col md:flex-row items-center m-0 gap-10">
                <div className="rounded-xl">
                  <Image
                    src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/english-companies.png"
                    alt="business"
                    width={300}
                    height={300}
                    className="rounded-2xl object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-2xl">
                      Üspk English Empresarial
                    </p>
                    <div className="ml-6 flex items-center gap-2">
                      {[0, 1, 2, 3, 4].map((item, key) => (
                        <span key={item + key}>
                          <IconStarFilled className="text-brand-yellow-dark" />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    {benefits.map((benefit) => (
                      <div
                        className="flex items-center gap-4"
                        key={benefit.label}
                      >
                        <span>
                          <Image
                            src={benefit.iconImg}
                            alt={benefit.label}
                            width={45}
                            height={45}
                          />
                        </span>
                        <p className="text-lg">{benefit.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center m-auto my-10 lg:mb-10 lg:mt-auto justify-around gap-10">
                <span className="relative">
                  <Image
                    src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/icons/handshake-icon.png"
                    alt="Shake hands"
                    width={140}
                    height={140}
                  />
                </span>
                <Button
                  variant="brand"
                  size="lg"
                  className="text-black"
                  asChild
                >
                  <Link href={WHATSAPP_CONTACT_URL_DIRECTOR}>
                    Solicitar presupuesto
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </Container>
        <div className="bg-brand-blue w-full h-80 z-10 absolute bottom-0 left-0" />
      </section>
      <section className="py-12 px-4 xl:px-0 relative overflow-hidden bg-brand-blue">
        <h3 className="text-white text-4xl font-bold max-w-7xl mx-auto">
          Tres opciones, mismo objetivo:{" "}
          <span className="text-brand-yellow">tu inglés</span>
        </h3>
        <div className="flex flex-col items-start gap-10 w-full">
          {englishPlans.map((englishPlan) => (
            <div
              className="flex flex-col items-start gap-12 w-full"
              key={englishPlan.planTitle}
            >
              <div className="flex flex-col lg:flex-row items-baseline gap-10 pl-0">
                <div className="h-14 bg-brand-light-blue flex items-center justify-center w-72 mt-10 rounded-r-full">
                  <h3 className="text-white text-4xl font-medium mb-2">
                    {englishPlan.label}
                  </h3>
                </div>
                {englishPlan.planHeadline ? (
                  <div className="flex flex-col gap-2">
                    <h3 className="text-brand-yellow text-4xl">
                      {englishPlan.planHeadline}{" "}
                      <span className="text-brand-light-blue">
                        {englishPlan.planHeadlineHighlight}
                      </span>
                    </h3>
                    <div className="flex flex-col lg:flex-row  items-start lg:items-center gap-4">
                      <h3 className="text-white text-3xl">
                        {englishPlan.planTitle}
                      </h3>
                      <span className="text-white text-2xl">
                        {englishPlan.plantSubtitle}
                      </span>
                    </div>
                  </div>
                ) : (
                  <h3 className="text-white text-3xl">
                    {englishPlan.planTitle}
                  </h3>
                )}
              </div>
              <Container>
                <div className="flex flex-col lg:flex-row items-center w-full gap-10">
                  <div className="rounded-xl relative">
                    <Image
                      src={englishPlan.planImage}
                      alt="business"
                      width={300}
                      height={300}
                      className="rounded-2xl object-cover w-full md:w-auto"
                    />
                  </div>
                  <Card className="mt-8 bg-[#f2f2f2] p-6  z-20 relative">
                    <div className="flex items-center gap-10">
                      <div className="flex flex-col items-start gap-6">
                        <div className="flex items-center gap-3">
                          <h3 className="font-bold text-brand-blue text-2xl">
                            {englishPlan.planDescription}
                          </h3>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-around w-full gap-6 md:h-64">
                          <div className="flex flex-col items-start gap-2">
                            {options.map((benefit) => (
                              <div
                                className="flex items-center gap-3"
                                key={benefit.label}
                              >
                                <span>
                                  <IconCircleCheckFilled className="text-brand-yellow-dark" />
                                </span>
                                <p className="text-lg">{benefit.label}</p>
                              </div>
                            ))}
                          </div>
                          <Separator
                            orientation="vertical"
                            className="bg-black"
                          />
                          <div className="flex flex-col items-center gap-4">
                            <span>
                              <Image
                                src={englishPlan.iconImage}
                                alt={englishPlan.planTitle}
                                width={80}
                                height={80}
                              />
                            </span>
                            <h3 className="text-4xl font-bold">
                              $
                              {new Intl.NumberFormat("es-MX", {
                                currency: "MXN",
                                style: "decimal",
                                trailingZeroDisplay: "auto",
                              }).format(englishPlan.price)}
                            </h3>
                            <p className="text-lg">{englishPlan.frequency}</p>
                            <Button
                              variant="brand"
                              className="text-black"
                              shape="rounded"
                              asChild
                            >
                              <Link href={englishPlan.buttonLink}>
                                {englishPlan.buttonLabel}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Container>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="beige">
          <div className="flex flex-col relative lg:flex-row gap-10 w-full justify-between">
            <div className="flex flex-col items-start gap-6">
              <h3 className="text-brand-blue font-bold text-4xl">
                Tu inglés empieza aquí,{" "}
                <span className="text-brand-yellow-dark">en solo 3 pasos</span>
              </h3>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bold font-sans text-lg">
                    1. Cuéntanos sobre ti.
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Llena el formulario y un asesor te ayudará a encontrar el
                      plan perfecto para ti.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-bold font-sans text-lg">
                    2. Recibe tu plan y precio personalizados.
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>Diseñado según tus metas, tu nivel y tu agenda.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-bold font-sans text-lg">
                    3. Comienza a aprender de inmediato.
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Clases en vivo, online, y adaptadas a tu ritmo, para que
                      avances desde el día uno.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="border border-black mx-auto rounded-lg p-8">
                <div className="flex flex-col items-center gap-6">
                  <p className="font-bold text-xl">
                    ¿No sabes tu nivel de inglés?
                  </p>
                  <Button
                    variant="brand"
                    shape="rounded"
                    className="text-black"
                    asChild
                  >
                    <Link href={TYPEFORM_ENGLISH_TEST_URL}>
                      Descúbrelo gratis aquí
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <RegisterForm />
          </div>
        </Container>
      </section>
      <section className="py-12 px-4 xl:px-0 relative overflow-hidden">
        <Container variant="blue" className="w-full text-white rounded-2xl">
          <div className="p-6 py-12 flex flex-col items-center gap-6">
            <h3 className="text-4xl font-bold text-center">
              Empresas que{" "}
              <span className="text-brand-yellow-dark">
                ya impulsan su inglés
              </span>{" "}
              con nosotros
            </h3>
            <p className="text-lg text-center font-medium max-w-2xl">
              Líderes en educación corporativa en inglés, trabajando con
              empresas de diversos sectores y tamaños.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

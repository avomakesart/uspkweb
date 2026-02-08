"use client";
import Image from "next/image";
import {
  useActionState,
  useEffect,
  useState,
  type ComponentProps,
} from "react";
import { Container } from "./container";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";
import { sendNewsletter } from "@/lib/actions/send-email";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";
import { Field, FieldError, FieldGroup, FieldSet } from "./ui/field";
import Link from "next/link";
import { SOUNDCLOUD_URL, SPOTIFY_URL, TYPEFORM_ENGLISH_TEST_URL, WHATSAPP_CONTACT_URL, FACEBOOK_PAGE_URL, USPK_ACADEMY_URL } from "@/lib/constants";
import { sendGTMEvent } from "@next/third-parties/google";
import { siteConfig } from "@/lib/config";

interface FooterProps extends ComponentProps<"div"> {}

type FormErrors = {
  email?: string;
};

const validateEmail = (values: { email: string }): FormErrors => {
  const errors: FormErrors = {};

  if (!values.email.trim()) {
    errors.email = "Tu correo electronico es requerido.";
  } else {
    // Check email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email)) {
      errors.email = "El correo eletronico es invalido.";
    }
  }

  return errors;
};

export function Footer({ ...rest }: FooterProps) {
  const pathname = usePathname();
  const [state, formAction, isPending] = useActionState(sendNewsletter, null);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (state == null) return;

    if (state?.success) {
      toast.success("Haz sido registrado correctamente al newsletter.");
      sendGTMEvent({ event: "newsletter_signup", cta_label: "newsletter" });
      // Reset form using a microtask to avoid setState in effect
      setTimeout(() => {
        setEmail("");
        setTouched(false);
      }, 0);
      return;
    }

    if (!state?.success) {
      toast.error("Hubo un error al realizar tu registro del newsletter", {
        description: "Recarga la pagina e intentalo nuevamente.",
      });
    }
  }, [state]);

  const handleFormAction = (formData: FormData) => {
    const validationErrors = validateEmail({ email });
    setErrors(validationErrors);
    setTouched(true);

    if (Object.keys(validationErrors).length > 0) return;

    // If no validation errors, execute server action
    formAction(formData);
  };

  const handleChange = (value: string) => {
    setEmail(value);

    // Mark field as touched (user has interacted)
    setTouched(true);

    // Revalidate the field dynamically and remove error if it becomes valid
    const fieldError = validateEmail({ email });
    setErrors({ email: fieldError.email });
  };

  return (
    <footer
      className={cn("bg-brand-blue mt-40 py-14 px-4 z-20", {
        "mt-0": pathname === "/contact",
        hidden: pathname === "/request-quote",
      })}
    >
      <div className="w-full bg-brand-yellow p-8 rounded-4xl -mt-40 mb-20 max-w-5xl mx-auto">
        <div className="max-w-3xl justify-center flex flex-col items-center mx-auto gap-3">
          <h3 className="text-4xl text-center text-brand-blue font-semibold">
            Únete a nuestra comunidad
          </h3>
          <p className="text-base lg:text-xl text-center">
            Forma parte de Üspk y recibe beneficios solo para miembros: precios
            especiales, webinars gratuitos, artículos inspiradores y consejos
            para mejorar tu inglés cada día. No te pierdas nada.
          </p>
          <div className="relative" suppressHydrationWarning>
            <form action={handleFormAction} noValidate>
              <FieldSet>
                <Field>
                  <div suppressHydrationWarning>
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="bg-[#f2f2f2] p-4 rounded-full w-80 lg:w-96 placeholder:pl-10 aria-[invalid=true]:border-red-500 aria-[invalid=true]:border"
                      suppressHydrationWarning
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => handleChange(event.target.value)}
                      aria-invalid={!!errors.email}
                    />
                  </div>
                  {errors.email && <FieldError>{errors.email}</FieldError>}
                </Field>
              </FieldSet>
              <Button
                shape="rounded"
                size="lg"
                type="submit"
                className="absolute right-2 top-2"
                suppressHydrationWarning
              >
                {isPending ? (
                  <>
                    <Spinner />
                    Enviando...
                  </>
                ) : (
                  "Enviar"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Container {...rest}>
        <div className="flex items-center gap-12">
          <div className="flex flex-col items-start max-w-4xl gap-4">
            <h2 className="text-5xl font-semibold text-white">
              Escucha nuestro podcast y lleva{" "}
              <span className="text-brand-yellow-dark font-medium">
                tu inglés más allá de la clase
              </span>
              .
            </h2>
            <p className="text-white">
              Our English-speaking podcast brings you fun, practical content to
              boost your daily practice. Enjoy interviews and conversations with
              native speakers about everything and anything—just like real life.
              Because with us, Üspk English.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={SPOTIFY_URL}
                className="p-0 m-0"
                onClick={() =>
                  sendGTMEvent({
                    event: "social_link",
                    cta_label: "spotify_link",
                  })
                }
              >
                <Image
                  src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/5a013f3a-0757-488c-8cb4-2a882b6c71cb.png"
                  alt="Spotify"
                  width={100}
                  height={100}
                  className="max-w-full w-30 -mt-10"
                />
              </Link>
              <Link
                href={SOUNDCLOUD_URL}
                onClick={() =>
                  sendGTMEvent({
                    event: "social_link",
                    cta_label: "soundcloud_link",
                  })
                }
              >
                <Image
                  src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/dff1d14c-ad71-435f-9be8-338d7a0d65fb.svg"
                  alt="Soundcloud"
                  width={100}
                  height={100}
                  className="max-w-full w-40 -mt-15"
                />
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-12" />
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4 px-4">
          <div className="flex flex-col items-start gap-4">
            <div className="w-20">
              <Image
                src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/logos/white-logo.png"
                alt="Uspk logo"
                width={500}
                height={200}
                className="object-cover"
              />
            </div>
            <p className="text-background">
              Domina el inglés con Üspk, tu aliado en Guadalajara con más de 30
              años de experiencia. Cursos personalizados para todos los niveles
              y preparación para TOEFL e IELTS. ¡Empieza hoy y lleva tu inglés
              al siguiente nivel!
            </p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <span className="text-background text-2xl font-semibold">
              Paginas
            </span>
            <ul className="list-disc text-background space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "footer_home",
                    })
                  }
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "footer_services",
                    })
                  }
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "footer_about",
                    })
                  }
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "footer_contact",
                    })
                  }
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href={USPK_ACADEMY_URL}
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "footer_academy",
                    })
                  }
                >
                  Üspk Academy
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "footer_login",
                    })
                  }
                >
                  Log in
                </a>
              </li>
              <li>
                <Link
                  href={WHATSAPP_CONTACT_URL}
                  onClick={() =>
                    sendGTMEvent({
                      event: "contact_click",
                      cta_label: "footer_free_class",
                    })
                  }
                >
                  Clase Gratis
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "footer_blog",
                    })
                  }
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <span className="text-background text-2xl font-semibold">
              Utilidad
            </span>

            <ul className="list-disc text-background space-y-2">
              <li>
                <a
                  href="#"
                  onClick={() =>
                    sendGTMEvent({
                      event: "utility_click",
                      cta_label: "footer_payments",
                    })
                  }
                >
                  Pagos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    sendGTMEvent({
                      event: "utility_click",
                      cta_label: "footer_invoices",
                    })
                  }
                >
                  Facturas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    sendGTMEvent({
                      event: "utility_click",
                      cta_label: "footer_help",
                    })
                  }
                >
                  Ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    sendGTMEvent({
                      event: "utility_click",
                      cta_label: "footer_careers",
                    })
                  }
                >
                  Bolsa de trabajo
                </a>
              </li>
              <li>
                <Link
                  href={TYPEFORM_ENGLISH_TEST_URL}
                  onClick={() =>
                    sendGTMEvent({
                      event: "cta_click",
                      cta_label: "footer_level_test",
                    })
                  }
                >
                  Evaluación Gratis
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-6">
            <span className="text-background text-2xl font-semibold">
              Contacto
            </span>
            <div className="flex flex-col gap-2 items-start">
              <a
                className="text-background"
                href="tel:+523323207866"
                onClick={() =>
                  sendGTMEvent({
                    event: "contact_click",
                    cta_label: "footer_phone",
                  })
                }
              >
                +52 33 2320 7866
              </a>
              <a
                className="text-background"
                href="mailto:hello@uspk.com.mx"
                onClick={() =>
                  sendGTMEvent({
                    event: "contact_click",
                    cta_label: "footer_email",
                  })
                }
              >
                hello@uspk.com.mx
              </a>
              <div className="flex gap-1 mt-2 items-center">
                <a
                  href={WHATSAPP_CONTACT_URL}
                  onClick={() =>
                    sendGTMEvent({
                      event: "social_link",
                      cta_label: "footer_whatsapp",
                    })
                  }
                >
                  <Image
                    src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/f8bc1cf9-6d77-45cd-9263-b8c646f2c8ed.svg"
                    alt="Whatsapp"
                    width={100}
                    height={100}
                    className="max-w-full size-9"
                  />
                </a>
                <a
                  href={FACEBOOK_PAGE_URL}
                  onClick={() =>
                    sendGTMEvent({
                      event: "social_link",
                      cta_label: "footer_facebook",
                    })
                  }
                >
                  <Image
                    src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/36bc055d-f95a-4b1e-93f9-fd22d4e31260.svg"
                    alt="Facebook"
                    width={100}
                    height={100}
                    className="max-w-full size-9"
                  />
                </a>
                <a
                  href={siteConfig.links.tiktok}
                  onClick={() =>
                    sendGTMEvent({
                      event: "social_link",
                      cta_label: "footer_tiktok",
                    })
                  }
                >
                  <Image
                    src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/60e2d119-c1c0-4671-938c-34f5ce165871.svg"
                    alt="Tiktok"
                    width={100}
                    height={100}
                    className="max-w-full size-9"
                  />
                </a>
                <a
                  href={siteConfig.links.instagram}
                  onClick={() =>
                    sendGTMEvent({
                      event: "social_link",
                      cta_label: "footer_instagram",
                    })
                  }
                >
                  <Image
                    src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/6d3adc6a-960d-4256-ada2-4e58d90c7f34.svg"
                    alt="Instagram"
                    width={100}
                    height={100}
                    className="max-w-full size-9"
                  />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  onClick={() =>
                    sendGTMEvent({
                      event: "social_link",
                      cta_label: "footer_linkedin",
                    })
                  }
                >
                  <Image
                    src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/1bb6ceea-41ac-4ac6-a7f1-4db63c2405c4.svg"
                    alt="Linkedin"
                    width={100}
                    height={100}
                    className="max-w-full size-9"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

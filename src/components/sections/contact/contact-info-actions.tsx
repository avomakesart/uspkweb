"use client";

import { Button } from "@/components/ui/button";
import {
  TYPEFORM_ENGLISH_TEST_URL,
  WHATSAPP_CONTACT_URL,
} from "@/lib/constants";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  IconBrandWhatsapp,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export function ContactInfoActions() {
  return (
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
            onClick={() =>
              sendGTMEvent({ event: "contact_click", cta_label: "contact_phone" })
            }
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
            onClick={() =>
              sendGTMEvent({ event: "contact_click", cta_label: "contact_email" })
            }
          >
            hello@uspk.com.mx
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-white">
          ¿Prefieres hablar con nosotros directamente? Escríbenos:
        </p>
        <Link
          href={WHATSAPP_CONTACT_URL}
          className="flex"
          onClick={() =>
            sendGTMEvent({ event: "contact_click", cta_label: "contact_whatsapp" })
          }
        >
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
            <Link
              href={TYPEFORM_ENGLISH_TEST_URL}
              onClick={() =>
                sendGTMEvent({
                  event: "cta_click",
                  cta_label: "contact_typeform_test",
                })
              }
            >
              Haz tu test gratuito
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

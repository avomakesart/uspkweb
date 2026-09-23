import { AcademyContent } from "@/components/sections/academy/academy";
import { Metadata } from "next";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata: Metadata = {
  title: "Academy",
  description: "Proximamente: Academia en línea de Uspk English.",
  keywords: [
    "Academia de inglés",
    "Cursos de inglés",
    "Aprender inglés en línea",
    "Clases de inglés",
    "Inglés con resultados",
    "Uspk English",
  ],
};

export default function AcademyPage() {
  return <AcademyContent />;
}

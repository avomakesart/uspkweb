import { AcademyContent } from "@/components/sections/academy/academy";
import { Metadata } from "next";

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

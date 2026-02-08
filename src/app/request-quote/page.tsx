import { Scheduler } from '@/components/scheduler/scheduler'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Solicitar Presupuesto - Üspk Academy",
  description: "Solicita un presupuesto personalizado para nuestros servicios de inglés. Completa el formulario y nos pondremos en contacto contigo para ofrecerte la mejor solución para tus necesidades de aprendizaje.",
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

export default function RequestQuotePage() {
  return <Scheduler />
}

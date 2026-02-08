"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { memo, useState } from "react";
import { Logo } from "../navbar/logo";
import { BookingConfirmation } from "./booking-confirmation";
import { CalBookingData, CalComEmbed } from "./cal-embed";
import { CompanyData, CompanyForm } from "./company-form";
import { StepIndicator } from "./step-indicator";

const STEPS = [
  { label: "Detalles de la empresa", description: "Tus detalles" },
  { label: "Programar", description: "Elige una hora" },
  { label: "Confirmado", description: "Todo listo" },
];

export const Scheduler = memo(() => {
  const [currentStep, setCurrentStep] = useState(1);
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [bookingData, setBookingData] = useState<CalBookingData | null>(null);

  function handleFormSubmit(data: CompanyData) {
    setCompanyData(data);
    setCurrentStep(2);
  }

  function handleBack() {
    setCurrentStep(1);
  }

  /**
   * Called ONLY when Cal.com fires bookingSuccessfulV2 via postMessage.
   * This ensures the confirmation step cannot be reached without
   * an actual completed booking on Cal.com.
   */
  function handleBookingComplete(data: CalBookingData) {
    setBookingData(data);
    setCurrentStep(3);
  }

  function handleReset() {
    setCurrentStep(1);
    setCompanyData(null);
    setBookingData(null);
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex h-9 w-9 items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">
                <Link
                  href="/"
                  className="text-primary hover:text-primary/90"
                  onClick={() =>
                    sendGTMEvent({
                      event: "nav_click",
                      cta_label: "navbar_logo",
                    })
                  }
                >
                  <Logo className="w-20 lg:w-auto" />
                </Link>
              </span>
            </div>
            |
            <span className="text-lg font-semibold text-foreground -ml-6">
              Consulta
            </span>
          </div>
          <div className="hidden text-sm text-muted-foreground sm:block">
            Paso {currentStep} de {STEPS.length}
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col items-center px-4 py-8 md:py-12">
        <div className="w-full max-w-3xl">
          <div className="mb-8 md:mb-12">
            <StepIndicator currentStep={currentStep} steps={STEPS} />
          </div>

          <div className="mx-auto w-full max-w-3xl">
            {currentStep === 1 && <CompanyForm onSubmit={handleFormSubmit} />}
            {currentStep === 2 && companyData && (
              <CalComEmbed
                companyData={companyData}
                onBack={handleBack}
                onBookingComplete={handleBookingComplete}
              />
            )}
            {currentStep === 3 && companyData && bookingData && (
              <BookingConfirmation
                companyData={companyData}
                bookingData={bookingData}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>

      <footer className="border-t border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Todos los horarios están en Hora Estándar Central (CST)
          </p>
        </div>
      </footer>
    </main>
  );
});

Scheduler.displayName = "Scheduler";

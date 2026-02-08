"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock,
  RotateCcw,
  Users,
} from "lucide-react";
import type { CalBookingData } from "./cal-embed";
import type { CompanyData } from "./company-form";

interface BookingConfirmationProps {
  companyData: CompanyData;
  bookingData: CalBookingData;
  onReset: () => void;
}

export function BookingConfirmation({
  companyData,
  bookingData,
  onReset,
}: BookingConfirmationProps) {
  const startDate = bookingData.startTime
    ? new Date(bookingData.startTime)
    : null;
  const endDate = bookingData.endTime ? new Date(bookingData.endTime) : null;

  const formattedDate = startDate
    ? startDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "America/Chicago",
      })
    : "Date confirmed";

  const formattedStartTime = startDate
    ? startDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/Chicago",
      })
    : "";

  const formattedEndTime = endDate
    ? endDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/Chicago",
      })
    : "";

  const timeDisplay =
    formattedStartTime && formattedEndTime
      ? `${formattedStartTime} - ${formattedEndTime} CST`
      : formattedStartTime
        ? `${formattedStartTime} CST`
        : "Time confirmed";

  return (
    <Card className="w-full border-none bg-card shadow-xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow/20">
          <CheckCircle2
            className="h-10 w-10 text-brand-yellow-dark"
            aria-hidden="true"
          />
        </div>
        <CardTitle className="font-heading text-2xl text-foreground md:text-3xl">
          Llamada Programada
        </CardTitle>
        <CardDescription className="mt-2 text-base text-muted-foreground">
          {bookingData.title
            ? `Su "${bookingData.title}" ha sido programada con éxito.`
            : "Su consulta ha sido programada con éxito."}{" "}
          Esperamos poder hablar con usted.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="rounded-xl bg-muted p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Detalles de la Reserva
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <CalendarDays
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gray-blue"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Fecha
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {formattedDate}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gray-blue"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Hora
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {timeDisplay}
                  </p>
                </div>
              </div>
              {bookingData.uid && (
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Referencia de Reserva
                    </p>
                    <p className="font-mono text-sm text-foreground">
                      {bookingData.uid}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl bg-muted p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Información de la Empresa
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Building2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gray-blue"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Empresa
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {companyData.companyName}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gray-blue"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Tamaño
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {companyData.companySize} empleados
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-gray-blue"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Categoría
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {companyData.companyCategory}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={onReset}
            variant="outline"
            className="h-12 w-full border-border bg-transparent text-foreground transition-all hover:bg-muted hover:text-foreground"
            size="lg"
          >
            <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
            Programar Otra Llamada
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

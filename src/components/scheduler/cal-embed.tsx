"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CompanyData } from "./company-form";

const CAL_LINK = "uspkmx/request-a-quote";
const CAL_DIRECT_URL = `https://cal.com/${CAL_LINK}`;

export interface CalBookingData {
  uid?: string;
  title?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
}

interface CalComEmbedProps {
  companyData: CompanyData;
  onBack: () => void;
  onBookingComplete: (bookingData: CalBookingData) => void;
}

const NAMESPACE = "request-a-quote";

export function CalComEmbed({
  companyData,
  onBack,
  onBookingComplete,
}: CalComEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const calInitialized = useRef(false);

  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    (async function initCal() {
      const cal = await getCalApi({ namespace: NAMESPACE });

      // UI overrides
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#ffd123" },
          dark: { "cal-brand": "#d4af30" },
        },
      });

      // Listen for all events via wildcard
      cal("on", {
        action: "*",
        callback: (e) => {
          const { data, type } = e.detail;

          // Embed is ready to display
          if (type === "linkReady") {
            setIsLoaded(true);
          }

          // Booking was completed
          if (type === "bookingSuccessfulV2") {
            const d = data as Record<string, unknown> | undefined;
            const booking: CalBookingData = {
              uid: d?.uid as string | undefined,
              title: d?.title as string | undefined,
              startTime: d?.startTime as string | undefined,
              endTime: d?.endTime as string | undefined,
              status: d?.status as string | undefined,
            };
            onBookingComplete(booking);
          }
        },
      });
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card className="w-full border-none bg-card shadow-xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Go back to company details"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <CardTitle className="font-heading text-2xl text-foreground md:text-3xl">
              Agenda tu Llamada
            </CardTitle>
            <CardDescription className="mt-1 text-base text-muted-foreground">
              Reservando para{" "}
              <span className="font-semibold text-brand-blue">
                {companyData.companyName}
              </span>
            </CardDescription>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Todos los horarios se muestran en Hora Estándar Central (CST)
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-hidden rounded-lg">
          {!isLoaded && (
            <div
              className="absolute inset-0 z-10 rounded-lg bg-muted p-6"
              aria-live="polite"
              aria-label="Loading scheduling calendar"
            >
              <CalendarSkeleton />
            </div>
          )}

          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.4s ease-in-out",
            }}
          >
            <Cal
              namespace={NAMESPACE}
              className="rounded-none"
              calLink="uspkmx/request-a-quote"
              style={{
                width: "100%",
                height: "100%",
                overflow: "scroll",
                border: "0",
              }}
              config={{
                layout: "month_view",
                useSlotsViewOnSmallScreen: "true",
                // Build Cal.com URL with prefilled company metadata
                "metadata[companyName]": companyData.companyName,
                "metadata[companySize]": companyData.companySize,
                "metadata[companyCategory]": companyData.companyCategory,
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <a
            href={CAL_DIRECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-brand-blue hover:underline"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Abrir la página de programación en una nueva pestaña
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

/** Animated skeleton that mimics the Cal.com calendar layout */
function CalendarSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="h-6 w-48 animate-pulse rounded-md bg-border" />
        <div className="flex gap-2">
          <div className="h-8 w-8 animate-pulse rounded-md bg-border" />
          <div className="h-8 w-8 animate-pulse rounded-md bg-border" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={`dow-${i}`}
            className="mx-auto h-4 w-8 animate-pulse rounded bg-border"
          />
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={`day-${i}`}
            className="mx-auto h-10 w-10 animate-pulse rounded-full bg-border"
            style={{ animationDelay: `${i * 30}ms` }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <div className="h-4 w-32 animate-pulse rounded bg-border" />
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`slot-${i}`}
              className="h-10 animate-pulse rounded-lg bg-border"
              style={{ animationDelay: `${i * 60}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-brand-blue border-t-transparent" />
        <p className="text-sm font-medium text-muted-foreground">
          Loading scheduling calendar...
        </p>
      </div>
    </div>
  );
}

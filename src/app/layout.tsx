import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppCTA } from "@/components/whats-app-cta";
import { siteConfig } from "@/lib/config";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import { AppScripts } from "@/components/app-scripts";

const monserratSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: [
    "English",
    "Ingles",
    "Academy",
    "Academia de idiomas",
    "Ingles con resultados",
  ],
  authors: [
    {
      name: "Alvaro Castillo",
      url: "https://alvarocastle.com",
    },
  ],
  creator: "alvarocastle",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: process.env.NEXT_PUBLIC_APP_URL!,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isWhatsAppEnabled = true;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <AppScripts />
      </head>
      <TooltipProvider>
        <body
          className={`${monserratSans.variable} ${playfairDisplay.variable} antialiased bg-brand-yellow-foreground`}
        >
          <div className="flex flex-col min-h-screen" id="app-container">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster richColors position="top-center" />
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
          {isWhatsAppEnabled ? <WhatsAppCTA /> : null}
        </body>
      </TooltipProvider>
    </html>
  );
}

"use client";
import { Logo } from "@/components/navbar/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { WHATSAPP_CONTACT_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  // Navigation links array to be used in both desktop and mobile menus
  const navigationLinks = [
    { href: "/", label: "Inicio", active: pathname === "/" },
    { href: "/services", label: "Servicios", active: pathname === "/services" },
    { href: "/about", label: "Nosotros", active: pathname === "/about" },
    { href: "/contact", label: "Contacto", active: pathname === "/contact" },
    { href: "/blog", label: "Blog", active: pathname === "/blog" },
    {
      href: "/academy",
      label: "Üspk Academy",
      active: pathname === "/academy",
    },
  ];

  const handleScroll = () => {
    // Check if user has scrolled past 100 pixels
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "px-4 md:px-6 sticky top-0 z-50 bg-brand-yellow-foreground transition-[padding] duration-300 ease-in-out",
        isSticky ? "pt-0.5" : "pt-4",
        { "bg-transparent": pathname === "/academy" },
        { hidden: pathname === "/request-quote" },
      )}
    >
      <div className="flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <MobileNav items={navigationLinks} />
          <div className="flex items-center gap-6">
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
              {pathname === "/academy" ? (
                <Image
                  src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/logos/ua-white-logo.png"
                  alt="Uspk academy"
                  width={250}
                  height={200}
                  className="object-cover"
                />
              ) : (
                <Logo className="w-20 lg:w-auto" />
              )}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    href={link.href}
                    onClick={() =>
                      sendGTMEvent({
                        event: "nav_click",
                        cta_label: `navbar_${link.label.toLowerCase().replace(/\s+/g, "_")}`,
                      })
                    }
                    className={cn(
                      "text-muted-foreground text-base hover:text-primary py-1.5 font-medium focus:bg-transparent active:bg-transparent",
                      pathname === "/academy" &&
                        link.active &&
                        "data-[active]:text-white",
                      {
                        "font-semibold": link.active,
                        "font-medium": !link.active,
                        "text-white": pathname === "/academy",
                      },
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Separator
            orientation="vertical"
            className="h-7! text-brand-yellow"
          />
          <Button
            asChild
            variant="ghost"
            className={cn(
              "text-base hover:bg-none!",
              pathname === "/academy" && "text-white",
            )}
          >
            <a href="#">Login</a>
          </Button>
          <Button asChild variant="brand" shape="rounded" className="text-base">
            <Link
              href={WHATSAPP_CONTACT_URL}
              onClick={() =>
                sendGTMEvent({
                  event: "contact_click",
                  cta_label: "navbar_free_class",
                })
              }
            >
              Clase Gratis
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

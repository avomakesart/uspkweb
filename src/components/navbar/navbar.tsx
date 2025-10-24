"use client";
import { Logo } from "@/components/navbar/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import { WHATSAPP_CONTACT_URL } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
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

  return (
    <header className="pt-4 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <MobileNav items={navigationLinks} />
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 lg:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 lg:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className={cn(
                          "py-1.5",
                          link.active ? "font-bold" : "font-normal"
                        )}
                        active={link.active}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover> */}
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
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
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Navigation menu */}
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    href={link.href}
                    className={cn(
                      "text-muted-foreground text-base hover:text-primary py-1.5 font-medium focus:bg-transparent active:bg-transparent",
                      pathname === "/academy" &&
                        link.active &&
                        "data-[active]:text-white",
                      {
                        "font-semibold": link.active,
                        "font-medium": !link.active,
                        "text-white": pathname === "/academy",
                      }
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
              pathname === "/academy" && "text-white"
            )}
          >
            <a href="#">Login</a>
          </Button>
          <Button asChild variant="brand" shape="rounded" className="text-base">
            <Link href={WHATSAPP_CONTACT_URL}>Clase Gratis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

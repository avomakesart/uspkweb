"use client";

import {
  BookOpen,
  Facebook,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Home,
  Instagram,
  MessageSquare,
  MessagesSquare,
  Search,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useIsMac } from "@/hooks/use-is-mac";
import { siteConfig } from "@/lib/config";
import {
  FACEBOOK_PAGE_URL,
  TYPEFORM_ENGLISH_TEST_URL,
  WHATSAPP_CONTACT_URL,
} from "@/lib/constants";
import { Button } from "./ui/button";
import { Kbd, KbdGroup } from "./ui/kbd";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const isMac = useIsMac();
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="relative">
        <Button
          className="bg-background rounded-full p-2 w-96 h-10 placeholder:text-center"
          suppressHydrationWarning
          variant="ghost"
          onClick={() => setOpen(true)}
        />
        <div className="absolute top-2.5 right-15 hidden gap-1 sm:flex">
          <KbdGroup>
            <Kbd className="border">{isMac ? "⌘" : "Ctrl"}</Kbd>
            <Kbd className="border">K</Kbd>
          </KbdGroup>
        </div>
        <div className="absolute right-0 top-0 bg-brand-yellow text-background rounded-r-full p-2 w-12 h-10">
          <Search onClick={() => setOpen(true)} />
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => router.push("/")}>
              <Home className="mr-2 h-4 w-4" />
              <span>Inicio</span>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/services")}>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Servicios</span>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/about")}>
              <Users className="mr-2 h-4 w-4" />
              <span>Nosotros</span>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/contact")}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contacto</span>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/blog")}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Blog</span>
            </CommandItem>
            <CommandItem onSelect={() => router.push("/academy")}>
              <GraduationCap className="mr-2 h-4 w-4" />
              <span>Üspk Academy</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Enlaces Rápidos">
            <CommandItem
              onSelect={() => window.open(WHATSAPP_CONTACT_URL, "_blank")}
            >
              <MessagesSquare className="mr-2 h-4 w-4" />
              <span>Contactar por WhatsApp</span>
            </CommandItem>
            <CommandItem
              onSelect={() => window.open(TYPEFORM_ENGLISH_TEST_URL, "_blank")}
            >
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              <span>Test de Inglés Gratuito</span>
            </CommandItem>
            <CommandItem
              onSelect={() => window.open(FACEBOOK_PAGE_URL, "_blank")}
            >
              <Facebook className="mr-2 h-4 w-4" />
              <span>Facebook</span>
            </CommandItem>
            <CommandItem
              onSelect={() => window.open(siteConfig.links.instagram, "_blank")}
            >
              <Instagram className="mr-2 h-4 w-4" />
              <span>Instagram</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center py-24 px-4 xl:px-0">
      <Container
        variant="beige"
        className="w-full flex flex-col items-center text-center gap-8"
      >
        <div className="relative select-none">
          <span className="text-[10rem] md:text-[14rem] font-heading font-bold leading-none text-brand-blue/10">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-heading font-bold text-brand-blue">
            404
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-brand-blue">
            Página no <span className="text-brand-yellow-dark">encontrada</span>
          </h1>
          <p className="text-brand-gray-blue text-base md:text-lg leading-relaxed">
            La página que buscas no existe o ha sido movida. Déjanos ayudarte a volver al camino correcto.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild variant="brand" shape="rounded" size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="outline" shape="rounded" size="lg">
            <Link href="/contact">Contactarnos</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="h-px w-16 bg-brand-yellow" />
          <div className="h-2 w-2 rounded-full bg-brand-yellow" />
          <div className="h-px w-16 bg-brand-yellow" />
        </div>
      </Container>
    </section>
  );
}

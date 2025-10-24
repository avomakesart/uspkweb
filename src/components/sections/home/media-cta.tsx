import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACT_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export const MediaCTA = () => {
  return (
    <section className="bg-brand-blue px-6 lg:px-0 pb-20 w-full relative">
      <Container>
        <h2 className="text-5xl font-bold text-white">
          Clases que <span className="text-brand-yellow-dark">se adaptan</span>{" "}
          a ti y <span className="text-brand-yellow-dark">a tus metas</span>
        </h2>
        <div className="flex items-center mt-10 relative">
          <Image
            src="https://pub-b7daf0a886e34f2b8c2ab3497bc521f7.r2.dev/files/cbe67f60-1747-4f5b-b5f3-605588150b00.svg"
            alt="Decorator 1"
            width={900}
            height={1000}
            className="absolute pt-16 -left-8"
          />
          <div className="rounded-2xl bg-black h-100 w-full lg:w-150 lg:ml-20 z-10 relative">
            <div className="flex flex-col items-start gap-12 absolute pl-6 h-full justify-center z-20">
              <div className="flex items-start flex-col font-heading text-4xl text-white">
                <span className="font-semibold">Nuevo grupo</span>
                <span>Nivel 1</span>
              </div>
              <Button variant="brand" shape="rounded" className="text-black" asChild>
                <Link
                  href={`${WHATSAPP_CONTACT_URL}?text=${encodeURI("Comienzo hoy mismo")}`}
                >
                  Comienza hoy mismo
                </Link>
              </Button>
            </div>
            <div className="bg-black size-full absolute inset-0 opacity-20 rounded-[inherit]" />
            <Image
              src="https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/woman-ipad.png"
              alt="Woman"
              width={1200}
              height={1200}
              className="max-w-full size-full object-cover rounded-[inherit]"
            />
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-brand-yellow-dark rounded-r-full py-6 pr-8 pl-3">
              <div className="flex flex-col items-start font-heading text-white text-2xl">
                <span className="font-semibold">inscríbete</span>
                <span>por sólo</span>
                <span className="text-3xl">$700</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

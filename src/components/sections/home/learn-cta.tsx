import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import Image from "next/image";

const learningData = [
  {
    id: "dude1",
    label: "Clases online, hechas para tu agenda.",
    imgSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/business-man-laptop-2.png",
    imgAlt: "learning",
    labelPosition: "top",
  },
  {
    id: "dude2",
    label: "Metodología en vivo, 100% online.",
    imgSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/business-man-home-student.png",
    imgAlt: "learning",
    labelPosition: "bottom",
  },
  {
    id: "dude3",
    label: "Tu espacio para practicar y mejorar.",
    imgSrc:
      "https://pub-74a58968a0814f12bf1cecf8c23125ee.r2.dev/images/woman-in-laptop-home.png",
    imgAlt: "learning",
    labelPosition: "top",
  },
];

export function LearnCTA() {
  return (
    <section className="bg-brand-blue px-6 pb-20 pt-20 w-full relative">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-bold text-5xl max-w-5xl text-white">
            Aprende inglés con una{" "}
            <span className="text-brand-yellow-dark">metodología creada</span>{" "}
            para{" "}
            <span className="text-brand-gray-blue">
              progresar sin perder tiempo
            </span>
          </h2>
          <div className="flex flex-col gap-10 mt-4 md:flex-row w-full">
            {learningData.map((item) => (
              <div className="relative" key={item.id}>
                <div
                  className="max-w-xl w-full place-self-center rounded-2xl"
                  key={item.id}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={600}
                    height={600}
                    className="object-cover size-full max-w-full"
                  />
                </div>
                <p
                  className={cn(
                    "text-white font-semibold text-lg left-4 mt-4 px-2 absolute max-w-60",
                    {
                      "top-2": item.labelPosition === "top",
                      "bottom-5": item.labelPosition === "bottom",
                      "text-black": item.labelPosition === "top",
                    }
                  )}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { animals } from "../../../animails";
import { CardAnimals } from "./card-animal";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ListAnimals = ({ title }: { title?: string }) => {
  const heading = title ?? "Encontre seu novo melhor amigo";

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="px-16 xl:px-0 xl:max-w-[75vw] mx-auto mt-16">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
          {heading}
        </h3>

        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full mt-8"
          setApi={setApi}
        >
          <CarouselContent>
            {animals.map((animal, index) => {
              return (
                <CarouselItem
                  key={animal.id}
                  className={`basis-1/1 lg:basis-1/2 xl:basis-1/3 py-2 px-8 md:px-0`}
                >
                  <div
                    className={`transition-all duration-500 ease-in-out rounded-2xl mx-auto ${
                      current == index + 1
                        ? "shadow-lg z-10 opacity-100 -translate-y-2"
                        : "scale-80 opacity-80"
                    }`}
                  >
                    <CardAnimals
                      animal={animal}
                      active={current == index + 1}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="bg-secondary text-secondary-foreground" />
          <CarouselNext className="bg-secondary text-secondary-foreground" />
        </Carousel>

        <div className="flex justify-end w-full mt-0 gap-1">
          <Link
            href={"/animais"}
            className="flex justify-end w-full mt-0 gap-1 lg:px-16"
          >
            <p className="font-semibold">Ver mais</p>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

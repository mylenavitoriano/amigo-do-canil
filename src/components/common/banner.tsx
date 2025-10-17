"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRef } from "react";

export const BannerHome = () => {
  // useRef para o autoplay
  const autoplay = useRef(
    Autoplay({
      delay: 10000, // tempo entre slides (ms)
      stopOnInteraction: false, // continua rodando mesmo se o usuário interagir
    })
  );
  return (
    <div>
      <Carousel
        plugins={[autoplay.current]}
        className="w-full"
        opts={{
          loop: true, // para voltar ao início
        }}
      >
        <CarouselContent>
          <CarouselItem className="bg-banner-green md:max-h-[500px] lg:max-h-[450px] h-full">
            <div className="flex flex-col md:flex-row md:max-h-[500px] lg:max-h-[450px] h-full md:items-start justify-center">
              <div className="space-y-2 md:space-y-5 px-4 mt-8 md:mt-12 lg:mt-20 md:w-[50%] xl:w-fit md:px-10">
                <p className="text-text-primary text-xl/5 md:text-xl lg:text-3xl font-semibold max-w-[80%] md:max-w-full">
                  Mude uma vida hoje. Adote um amigo!
                </p>
                <p className="text-muted-foreground text-sm/4 md:text-base lg:text-xl md:w-[80%]">
                  Adotar é mais do que salvar uma vida — é ganhar um companheiro
                  para sempre.
                </p>
                <Button className="mt-2.5 lg:mt-8 lg:text-lg lg:p-6">
                  Quero adotar
                </Button>
              </div>
              <div className="md:w-[50%] xl:w-fit h-full">
                <Image
                  src="/image-banner-01-mobile.png"
                  alt="Quero adotar"
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full md:hidden"
                />

                <Image
                  src="/image-banner-01.png"
                  alt="Quero adotar"
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto hidden md:block md:max-h-[500px] lg:max-h-[450px]"
                />
              </div>
            </div>
          </CarouselItem>
          {/* <CarouselItem className="bg-banner-orange md:max-h-[500px] lg:max-h-[450px] h-full">
            <div className="flex flex-col-reverse md:flex-row md:gap-6 md:max-h-[500px] lg:max-h-[450px] h-full md:items-start justify-center">
              <div className="md:w-[50%] xl:w-fit h-full">
                <Image
                  src="/image-banner-02-mobile.png"
                  alt="Confira a Agenda"
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full md:hidden"
                />

                <Image
                  src="/image-banner-02.png"
                  alt="Confira a Agenda"
                  quality={100}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-full w-auto hidden md:block md:max-h-[500px] lg:max-h-[450px]"
                />
              </div>
              <div className="space-y-2 md:space-y-5 px-4 mt-8 md:mt-12 lg:mt-20 md:w-[50%] xl:w-fit md:px-10">
                <p className="text-text-secondary text-xl/5 md:text-xl lg:text-3xl font-semibold max-w-[80%] md:max-w-full">
                  Doe, Adote e Transforme Vidas
                </p>
                <p className="text-muted-foreground text-sm/4 md:text-base lg:text-xl md:w-[80%]">
                  Venha conhecer nossos eventos e ajudar a transformar a vida de
                  muitos peludos.
                </p>
                <Button
                  className="mt-2.5 lg:mt-8 lg:text-lg lg:p-6"
                  variant={"secondary"}
                >
                  Confira a Agenda
                </Button>
              </div>
            </div>
          </CarouselItem> */}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

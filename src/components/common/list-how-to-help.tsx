"use client";

import { useEffect, useRef, useState } from "react";
import { CardHowToHelp } from "./card-how-to-help";
import { Button } from "../ui/button";
import Link from "next/link";

export const ListHowToHelp = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const latestActiveIdRef = useRef(activeId);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const listCards = [
    {
      id: 0,
      title: "Adote com o Coração",
      description: "Dê um lar e amor a quem só precisa de uma chance.",
      icon: "/icon-paw.svg",
      image: "/image-card-adote.png",
    },
    {
      id: 1,
      title: "Doe Amor e Esperança",
      description: "Doe ração, mantimentos ou ajude financeiramente.",
      icon: "/icon-donation.svg",
      image: "/image-card-doacao.png",
    },
    {
      id: 2,
      title: "Seja um Voluntário",
      description: "Doe seu tempo e carinho aos nossos resgates.",
      icon: "/icon-voluntary.svg",
      image: "/image-card-voluntario.png",
    },
    {
      id: 3,
      title: "Apadrinhe um Amigo",
      description: "Acompanhe e apoie de perto um dos nossos peludos.",
      icon: "/icon-gift.svg",
      image: "/image-card-apadrinhe.png",
    },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleId = latestActiveIdRef.current;

        for (const entry of entries) {
          const ratio = entry.intersectionRatio;
          const id = Number((entry.target as HTMLElement).dataset.id);
          if (ratio > maxRatio + 0.05) {
            // exige diferença mínima
            maxRatio = ratio;
            visibleId = id;
          }
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (visibleId !== latestActiveIdRef.current) {
            latestActiveIdRef.current = visibleId;
            setActiveId(visibleId);
          }
        }, 120);
      },
      {
        rootMargin: "-10% 0px -10% 0px",
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 mt-16 px-5 xl:px-0 xl:max-w-[75vw] mx-auto">
      <h3 className="text-xl md:text-2xl text-text-primary font-semibold text-center">
        Como fazer parte dessa corrente do bem
      </h3>

      {/* ===== MOBILE: empilhamento progressivo ===== */}
      <div className="flex flex-col gap-5 md:hidden">
        {listCards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            data-id={card.id}
            className={`sticky top-5 right-0 left-0 transition-all duration-500 ease-in-out transform ${
              activeId === card.id
                ? "scale-105 opacity-100 z-10"
                : "scale-100 opacity-90 z-0"
            }`}
          >
            <CardHowToHelp
              card={card}
              isActive={activeId === card.id}
              onHover={() => {}}
            />
          </div>
        ))}
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:flex flex-col gap-6 md:flex-row md:items-stretch md:justify-center md:gap-4 transition-all duration-500 w-full">
        {listCards.map((card) => (
          <CardHowToHelp
            key={card.id}
            card={card}
            isActive={activeId === card.id}
            onHover={setActiveId}
          />
        ))}
      </div>

      <Button className="lg:mt-8 lg:text-lg lg:p-6" variant="secondary" asChild>
        <Link
          target="_blank"
          href="https://wa.me/5519996860560?text=Ol%C3%A1!%20Conheci%20o%20Amigo%20do%20Canil%20pelo%20site%20e%20gostaria%20de%20saber%20como%20posso%20ajudar%20a%20ONG."
        >
          Quero ajudar
        </Link>
      </Button>
    </div>
  );
};

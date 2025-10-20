"use client";

import { useState } from "react";
import { CardHowToHelp } from "./card-how-to-help";
import { Button } from "../ui/button";
import Link from "next/link";

export const ListHowToHelp = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const listCards = [
    {
      id: 0,
      title: "Adote com o Coração",
      description: "Dê um lar e amor a quem só precisa de uma chance.",
      icon: "/icons/icon-paw.svg",
      image: "/image-card-adote.png",
    },
    {
      id: 1,
      title: "Doe Amor e Esperança",
      description: "Doe ração, mantimentos ou ajude financeiramente.",
      icon: "/icons/icon-donation.svg",
      image: "/image-card-doacao.png",
    },
    {
      id: 2,
      title: "Seja um Voluntário",
      description: "Doe seu tempo e carinho aos nossos resgates.",
      icon: "/icons/icon-voluntary.svg",
      image: "/image-card-voluntario.png",
    },
    {
      id: 3,
      title: "Apadrinhe um Amigo",
      description: "Acompanhe e apoie de perto um dos nossos peludos.",
      icon: "/icons/icon-gift.svg",
      image: "/image-card-apadrinhe.png",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 mt-16 px-5 xl:px-0 xl:max-w-[75vw] mx-auto">
      <h3 className="text-xl md:text-2xl text-text-primary font-semibold text-center">
        Como fazer parte dessa corrente do bem
      </h3>

      {/* ===== MOBILE: empilhamento progressivo ===== */}
      <ul className="grid grid-cols-1 list-none grid-rows-4 md:hidden">
        {listCards.map((card, i) => (
          <li
            key={card.id}
            data-id={card.id}
            className={"sticky h-[50vh] top-0"}
            style={{
              paddingTop: `${(i + 1) * 0.5}rem`,
            }}
          >
            <CardHowToHelp card={card} isActive={true} onHover={() => {}} />
          </li>
        ))}
      </ul>

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

import Image from "next/image";

interface CardHowToHelpProps {
  card: {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
  };
  isActive: boolean;
  onHover: (id: number) => void;
}

export const CardHowToHelp = ({
  card,
  isActive,
  onHover,
}: CardHowToHelpProps) => {
  return (
    <div
      onMouseEnter={() => {
        if (window.innerWidth >= 768) onHover(card.id);
      }}
      className={`
        relative rounded-2xl overflow-hidden p-6 text-white flex flex-col items-start justify-end
        h-full md:h-[320px] lg:h-[340px]
        w-full md:transition-all md:duration-700 md:ease-in-out md:cursor-pointer
        ${isActive ? "md:w-[40%]" : "md:w-[20%]"}
      `}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${card.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY: controla o escurecimento dependendo de isActive */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300
                    ${isActive ? "bg-black/20" : "bg-black/70"}`}
      />

      {/* CONTEÚDO: acima do overlay */}
      <div className="relative z-10 md:h-46">
        <div className="h-16 w-16 flex items-end justify-start">
          <Image src={card.icon} alt={card.title} width={60} height={60} />
        </div>
        <p className="text-xl/7 md:text-2xl/7 font-semibold mt-1 md:mt-3 w-36">
          {card.title}
        </p>

        {/* descrição mostrada apenas quando ativo */}
        <p
          className={`text-sm/6 md:text-lg/6 mt-1 md:mt-2 md:transition-all md:duration-1000 md:ease-in-out 
            ${
              isActive
                ? "md:opacity-100 md:translate-y-0 md:delay-200"
                : "md:opacity-0 md:translate-y-3 md:delay-0"
            }`}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

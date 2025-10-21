import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AboutUsHome = () => {
  return (
    <div className="flex px-5 mt-16 gap-8 lg:gap-16 md:justify-between xl:px-0 md:items-center xl:max-w-[75vw] mx-auto">
      <Image
        alt="Cachorro branco e preto em feira de adoção"
        src="/image-sobre-nos-home.webp"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full md:max-h-[510px] w-full md:w-auto hidden md:block"
        quality={100}
      />

      <div className="md:w-[60%]">
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary">
          Um pouco sobre nós...
        </h3>
        <div className="text-sm md:text-base text-muted-foreground space-y-2.5 mt-5">
          <p>
            Na ONG Amigo do Canil, dedicamos nosso trabalho a resgatar e acolher
            animais em situação de risco — especialmente aqueles que ficam fora
            do protocolo do Canil Municipal.
          </p>
          <ul className="list-disc pl-6">
            <li>Tutores que faleceram, foram internados ou presos;</li>
            <li>Famílias que se mudaram e não têm com quem deixar o animal;</li>
            <li>Pessoas em dificuldade financeira;</li>
            <li>Animais de rua saudáveis, mas vulneráveis;</li>
            <li>Tutores em situação de dependência química;</li>
            <li>Casos de maus-tratos e violência doméstica.</li>
          </ul>

          <Image
            alt="Cachorro branco e preto em feira de adoção"
            src="/image-sobre-nos-home.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full md:hidden py-2.5"
            quality={100}
            loading="lazy"
          />
          <p>
            Além dos resgates, realizamos feiras mensais de adoção e, quando
            possível, doamos ração a famílias carentes. Cada resgate é avaliado
            conforme nossa capacidade, pois cuidar bem é o primeiro passo para
            transformar vidas.
          </p>
          <div className="flex justify-start w-full mt-5 gap-1">
            <Link
              href={"/sobre"}
              className="flex justify-start w-full mt-0 gap-1 text-text-primary"
            >
              <p className="font-semibold">Conhecer mais</p>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

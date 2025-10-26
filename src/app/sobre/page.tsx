import Image from "next/image";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import { Coordination } from "./components/coordination";
import { Volunteers } from "./components/volunteers";
import { Contribute } from "../../components/common/contribute";

import type { Metadata } from "next";
import { Adoptions } from "./components/adoptions";

export const metadata: Metadata = {
  title: "Sobre nós | Amigo do Canil",
  description:
    "Conheça a história da ONG Amigo do Canil, nossa missão, visão e os projetos que salvam vidas todos os dias.",
};

export default function SobreNos() {
  return (
    <>
      <Header />
      <div className="px-5 mt-8 xl:px-0 xl:max-w-[75vw] mx-auto">
        <div className="flex gap-10 items-center">
          <Image
            alt="Cinco cachorros filhotes juntos sentados no chão"
            src="/image-sobre-nos.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-[40%] hidden lg:block py-2.5"
            quality={100}
          />
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-start">
              Sobre a ONG
            </h3>
            <div className="space-y-4 lg:text-lg text-muted-foreground">
              <p>
                Na ONG Amigo do Canil, dedicamos nosso trabalho a resgatar e
                acolher animais em situação de risco — especialmente aqueles que
                ficam fora do protocolo do Canil Municipal.
              </p>
              <ul className="list-disc pl-8">
                <li>Tutores que faleceram, foram internados ou presos;</li>
                <li>
                  Famílias que se mudaram e não têm com quem deixar o animal;
                </li>
                <li>Pessoas em dificuldade financeira;</li>
                <li>Animais de rua saudáveis, mas vulneráveis;</li>
                <li>Tutores em situação de dependência química;</li>
                <li>Casos de maus-tratos e violência doméstica.</li>
              </ul>
              <Image
                alt="Cinco cachorros filhotes juntos sentados no chão"
                src="/image-sobre-nos.webp"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full lg:hidden py-2.5"
                quality={100}
              />
              <p>
                Além dos resgates, realizamos feiras mensais de adoção e, quando
                possível, doamos ração a famílias carentes. Cada resgate é
                avaliado conforme nossa capacidade, pois cuidar bem é o primeiro
                passo para transformar vidas.
              </p>
            </div>
          </div>
        </div>

        <Coordination />
        <Volunteers />
        <Adoptions />
      </div>
      <Contribute />
      <Footer />
    </>
  );
}

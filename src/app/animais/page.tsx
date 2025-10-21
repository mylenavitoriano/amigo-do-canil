import { animals } from "../../data/animails";
import { CardAnimals } from "../../components/common/card-animal";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Encontre seu novo melhor amigo | Amigo do Canil",
  description:
    "Cada focinho aqui tem uma história de superação. Adote um cão ou gato da Amigo do Canil e ofereça um recomeço cheio de amor, segurança e carinho.",
};

export default function Animals() {
  return (
    <>
      <Header />
      <div className="px-5 mt-8 xl:px-0 xl:max-w-[75vw] mx-auto">
        <div className="flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-start">
            Conheça nossos animais
          </h3>
          <p className="text-base md:text-xl mt-1 max-w-xl text-start">
            Encontre seu novo melhor amigo
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-8">
          {animals.map((animal) => (
            <CardAnimals key={animal.id} animal={animal} active={true} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

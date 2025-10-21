import Image from "next/image";
import { listVolunteers } from "../../../data/volunteers";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export const Volunteers = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-center">
        Mãos e Patas que Transformam o Mundo
      </h3>
      <p className="text-base md:text-xl mt-2.5 lg:max-w-[80%] xl:max-w-[70%] text-center text-muted-foreground mx-auto">
        Unidos por amor e propósito, nossos voluntários dedicam tempo, carinho e
        esperança para mudar a vida de cada animal que passa por nossas mãos — e
        patinhas.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-center gap-4 flex-wrap mt-8">
        {listVolunteers
          .sort(() => Math.random() - 0.5)
          .map((voluntary) => (
            <div key={voluntary.id} className="space-y-1 lg:w-1/6">
              <Image
                src={voluntary.image}
                alt={voluntary.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-2xl"
                quality={100}
              />
              <p className="text-sm text-muted-foreground font-medium">
                {voluntary.name}
              </p>
            </div>
          ))}
      </div>

      <Button className="lg:text-lg lg:px-8 lg:py-6 rounded-2xl mt-8" asChild>
        <Link
          href={
            "https://wa.me/5519996860560?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20ser%20um%20volunt%C3%A1rio"
          }
          target="_blank"
        >
          Quero ser voluntário
        </Link>
      </Button>
    </div>
  );
};

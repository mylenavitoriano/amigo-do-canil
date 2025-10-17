import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface CardAnimalsProps {
  animal: {
    id: number;
    slug: string;
    name: string;
    gender: string;
    behavior: string;
    size: Array<string>;
    imagesURLs: Array<string>;
  };
  active?: boolean;
}

export const CardAnimals = ({ animal, active }: CardAnimalsProps) => {
  return (
    <div key={animal.id} className="bg-white p-2.5 pb-4 rounded-2xl">
      <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
        <Image
          alt={animal.name}
          src={animal.imagesURLs[0]}
          fill
          className="object-cover object-top"
          quality={100}
        />
      </div>

      <div className="mt-2 px-2 md:text-lg">
        <h3 className="font-semibold text-lg md:text-2xl mb-1">
          {animal.name}
        </h3>
        <p>{animal.behavior}</p>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Sexo:</span> {animal.gender}
          </p>
          <p>
            <span className="font-semibold">Porte:</span>{" "}
            {animal.size.join("/")}
          </p>
        </div>
      </div>

      {active && (
        <div className="flex items-center justify-center mt-4">
          <Button className="lg:text-lg lg:px-6 rounded-2xl">
            <Link href={`/animais/${animal.slug}`}>Quero adotar</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

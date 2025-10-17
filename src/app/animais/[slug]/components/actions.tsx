"use client";

import Link from "next/link";
import { Button } from "../../../../components/ui/button";

interface ActionsAnimalDetailsProps {
  name: string;
  gender: string;
}

const ActionsAnimalDetails = ({ name, gender }: ActionsAnimalDetailsProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
      <Button className="lg:text-lg lg:px-8 lg:py-6 rounded-2xl" asChild>
        <Link
          target="_blank"
          href={`https://wa.me/5519996860560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20adotar%20${
            gender == "Macho" ? "o" : "a"
          }%20${name}`}
        >
          Quero adotar {gender == "Macho" ? "o" : "a"} {name}
        </Link>
      </Button>

      <Button
        className="lg:text-lg lg:px-8 lg:py-6 rounded-2xl"
        variant={"secondary"}
        asChild
      >
        <Link
          target="_blank"
          href={`https://wa.me/5519996860560?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20apadrinhar%20${
            gender == "Macho" ? "o" : "a"
          }%20${name}`}
        >
          Quero apadrinhar {gender == "Macho" ? "o" : "a"} {name}
        </Link>
      </Button>
    </div>
  );
};

export default ActionsAnimalDetails;

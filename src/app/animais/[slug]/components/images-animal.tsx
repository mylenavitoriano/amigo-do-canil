"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "../../../../lib/utils";

interface ImagesAnimalProps {
  variants: Array<string>;
  nameAnimal: string;
}

const ImagesAnimal = ({ variants, nameAnimal }: ImagesAnimalProps) => {
  const [imageSelected, setImageSelected] = useState(0);
  return (
    <div className="flex flex-col items-start gap-4">
      <Image
        src={variants[imageSelected]}
        alt={nameAnimal}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-3xl"
      />

      {variants.length > 1 && (
        <div className="flex items-center gap-2 mt-2">
          {variants.map((variant, index) => (
            <Image
              key={index}
              src={variant}
              alt={nameAnimal}
              width={80}
              height={80}
              className={cn(
                "rounded-xl cursor-pointer",
                imageSelected == index
                  ? "border-primary rounded-xl border-3"
                  : ""
              )}
              onClick={() => setImageSelected(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImagesAnimal;

import Image from "next/image";

interface CardItemProps {
  id: number;
  animalName: string;
  gender: string;
  behavior: string;
  size: Array<string>;
  imagesURLs: Array<string>;
}

const CardItem = ({
  id,
  animalName,
  gender,
  behavior,
  size,
  imagesURLs,
}: CardItemProps) => {
  return (
    <div key={id} className="bg-white p-2.5 rounded-2xl">
      <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
        <Image
          alt={animalName}
          src={imagesURLs[0]}
          fill
          className="object-cover object-top"
          quality={100}
        />
      </div>

      <div className="mt-2 px-2 md:text-lg">
        <h3 className="font-semibold text-lg md:text-2xl mb-1">{animalName}</h3>
        <p>{behavior}</p>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Sexo:</span> {gender}
          </p>
          <p>
            <span className="font-semibold">Porte:</span> {size.join("/")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

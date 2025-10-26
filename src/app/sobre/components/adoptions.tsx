"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { fetchCloudinaryImages } from "../../../actions/get-images-cloudinary";
import { CloudinaryResource } from "../../api/cloudinary/list/route";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Adoptions = () => {
  const [visibleImages, setVisibleImages] = useState<CloudinaryResource[]>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { data: images } = useQuery<CloudinaryResource[]>({
    queryKey: ["cloudinary-images"], // cache key
    queryFn: () => fetchCloudinaryImages("amigo-do-canil/adocoes"),
  });

  useEffect(() => {
    setVisibleImages(images?.sort(() => Math.random() - 0.5));
  }, [images]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && images) {
      setSelectedIndex((selectedIndex + 1) % images?.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && images) {
      setSelectedIndex((selectedIndex - 1 + images?.length) % images?.length);
    }
  };

  if (images && visibleImages)
    return (
      <div className="mt-20">
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-center">
          Famílias Formadas com Amor
        </h3>
        <p className="text-base md:text-xl mt-2.5 lg:max-w-[80%] xl:max-w-[70%] text-center text-muted-foreground mx-auto">
          Cães e gatos que encontraram seu lar, e humanos que ganharam novos
          melhores amigos.
        </p>
        <div className="w-full md:max-w-[80%] mx-auto mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, colIndex) => (
              <div key={colIndex} className="grid gap-4">
                {visibleImages
                  .slice(0, 8)
                  .filter((_, index) => index % 4 === colIndex)
                  .map((img, imgIndex) => {
                    const globalIndex = visibleImages
                      .slice(0, 8)
                      .findIndex((i) => i === img); // índice global
                    return (
                      <div
                        key={imgIndex}
                        onClick={() => setSelectedIndex(globalIndex)}
                        className="relative cursor-pointer group"
                      >
                        <div className="relative rounded-lg overflow-hidden">
                          <Image
                            src={img.secure_url}
                            alt={
                              img.display_name || `Imagem ${globalIndex + 1}`
                            }
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {globalIndex ===
                            visibleImages.slice(0, 8).length - 1 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg h-full">
                              <span className="text-white text-lg font-semibold tracking-wide">
                                Ver mais
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>

        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Botão fechar */}
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <X size={32} />
            </button>

            {/* Botão anterior */}
            <button
              className="absolute left-2 md:left-10 text-white hover:text-gray-300 cursor-pointer"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Imagem ampliada */}
            <div className="max-w-[80%] md:max-w-4xl max-h-[90vh] h-full w-full px-4 flex justify-center">
              <Image
                src={images[selectedIndex].secure_url}
                alt={`Imagem ${selectedIndex + 1}`}
                width={600}
                height={600}
                sizes="100vw"
                className="rounded-xl object-contain w-auto h-full"
              />
            </div>

            {/* Botão próximo */}
            <button
              className="absolute right-2 md:right-10 text-white hover:text-gray-300 cursor-pointer"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>
          </div>
        )}
      </div>
    );
};

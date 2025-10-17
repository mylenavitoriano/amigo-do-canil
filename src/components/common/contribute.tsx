import Image from "next/image";
import { Wave } from "./wave";
import { FaLocationDot, FaPix } from "react-icons/fa6";

export const Contribute = () => {
  return (
    <div className="relative overflow-hidden">
      <Wave />
      <div className="relative z-10 py-8 px-8 xl:max-w-[75vw] mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-center">
          Contribua com nossa causa
        </h3>
        <p className="text-base md:text-xl mt-1 max-w-xl text-center w-full mx-auto">
          Cada doação, por menor que pareça, muda uma vida
        </p>

        <div className="mt-8 flex flex-col lg:flex-row justify-between gap-7">
          <div className="bg-white rounded-2xl p-8 w-full flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <div className="space-y-2 md:space-y-3">
              <p className="text-lg md:text-xl font-semibold text-center md:text-start">
                Ajude com uma doação
              </p>
              <p className="text-muted-foreground font-medium text-sm md:text-base text-center md:text-start">
                Sua contribuição ajuda com resgates, castrações e cuidados
                diários dos animais.
              </p>
              <div className="hidden md:flex items-center gap-2 mt-5">
                <FaPix size={32} className="text-primary" />
                <p className="font-semibold text-lg">58.324.268/0001-69</p>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <Image
                src="/qr-code.png"
                alt="58.324.268/0001-69"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto lg:w-full h-[190px] lg:h-auto mx-auto"
              />
            </div>
            <div className="flex md:hidden items-center gap-2 mt-5">
              <FaPix size={32} className="text-primary" />
              <p className="font-semibold text-base/5 md:text-lg">
                58.324.268/0001-69
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 w-full flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <div className="space-y-2 md:space-y-3">
              <p className="text-lg md:text-xl font-semibold text-center md:text-start">
                Doe ração e mantimentos
              </p>
              <p className="text-muted-foreground font-medium text-sm md:text-base/5 text-center md:text-start">
                Você também pode doar ração diretamente em nosso ponto de
                coleta.
              </p>
              <div className="hidden md:flex items-center gap-2 mt-5">
                <FaLocationDot size={32} className="text-primary" />
                <p className="font-semibold  md:text-lg/5">
                  PetCamp <br /> Av. Saburô Akamine, 1125
                </p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14755.018690161309!2d-47.58524112144637!3d-22.40060409080469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7db183c9feebd%3A0x8f621a5c1dc0b9c9!2sAv.%20Sabur%C3%B4%20Akamine%2C%201125%20-%20Jardim%20Matheus%20Maniero%2C%20Rio%20Claro%20-%20SP%2C%2013504-251!5e0!3m2!1spt-BR!2sbr!4v1760638298541!5m2!1spt-BR!2sbr"
              height="190"
              className="border-0 w-full md:w-[50%]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="flex md:hidden items-center gap-2 mt-5">
              <FaLocationDot size={32} className="text-primary" />
              <p className="font-semibold text-base/5 md:text-lg/5">
                PetCamp <br /> Av. Saburô Akamine, 1125
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import { FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mx-auto py-5 px-10 gap-5">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo Amigo do Canil"
            width={45}
            height={45}
            quality={100}
          />
          <p className="text-base font-semibold">© 2025 - Amigo do Canil</p>
        </div>

        <div className="flex gap-4 md:gap-5 flex-col md:flex-row items-center justify-center">
          <Link
            href={
              "https://wa.me/5519996860560?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20ONG."
            }
            target="_blank"
            className="flex items-end gap-1"
          >
            <FaWhatsapp size={20} />
            <p className="text-sm md:text-base font-medium">(19) 99686-0560</p>
          </Link>
          <Link
            href={"mailto:amigodocanilrioclaro@gmail.com"}
            target="_blank"
            className="flex items-end gap-1"
          >
            <FaRegEnvelope size={20} />
            <p className="text-sm md:text-base font-medium">
              amigodocanilrioclaro@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

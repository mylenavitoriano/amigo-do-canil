import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 mx-auto">
      <Link href={"/"}>
        <Image
          src="/logo-name.svg"
          alt="Amigo do Canil"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-28 md:w-40"
        />
      </Link>

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
    </header>
  );
};

export default Header;

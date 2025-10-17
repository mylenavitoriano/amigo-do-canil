import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

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

      <div className="flex gap-2.5 md:gap-4">
        <Link
          href={"https://www.facebook.com/share/g/17BbKPq4uu/"}
          target="_blank"
        >
          <FaFacebook size={20} className="md:h-6 md:w-6" />
        </Link>
        <Link
          href={"https://www.instagram.com/amigodocanilrioclaro/"}
          target="_blank"
        >
          <FaInstagram size={20} className="md:h-6 md:w-6" />
        </Link>
        <Link
          href={
            "https://wa.me/5519996860560?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20ONG."
          }
          target="_blank"
        >
          <FaWhatsapp size={20} className="md:h-6 md:w-6" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

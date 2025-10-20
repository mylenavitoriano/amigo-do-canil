import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

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

      <div className="hidden lg:flex gap-8">
        <div className="flex gap-4 font-medium text-lg">
          <p>
            <Link href={"/animais"}>Adote</Link>
          </p>
          <p>
            <Link href={"/sobre"}>Sobre</Link>
          </p>
          <p>
            <Link href={"/eventos"}>Eventos</Link>
          </p>
        </div>
        <div className=" lg:flex gap-3 md:gap-4">
          <Link
            href={"https://www.facebook.com/share/g/17BbKPq4uu/"}
            target="_blank"
          >
            <FaFacebook size={28} />
          </Link>
          <Link
            href={"https://www.instagram.com/amigodocanilrioclaro/"}
            target="_blank"
          >
            <FaInstagram size={28} />
          </Link>
          <Link
            href={
              "https://wa.me/5519996860560?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20ONG."
            }
            target="_blank"
          >
            <FaWhatsapp size={28} />
          </Link>
        </div>
      </div>

      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant={"outline"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>

            <div className="space-y-2 font-semibold mt-4">
              <p>
                <Link href={"/animais"}>Adote</Link>
              </p>
              <p>
                <Link href={"/sobre"}>Sobre</Link>
              </p>
              <p>
                <Link href={"/eventos"}>Eventos</Link>
              </p>
            </div>

            <div className="flex gap-3 md:gap-4 mt-4">
              <Link
                href={"https://www.facebook.com/share/g/17BbKPq4uu/"}
                target="_blank"
              >
                <FaFacebook size={28} />
              </Link>
              <Link
                href={"https://www.instagram.com/amigodocanilrioclaro/"}
                target="_blank"
              >
                <FaInstagram size={28} />
              </Link>
              <Link
                href={
                  "https://wa.me/5519996860560?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20ONG."
                }
                target="_blank"
              >
                <FaWhatsapp size={28} />
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Importa a fonte Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"], // adicione os pesos que quiser usar
});

export const metadata: Metadata = {
  title: "Amigo do Canil | ONG de proteção animal",
  description:
    "Conheça a Amigo do Canil, uma ONG que resgata, acolhe e busca lares para cães e gatos em Rio Claro.",
  openGraph: {
    title: "Amigo do Canil | ONG de proteção animal",
    description:
      "Ajude a transformar vidas! Veja nossos resgates e saiba como colaborar.",
    url: "https://www.amigodocanil.com.br",
    siteName: "Amigo do Canil",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

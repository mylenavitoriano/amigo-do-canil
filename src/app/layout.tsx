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
  title: "Amigo do Canil",
  description: "Conheça nossos animais",
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

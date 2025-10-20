import Image from "next/image";

export const Coordination = () => {
  return (
    <div className="mt-16 lg:w-[80%] xl:w-[70%] mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-start md:text-center">
        A Força que Transforma Vidas
      </h3>

      <div className="flex gap-10 items-center justify-center mt-8">
        <Image
          alt="Fabíola Custodio - Presidente da ONG"
          src="/people/fabiola-presidente.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full max-w-[300px] w-full hidden md:block"
          quality={100}
        />
        <div className="space-y-4 lg:text-lg text-muted-foreground">
          <p>
            Nossa presidente, Fabíola Custodio, é o coração da ONG Amigo do
            Canil.
          </p>
          <Image
            alt="Fabíola Custodio - Presidente da ONG"
            src="/people/fabiola-presidente.png"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-w-[250px] w-full md:hidden mx-auto"
            quality={100}
          />
          <p>
            Movida por um amor imenso pelos animais e pelo desejo de mudar
            realidades, ela transformou compaixão em ação. Desde o início,
            dedica seus dias (e muitas noites!) a resgatar, cuidar e encontrar
            lares cheios de amor para cães e gatos em situação de abandono.
          </p>
          <p>
            Com sua sensibilidade e determinação, inspira todos os voluntários e
            mostra que pequenos gestos podem salvar grandes vidas.
          </p>
        </div>
      </div>

      <div className="flex gap-10 items-center justify-center mt-4 md:mt-0">
        <div className="space-y-4 lg:text-lg text-muted-foreground">
          <p>
            Ao seu lado, o vice-presidente Alexandre Dabronzo Custodio
            representa a força e o exemplo que sustentam essa missão.
          </p>
          <Image
            alt="Alexandre Dabronzo - Vice Presidente da ONG"
            src="/people/alexandre-vice.png"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-w-[250px] w-full md:hidden mx-auto"
            quality={100}
          />
          <p>
            Inspirado desde sempre pela causa animal, Alexandre tem um olhar
            atento e um coração generoso — alimentando, acolhendo e resgatando
            animais por toda a vida. Seu empenho em garantir uma existência
            digna, amorosa e segura para cada um deles reforça o propósito da
            ONG e mostra que a transformação acontece quando amor e ação
            caminham juntos.
          </p>
        </div>
        <Image
          alt="Alexandre Dabronzo - Vice Presidente da ONG"
          src="/people/alexandre-vice.png"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full max-w-[300px] w-full hidden md:block"
          quality={100}
        />
      </div>
    </div>
  );
};

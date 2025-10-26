import { animals } from "../../../data/animails";
import Footer from "../../../components/common/footer";
import Header from "../../../components/common/header";
import { notFound } from "next/navigation";
import ImagesAnimal from "./components/images-animal";
import ActionsAnimalDetails from "./components/actions";
import { ListAnimals } from "../../../components/common/list-animals";
import { Metadata } from "next";

interface AnimalDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: AnimalDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const animalDetail = animals.find((animal) => animal.slug === slug);

  if (!animalDetail) {
    return {
      title: "Animal não encontrado | Amigo do Canil",
      description:
        "O animal que você tentou acessar não foi encontrado. Conheça outros pets disponíveis para adoção na Amigo do Canil.",
    };
  }

  // Limpa e limita a descrição
  const cleanDescription = animalDetail.description
    .replace(/\n/g, " ") // remove quebras de linha
    .replace(/\s+/g, " ") // normaliza espaços
    .slice(0, 155)
    .trim();

  const pageTitle = `${animalDetail.name} para adoção | Amigo do Canil`;
  const pageUrl = `https://www.amigodocanil.com.br/animais/${slug}`;
  const imageUrl =
    animalDetail.imagesURLs?.[0] ||
    "https://www.amigodocanil.com.br/default.jpg";

  return {
    title: pageTitle,
    description: cleanDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: cleanDescription,
      url: pageUrl,
      type: "article",
      siteName: "Amigo do Canil",
      locale: "pt_BR",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: animalDetail.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: cleanDescription,
      images: [imageUrl],
    },
  };
}

const AnimalDetailsPage = async ({ params }: AnimalDetailsPageProps) => {
  const { slug } = await params;
  const animalDetail = animals.find((animal) => animal.slug == slug);

  if (!animalDetail) {
    return notFound();
  }
  return (
    <>
      <Header />
      <div className="px-5 mt-8 xl:px-0 xl:max-w-[75vw] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-10">
          <div className="w-full lg:w-[40%]">
            <ImagesAnimal
              nameAnimal={animalDetail.name}
              variants={animalDetail.imagesURLs}
              key={animalDetail.id}
            />
          </div>

          <div className="w-full lg:w-[50%] space-y-5 lg:space-y-5">
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-start">
                Adote {animalDetail.gender == "Macho" ? "o" : "a"}{" "}
                {animalDetail.name}
              </h3>
              <p className="text-primary font-semibold text-lg">
                {animalDetail.gender}
              </p>
            </div>

            <div className="text-muted-foreground space-y-2 md:space-y-4 text-base md:text-lg/6">
              {animalDetail.description.split("\n").map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
            </div>

            <p className="space-y-4 text-base md:text-lg">
              <strong>Porte: </strong>
              {animalDetail.size.join("/")}
            </p>

            <ActionsAnimalDetails
              gender={animalDetail.gender}
              name={animalDetail.name}
            />
          </div>
        </div>
      </div>

      <ListAnimals title={"Conheça mais peludos"} />
      <Footer />
    </>
  );
};

export default AnimalDetailsPage;

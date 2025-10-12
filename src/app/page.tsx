import { animals } from "../../animails";
import CardItem from "../components/common/card-item";
import Filters from "../components/common/filters";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import { Wave } from "../components/common/wave";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-x-hidden">
        <Wave />
        <div className="relative z-10 py-8 px-8 lg:px-16">
          <h1 className="text-2xl md:text-4xl font-semibold text-secondary">
            Conheça nossos animais
          </h1>
          <p className="text-base md:text-xl mt-1 max-w-xl">
            Encontre seu novo melhor amigo
          </p>

          <div className="mt-8">
            {/* <Filters /> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
              {animals.map((animal) => (
                <CardItem
                  key={animal.id}
                  animalName={animal.name}
                  gender={animal.gender}
                  id={animal.id}
                  imagesURLs={animal.imagesURLs}
                  size={animal.size}
                  behavior={animal.behavior}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

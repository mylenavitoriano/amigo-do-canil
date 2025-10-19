import { upcomingEvents } from "../../../events";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import { ListAnimals } from "../../components/common/list-animals";
import { cn } from "../../lib/utils";

export default function Events() {
  // Função para calcular a diferença em dias entre duas datas
  const getDaysDifference = (date1: Date, date2: Date) => {
    const diffTime = date1.getTime() - date2.getTime();
    return diffTime / (1000 * 60 * 60 * 24); // converte milissegundos para dias
  };

  // Primeiro: filtra e depois ordena do mais recente para o mais antigo
  const filteredAndSortedEvents = upcomingEvents
    .filter((event) => {
      const eventDate = new Date(event.date);
      const today = new Date();
      const diffDays = getDaysDifference(today, eventDate);

      // Mantém eventos que acontecerão ou aconteceram há no máximo 20 dias
      return diffDays <= 20;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Header />
      <div className="px-5 mt-8 xl:px-0 xl:max-w-[75vw] mx-auto space-y-10 md:space-y-16">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary text-center">
            Juntos por uma causa: participe dos nossos eventos!
          </h3>
          <p className="text-base md:text-xl mt-1 lg:max-w-[80%] xl:max-w-[60%] text-center">
            Cada evento é uma oportunidade de fazer o bem — seja adotando,
            ajudando ou apenas compartilhando amor. Confira nossa agenda e venha
            transformar vidas conosco.
          </p>
        </div>
        <div className="bg-white rounded-2xl py-8 px-5 md:p-10 lg:w-[60%] mx-auto space-y-5 md:space-y-10 shadow-lg">
          <p className="font-semibold text-xl md:text-2xl">Eventos próximos</p>

          <div className="space-y-4">
            {filteredAndSortedEvents.map((event) => (
              <div key={event.id} className="flex gap-4 items-center">
                <div
                  className={cn(
                    "w-fit py-4 px-5 rounded-xl",
                    new Date(event.date) < new Date()
                      ? "bg-muted"
                      : "bg-primary"
                  )}
                >
                  <p
                    className={cn(
                      "font-semibold text-xl text-center",
                      new Date(event.date) < new Date()
                        ? "text-muted-foreground"
                        : "text-primary-foreground"
                    )}
                  >
                    <span className="text-2xl md:text-3xl">
                      {new Date(event.date).toLocaleString("pt-BR", {
                        day: "numeric",
                      })}
                    </span>
                    <br />
                    {new Date(event.date).toLocaleString("pt-BR", {
                      month: "short",
                    })}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg md:text-xl">
                    {event.name}
                  </p>
                  <p className="font-medium text-muted-foreground md:text-lg">
                    {event.local}
                  </p>
                  <p className="font-medium text-muted-foreground text-sm md:text-lg">
                    {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ListAnimals />
      </div>

      <Footer />
    </>
  );
}

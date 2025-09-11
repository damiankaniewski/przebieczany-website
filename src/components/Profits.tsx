import {
  FaTree,
  FaCouch,
  FaBolt,
  FaShieldAlt,
  FaHammer,
  FaUmbrellaBeach,
  FaHome,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Profits() {
  const profitItems = [
    {
      icon: <FaLocationDot className="text-green4 text-5xl " />,
      title: "Doskonała lokalizacja",
      description:
        "Dogodna lokalizacja w pobliżu Krakowa i kluczowych miejsc, z łatwym dostępem do autostrady.",
      delay: 0,
    },
    {
      icon: <FaUmbrellaBeach className="text-green4 text-5xl" />,
      title: "Taras i ogród",
      description: "Przestrzeń do relaksu i spotkań w gronie bliskich, z bezpośrednim wyjściem z salonu.",
      delay: 100,
    },
    {
      icon: <FaTree className="text-green4 text-5xl" />,
      title: "Spokojna, zielona okolica",
      description: "Usytuowanie wśród zieleni zapewnia ciszę, komfort i odpoczynek od miejskiego zgiełku.",
      delay: 200,
    },
    {
      icon: <FaHammer className="text-green4 text-5xl " />,
      title: "Solidne wykonanie",
      description: "Dom zbudowany z wysokiej jakości materiałów, spełniających wszystkie normy budowlane.",
      delay: 300,
    },
    {
      icon: <FaBolt className="text-green4 text-5xl" />,
      title: "Nowoczesne technologie",
      description: "Pompa ciepła, rekuperacja i przygotowanie pod fotowoltaikę, dla oszczędności i wygody.",
      delay: 400,
    },
    {
      icon: <FaCouch className="text-green4 text-5xl" />,
      title: "Przestronne wnętrza",
      description:
        "Funkcjonalny układ i duże przeszklenia, które wypełniają wnętrza naturalnym światłem.",
      delay: 500,
    },
    {
      icon: <FaShieldAlt className="text-green4 text-5xl" />,
      title: "Bezpieczeństwo i prywatność",
      description: "Ogrodzona działka i zamknięty teren zapewniają prywatność i spokój mieszkańców.",
      delay: 600,
    },
    {
      icon: <FaHome className="text-green4 text-5xl" />,

      title: "Komfort na co dzień",
      description:
        "Elektryczne rolety i brama garażowa na pilota, dla większej wygody i bezpieczeństwa.",
      delay: 700,
    },
  ];
  return (
    <section
      id="profits"
      className="w-full h-full flex flex-col items-center bg-grey relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold break-words max-w-full">
          PROFITY
        </p>
      </div>
      <div className="flex w-full h-full flex-col p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profitItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col text-green4 justify-center items-center px-4 space-y-3 max-md:pt-5"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="max-md:h-full h-20 flex justify-center items-center">
                {item.icon}
              </div>
              <div className="max-md:h-full h-12 lg:h-24  xl:h-16 flex justify-center items-center">
                <p className="font-semibold text-lg xl:text-xl text-center">
                  {item.title}
                </p>
              </div>
              <div className="max-md:h-full h-16 lg:h-28 xl:h-24 flex justify-center items-center">
                <p className=" text-base xl:text-lg text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

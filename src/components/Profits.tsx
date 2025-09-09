import {
  FaMapPin,
  FaTree,
  FaCouch,
  FaHeart,
  FaSolarPanel,
  FaLock,
} from "react-icons/fa";
import { FaTemperatureHalf, FaHouseChimneyWindow } from "react-icons/fa6";
export default function Profits() {
  const profitItems = [
    {
      icon: <FaMapPin className="text-green4 text-5xl " />,
      title: "Blisko Krakowa i pełnej infrastruktury miejskiej",
      description:
        "Dogodna lokalizacja w pobliżu Krakowa i kluczowych miejsc, z łatwym dostępem do autostrady.",
      delay: 0,
    },
    {
      icon: <FaTree className="text-green4 text-5xl" />,
      title: "Spokój i natura z dala od miejskiego zgiełku",
      description: "Zielona okolica łącząca ciszę i wygodę.",
      delay: 100,
    },
    {
      icon: <FaCouch className="text-green4 text-5xl" />,
      title: "Przestronne wnętrza i nowoczesne rozwiązania architektoniczne",
      description: "Domy z przestronnymi pokojami i funkcjonalnym układem.",
      delay: 200,
    },
    {
      icon: <FaHeart className="text-green4 text-5xl " />,
      title: "Prywatne, ogrodzone działki",
      description: "Działki zapewniające prywatność i przestrzeń do relaksu.",
      delay: 300,
    },
    {
      icon: <FaSolarPanel className="text-green4 text-5xl" />,

      title: "Pompa ciepła, rekuperacja, przygotowanie pod fotowoltaikę",
      description: "Energooszczędne technologie redukujące koszty.",
      delay: 400,
    },
    {
      icon: <FaTemperatureHalf className="text-green4 text-5xl" />,
      title: "Wysoka izolacja termiczna",
      description:
        "Ściany o wyjątkowej izolacji, gwarantujące oszczędność energii.",
      delay: 500,
    },
    {
      icon: <FaLock className="text-green4 text-5xl" />,
      title: "Zamknięty teren",
      description: "Ogrodzona przestrzeń z przesuwaną bramą wjazdową i furtką.",
      delay: 600,
    },
    {
      icon: <FaHouseChimneyWindow className="text-green4 text-5xl" />,

      title: "Elektryczne rolety",
      description:
        "Rolety podtynkowe sterowane elektrycznie dla większego bezpieczeństwa i wygody.",
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
